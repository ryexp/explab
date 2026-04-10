import Link from "next/link";
import Hero from "@/components/sections/Hero";

const experimentQuestions = [
  "Which thumbnail design should we use to drive more views?",
  "Does a shorter landing page increase signups or just reduce clarity?",
  "Will changing the pricing anchor improve conversion on our core plan?",
  "What onboarding step helps new users reach value faster?",
];

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Small-team analytics"
        headline="Unlock revenue, insights and decisions with experiments"
        subheadline="Run small, iteractive experiments quickly that provide a clearer pathway to your goals."
        ctaText="View experiments"
        ctaLink="/experiments"
        secondaryText="Read the blog"
        secondaryLink="/blog"
      />

      <section className="px-6 pb-20">
        <div className="mx-auto w-full max-w-6xl space-y-8">
          <div className="space-y-5">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-[var(--color-accent)]">
              Popular experiment questions
            </p>
            <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-3xl">
              Start with clearer questions, then test your way to better
              decisions.
            </h2>
            <p className="max-w-2xl text-base leading-7 text-[var(--color-muted)]">
              ExpLab is built for teams that want to move from hunches to
              structured learning without making experimentation feel heavy.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {experimentQuestions.map((question) => (
              <article
                key={question}
                className="rounded-2xl border border-black/10 bg-[var(--color-surface)] p-6"
              >
                <h3 className="text-xl font-semibold tracking-tight text-[var(--color-ink)]">
                  {question}
                </h3>
              </article>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link
              href="/experiments"
              className="underline underline-offset-4 hover:text-[var(--color-ink)]"
            >
              Browse experiments
            </Link>
            <Link
              href="/blog"
              className="underline underline-offset-4 hover:text-[var(--color-ink)]"
            >
              Read the blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
