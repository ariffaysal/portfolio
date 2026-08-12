import { GithubIcon } from "./site-header";
import { WHATSAPP_DISPLAY, whatsappUrl } from "@/lib/contact";

const CONTACT_CARDS = [
  {
    label: "GitHub",
    value: "github.com/ariffaysal",
    href: "https://github.com/ariffaysal",
    icon: <GithubIcon className="h-5 w-5" />,
    note: "All my projects & source code",
  },
  {
    label: "Email",
    value: "ariffaysal001@gmail.com",
    href: "mailto:ariffaysal001@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </svg>
    ),
    note: "Best for freelance & job inquiries",
  },
  {
    label: "WhatsApp",
    value: WHATSAPP_DISPLAY,
    href: whatsappUrl(),
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
    ),
    note: "Tap to chat on WhatsApp",
  },
];

export default function Contact() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {CONTACT_CARDS.map((card) => (
        <a
          key={card.label}
          href={card.href}
          target={card.href.startsWith("http") ? "_blank" : undefined}
          rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:border-indigo-400/40 hover:bg-white/[0.05]"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500/20 to-violet-600/20 text-indigo-300">
            {card.icon}
          </div>
          <h3 className="mt-4 text-sm font-semibold text-zinc-100">{card.label}</h3>
          <p className="mt-1 text-sm font-medium text-indigo-300 group-hover:text-indigo-200">
            {card.value}
          </p>
          <p className="mt-1 text-xs text-zinc-500">{card.note}</p>
        </a>
      ))}
    </div>
  );
}
