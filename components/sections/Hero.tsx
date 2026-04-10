import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryText?: string;
  secondaryLink?: string;
  backgroundClassName?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function Hero({
  eyebrow = "Analytics for teams that move quickly",
  headline = "A calm place to understand what changed.",
  subheadline = "ExpLab.com helps product teams track experiments, explain results, and make the next decision without turning every launch into a reporting project.",
  ctaText = "Start here",
  ctaLink = "/pricing",
  secondaryText,
  secondaryLink,
  backgroundClassName = "bg-[var(--color-surface)]",
  imageSrc,
  imageAlt = "Placeholder illustration",
}: HeroProps) {
  return (
    <section className="px-6 py-16 sm:py-20">
      <div
        className={`mx-auto grid w-full max-w-6xl gap-10 rounded-3xl border border-black/10 px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-[minmax(0,1.3fr)_minmax(280px,0.7fr)] lg:items-end ${backgroundClassName}`}
      >
        <div className="max-w-2xl space-y-6">
          <p className="text-xs font-semibold tracking-[0.18em] text-[var(--color-accent)] uppercase">
            {eyebrow}
          </p>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-5xl">
              {headline}
            </h1>
            <p className="max-w-xl text-base leading-7 text-[var(--color-muted)] sm:text-lg">
              {subheadline}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={ctaLink}
              className="inline-flex min-h-11 items-center rounded-full bg-[var(--color-ink)] px-5 text-sm font-medium text-[var(--color-background)]"
            >
              {ctaText}
            </Link>
            {secondaryText && secondaryLink ? (
              <Link
                href={secondaryLink}
                className="text-sm font-medium text-[var(--color-ink)] underline underline-offset-4"
              >
                {secondaryText}
              </Link>
            ) : null}
          </div>
        </div>
        <div className="flex justify-start lg:justify-end">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={640}
              height={480}
              className="h-auto w-full max-w-sm rounded-2xl border border-black/10 object-cover"
            />
          ) : (
            <div className="w-full max-w-sm rounded-2xl border border-dashed border-black/15 bg-white/60 p-6">
              <p className="text-sm leading-6 text-[var(--color-muted)]">
                Experiment summaries, notes, and trend snapshots can live here.
                This block stays optional so each page can decide how visual it
                wants to be.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
