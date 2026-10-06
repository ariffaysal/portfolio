import { GITHUB_HANDLE } from "@/lib/contact";
import type { ContributionDay } from "@/components/ui/contribution-skyline";

/**
 * Reads the public contribution calendar behind github.com/<user>.
 *
 * This is the only source that reports the real daily counts without
 * credentials: GitHub's REST API exposes roughly the last 90 days of events
 * rather than the calendar, and the GraphQL `contributionsCollection` — the
 * stable choice — needs a token. So the same public fragment the profile page
 * itself loads is read here, and the parse returns nothing at all if that
 * markup ever stops matching, leaving the caller to fall back rather than
 * render an empty year.
 *
 * The request is cached for an hour, so a year is fetched at most ~24 times a
 * day and new contributions appear without a redeploy.
 */

const SOURCE = `https://github.com/users/${GITHUB_HANDLE}/contributions`;

/** How long a fetched year is reused before the next visitor triggers a refresh. */
const REVALIDATE_SECONDS = 60 * 60;

/** A calendar covering the last year is ~365 days; much shorter means the parse broke. */
const MIN_DAYS = 300;

/** A day cell: the date first, then the id that its tool-tip points at. */
const CELL = /data-date="(\d{4}-\d{2}-\d{2})"[^>]*id="contribution-day-component-([\d-]+)"/g;
/** The count exists only in the prose of the tool-tip keyed to that cell. */
const TIP = /<tool-tip[^>]*for="contribution-day-component-([\d-]+)"[^>]*>([^<]*)<\/tool-tip>/g;
const COUNT = /^(\d+)\s+contribution/;
const NONE = /^no contributions/i;

/** Paired day cells and tool-tips → `{ date, count }` per day, oldest first. */
export function parseContributionCalendar(html: string): ContributionDay[] {
  const dates = new Map<string, string>();
  for (const [, date, key] of html.matchAll(CELL)) dates.set(key, date);

  const counts = new Map<string, number>();
  for (const [, key, text] of html.matchAll(TIP)) {
    const prose = text.trim();
    if (NONE.test(prose)) counts.set(key, 0);
    else {
      const hit = COUNT.exec(prose);
      if (hit) counts.set(key, Number(hit[1]));
    }
  }

  const days: ContributionDay[] = [];
  for (const [key, date] of dates) {
    const count = counts.get(key);
    if (count !== undefined) days.push({ date, count });
  }
  return days.sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));
}

/**
 * The last year of contributions, or `undefined` when GitHub can't be read —
 * in which case the chart falls back to its own generated year instead of
 * showing a year of zeroes.
 */
export async function fetchContributions(): Promise<ContributionDay[] | undefined> {
  try {
    const response = await fetch(SOURCE, {
      headers: {
        // The fragment is served to ordinary HTML requests; a bare runtime
        // request is turned away.
        "user-agent": "Mozilla/5.0 (compatible; portfolio-activity/1.0)",
        accept: "text/html",
      },
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!response.ok) return undefined;

    const days = parseContributionCalendar(await response.text());
    return days.length >= MIN_DAYS ? days : undefined;
  } catch {
    return undefined;
  }
}
