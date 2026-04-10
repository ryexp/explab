import Link from "next/link";
import Hero from "@/components/sections/Hero";

const posts = [
  {
    title: "Building the perfect Saturday",
    href: "/blog/building-the-perfect-saturday",
    date: "April 8, 2026",
    teaser: "A placeholder post about routines, product taste, and making room to think.",
  },
  {
    title: "The dashboard can wait",
    href: "/blog/building-the-perfect-saturday",
    date: "March 19, 2026",
    teaser: "Why small teams often need a sharper question before they need another chart.",
  },
  {
    title: "Notes from experiment review",
    href: "/blog/building-the-perfect-saturday",
    date: "February 2, 2026",
    teaser: "A short index of the kinds of decisions we want the product to make easier.",
  },
];

export default function BlogPage() {
  return (
    <>
      <Hero
        eyebrow="Blog"
        headline="A simple index for Sanity-backed writing."
        subheadline="This scaffold leaves room for CMS wiring later while giving the route, structure, and reading rhythm somewhere stable to start."
        ctaText="Read the latest post"
        ctaLink="/blog/building-the-perfect-saturday"
        backgroundClassName="bg-white"
      />
      <section className="px-6 pb-20">
        <div className="mx-auto w-full max-w-4xl">
          <div className="space-y-4">
            {posts.map((post) => (
              <article
                key={`${post.title}-${post.date}`}
                className="rounded-2xl border border-black/10 bg-[var(--color-surface)] p-6"
              >
                <p className="text-sm text-[var(--color-muted)]">{post.date}</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--color-ink)]">
                  <Link href={post.href} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                  {post.teaser}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
