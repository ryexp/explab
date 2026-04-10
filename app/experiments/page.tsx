import Hero from "@/components/sections/Hero";

const experiments = [
  {
    title: "Shorter onboarding checklist",
    description:
      "Testing whether a three-step setup flow improves first-week activation for new workspace admins.",
  },
  {
    title: "Weekly digest rewrite",
    description:
      "A simpler summary email for managers who want the signal without opening another dashboard.",
  },
  {
    title: "Segmented trial prompts",
    description:
      "Adjusting trial nudges based on role so analysts and founders see different next steps.",
  },
  {
    title: "Quiet mode for alerts",
    description:
      "Reducing notification volume while preserving the alerts that consistently lead to action.",
  },
];

export default function ExperimentsPage() {
  return (
    <>
      <Hero
        eyebrow="Experiments"
        headline="A running log of ideas worth testing."
        subheadline="This page keeps the format simple: a title, a short reason, and enough context to know why the team cared."
        ctaText="See pricing"
        ctaLink="/pricing"
        backgroundClassName="bg-white"
      />
      <section className="px-6 pb-20">
        <div className="mx-auto grid w-full max-w-6xl gap-4 sm:grid-cols-2">
          {experiments.map((experiment) => (
            <article
              key={experiment.title}
              className="rounded-2xl border border-black/10 bg-[var(--color-surface)] p-6"
            >
              <h2 className="text-xl font-semibold tracking-tight text-[var(--color-ink)]">
                {experiment.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                {experiment.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
