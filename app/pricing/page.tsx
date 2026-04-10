import Hero from "@/components/sections/Hero";

const tiers = [
  {
    name: "Starter",
    price: "$39/mo",
    description:
      "For a small product team that wants one place to keep experiments, notes, and weekly signals from drifting apart.",
  },
  {
    name: "Team",
    price: "$149/mo",
    description:
      "For growing teams running experiments across multiple surfaces and needing a shared rhythm for review.",
  },
  {
    name: "Custom",
    price: "Talk to us",
    description:
      "For larger groups that need tailored workspace structure, data workflows, or a migration off spreadsheets and docs.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Hero
        eyebrow="Pricing"
        headline="Pricing built for faster experiments and better decisions."
        subheadline="Pick the plan that fits your stage, whether you're testing a few ideas each month or building experimentation into how your team works."
        ctaText="Start with Starter"
        ctaLink="/"
        secondaryText="Meet the team"
        secondaryLink="/about"
      />
      <section className="px-6 pb-20">
        <div className="mx-auto grid w-full max-w-6xl gap-4 lg:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className="rounded-2xl border border-black/10 bg-[var(--color-surface)] p-6"
            >
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-[var(--color-accent)]">
                {tier.name}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-ink)]">
                {tier.price}
              </h2>
              <p className="mt-4 text-sm leading-6 text-[var(--color-muted)]">
                {tier.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
