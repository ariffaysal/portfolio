import { ArrowUpRight, MailIcon } from "./icons";
import CopyEmail from "./copy-email";
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
  href: string;
};

const CHANNELS: Channel[] = [
  {
    term: "LinkedIn",
    value: "linkedin.com/in/md-arif-foysal-9516a8407",
    href: LINKEDIN_URL,
  },
  {
    term: "GitHub",
    value: "github.com/ariffaysal",
    href: GITHUB_URL,
  },
  {
    term: "WhatsApp",
    value: WHATSAPP_DISPLAY,
    href: whatsappUrl(),
  },
  {
    term: "Résumé",
    value: "MD-Arif-Foysal-CV.pdf · one page",
    href: RESUME_URL,
  },
];

/**
 * A formal correspondence block: one clearly designated primary channel
 * followed by an itemised list of the remaining ways to make contact.
 */
export default function Contact() {
  return (
    <div className="border-t border-line">
      <div className="grid gap-x-10 gap-y-4 border-b border-line py-8 sm:grid-cols-[9.5rem_1fr]">
        <p className="label pt-1.5">Primary</p>

        <div className="min-w-0">
          <a
            href={`mailto:${EMAIL}`}
            className="font-serif text-[23px] leading-tight tracking-[-0.02em] text-ink transition-colors hover:text-accent sm:text-[27px]"
          >
            {EMAIL}
          </a>

          <p className="mt-3 max-w-xl text-[13.5px] leading-relaxed text-muted">
            For role enquiries, include the position and a line about the team. For freelance work, a
            short note on scope and timeline is enough to begin.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-[13px] font-medium text-paper transition-opacity hover:opacity-85"
            >
              <MailIcon className="h-4 w-4" />
              Compose email
            </a>
            <CopyEmail value={EMAIL} />
          </div>
        </div>
      </div>

      <dl>
        {CHANNELS.map((channel) => (
          <div
            key={channel.term}
            className="group grid gap-x-10 gap-y-1 border-b border-line py-5 sm:grid-cols-[9.5rem_1fr]"
          >
            <dt className="label pt-1">{channel.term}</dt>
            <dd className="min-w-0">
              <a
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-baseline gap-2 text-[15px] text-ink transition-colors group-hover:text-accent"
              >
                <span className="break-all">{channel.value}</span>
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 self-center text-muted transition-colors group-hover:text-accent" />
              </a>
            </dd>
          </div>
        ))}

        <div className="grid gap-x-10 gap-y-1 py-5 sm:grid-cols-[9.5rem_1fr]">
          <dt className="label pt-1">Based in</dt>
          <dd className="text-[15px] text-ink">
            {LOCATION}
            <span className="text-muted"> · Bangladesh Standard Time (UTC+06:00)</span>
          </dd>
        </div>
      </dl>
    </div>
  );
}
