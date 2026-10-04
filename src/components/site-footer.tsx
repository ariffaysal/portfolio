import { NAME } from "@/lib/contact";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[11px] tracking-wide text-muted">
          © {new Date().getFullYear()} {NAME}
        </p>
        <p className="font-mono text-[11px] tracking-wide text-muted">
          Built with Next.js, TypeScript and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
