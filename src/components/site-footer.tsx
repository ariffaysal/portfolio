export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="font-mono text-xs text-zinc-500">
          © {new Date().getFullYear()} MD Arif Foysal · Built with Next.js &amp; Tailwind CSS
        </p>
        <p className="font-mono text-xs text-zinc-600">
          TypeScript · NestJS · Next.js · PostgreSQL
        </p>
      </div>
    </footer>
  );
}
