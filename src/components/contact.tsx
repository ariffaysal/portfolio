import { ArrowUpRight } from "./icons";
import {
  EMAIL,
  GITHUB_HANDLE,
  GITHUB_URL,
  LINKEDIN_HANDLE,
  LINKEDIN_URL,
  RESUME_URL,
  WHATSAPP_DISPLAY,
  whatsappUrl,
} from "@/lib/contact";

const CHANNELS = [
  {
    term: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    note: "Best for roles and freelance work",
    external: false,
  },
  {
    term: "LinkedIn",
    value: LINKEDIN_HANDLE,
    href: LINKEDIN_URL,
    note: "Full professional history",
    external: true,
  },
  {
    term: "GitHub",
    value: GITHUB_HANDLE,
    href: GITHUB_URL,
    note: "Source for everything listed above",
    external: true,
  },
  {
    term: "WhatsApp",
    value: WHATSAPP_DISPLAY,
    href: whatsappUrl(),
    note: "Quick questions",
    external: true,
  },
  {
    term: "Résumé",
    value: "PDF, one page",
    href: RESUME_URL,
    note: "Downloadable copy of this page",
    external: true,
  },
];

export default function Contact() {
  return (
    <dl className="border-t border-line">
      {CHANNELS.map((channel) => (
        <div
          key={channel.term}
          className="group grid gap-x-8 gap-y-1 border-b border-line py-5 sm:grid-cols-[9.5rem_1fr]"
        >
          <dt className="label pt-1">{channel.term}</dt>
          <dd className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <a
              href={channel.href}
              target={channel.external ? "_blank" : undefined}
              rel={channel.external ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-1.5 text-[15px] text-ink transition-colors group-hover:text-accent"
            >
              {channel.value}
              <ArrowUpRight className="h-3.5 w-3.5 text-muted transition-colors group-hover:text-accent" />
            </a>
            <p className="text-[13px] text-muted">{channel.note}</p>
          </dd>
        </div>
      ))}
    </dl>
  );
}
