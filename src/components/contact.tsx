import { ArrowUpRight } from "./icons";
import {
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  LOCATION,
  RESUME_URL,
  WHATSAPP_DISPLAY,
  whatsappUrl,
} from "@/lib/contact";

type Channel = {
  term: string;
  value: string;
  /** Omitted for non-link rows such as location. */
  href?: string;
};

const CHANNELS: Channel[] = [
  { term: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { term: "LinkedIn", value: "linkedin.com/in/md-arif-foysal-9516a8407", href: LINKEDIN_URL },
  { term: "GitHub", value: "github.com/ariffaysal", href: GITHUB_URL },
  { term: "WhatsApp", value: WHATSAPP_DISPLAY, href: whatsappUrl() },
  { term: "Résumé", value: "MD-Arif-Foysal-CV.pdf", href: RESUME_URL },
  { term: "Location", value: LOCATION },
];

/** A plain, uniform list of contact channels — no emphasis, no special cases. */
export default function Contact() {
  return (
    <dl className="border-t border-line">
      {CHANNELS.map((channel) => (
        <div
          key={channel.term}
          className="group grid gap-x-10 gap-y-1 border-b border-line py-5 sm:grid-cols-[9.5rem_1fr]"
        >
          <dt className="label pt-1">{channel.term}</dt>
          <dd className="min-w-0 text-[15px]">
            {channel.href ? (
              <a
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-baseline gap-2 text-ink transition-colors group-hover:text-accent"
              >
                <span className="break-all">{channel.value}</span>
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 self-center text-muted transition-colors group-hover:text-accent" />
              </a>
            ) : (
              <span className="text-ink">{channel.value}</span>
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}
