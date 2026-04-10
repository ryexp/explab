import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[var(--color-surface)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-8 text-sm text-[var(--color-muted)] sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <p className="font-medium text-[var(--color-ink)]">
            ExpLab.com makes analytics feel smaller, clearer, and more useful.
          </p>
          <p>Built for product teams that care about evidence over ceremony.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/pricing" className="hover:text-[var(--color-ink)]">
            Pricing
          </Link>
          <Link href="/blog" className="hover:text-[var(--color-ink)]">
            Blog
          </Link>
          <Link href="/about" className="hover:text-[var(--color-ink)]">
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}
