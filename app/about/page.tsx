import Hero from "@/components/sections/Hero";
import Link from "next/link";

const values = [
  {
    title: "Science",
    description:
      "Use evidence, testing, and learning instead of hierarchy or gut alone.",
  },
  {
    title: "Ownership",
    description:
      "Push decision-making down so people feel real responsibility.",
  },
  {
    title: "Speed",
    description: "Move quickly, experiment, and iterate.",
  },
  {
    title: "Openness",
    description:
      "Encourage debate, dissent, transparency, and truth-seeking.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About"
        headline="We believe testing is how better decisions get made."
        subheadline="ExpLab exists to help teams learn through evidence, move with conviction, and keep testing close to everyday decision-making."
        ctaText="Read our blog"
        ctaLink="/blog"
        imageSrc="https://placehold.co/640x480/e7e5e4/52525b?text=Team+photo"
        imageAlt="Placeholder team photo"
      />
      <section className="px-6 pb-20">
        <div className="mx-auto w-full max-w-6xl space-y-10">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-ink)]">
                ExpLab started as a way to measure personal, science-ish
                experiments, like using A/B tests to figure out what makes the
                perfect Saturday.
              </h2>
              <p className="text-base leading-7 text-[var(--color-muted)]">
                Over time, that instinct connected with a decade of marketing
                work. Most A/B testing platforms were built for enterprise
                teams, expensive to adopt, and awkward for anyone who wanted a
                simpler, more plug-and-play way to run experiments.
              </p>
              <p className="text-base leading-7 text-[var(--color-muted)]">
                That led to a small team of experimenters focused on helping
                teams run rapid tests, learn faster, and make better choices
                with more confidence.
              </p>
              <p className="text-sm leading-7 text-[var(--color-muted)]">
                P.S. If you&apos;re curious what makes a perfect Saturday, read{" "}
                <Link
                  href="/blog/building-the-perfect-saturday"
                  className="text-[var(--color-ink)] underline underline-offset-4"
                >
                  Building the Perfect Saturday
                </Link>
                .
              </p>
            </div>
            <aside className="rounded-2xl border border-black/10 bg-[var(--color-surface)] p-6">
              <h3 className="text-lg font-semibold text-[var(--color-ink)]">
                Founder
              </h3>
              <p className="mt-1 text-sm text-[var(--color-accent)]">
                Chief Experiment Officer
              </p>
            </aside>
          </div>
          <section className="space-y-5">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-[var(--color-accent)]">
                Core values
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-ink)]">
                What guides the way we experiment.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {values.map((value) => (
                <article
                  key={value.title}
                  className="rounded-2xl border border-black/10 bg-[var(--color-surface)] p-6"
                >
                  <h3 className="text-lg font-semibold text-[var(--color-ink)]">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
