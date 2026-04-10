import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Building the Perfect Saturday",
  description: "A placeholder blog post scaffolded for future Sanity content.",
};

const publishedAt = "2026-04-08";
const updatedAt = "2026-04-08";
const readTime = "6 min read";
const canonicalUrl = "https://explab.com/blog/building-the-perfect-saturday";
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Building the Perfect Saturday",
  description: "A placeholder blog post scaffolded for future Sanity content.",
  author: {
    "@type": "Person",
    name: "Maya Chen",
  },
  datePublished: publishedAt,
  dateModified: updatedAt,
  timeRequired: "PT6M",
  url: canonicalUrl,
  mainEntityOfPage: canonicalUrl,
  publisher: {
    "@type": "Organization",
    name: "ExpLab.com",
  },
};

export default function BlogPostPage() {
  return (
    <section className="px-6 py-16 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <article className="mx-auto w-full max-w-3xl rounded-3xl border border-black/10 bg-[var(--color-surface)] px-6 py-10 sm:px-10 sm:py-12">
        <p className="text-sm font-medium uppercase tracking-[0.14em] text-[var(--color-accent)]">
          Essay
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-5xl">
          Building the perfect Saturday
        </h1>
        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-[var(--color-muted)]">
          <span>By Maya Chen</span>
          <span>April 8, 2026</span>
          <span>{readTime}</span>
          <span>Last updated April 8, 2026</span>
        </div>
        <div className="mt-10 space-y-6 text-base leading-8 text-[var(--color-muted)]">
          <p>
            The perfect Saturday is rarely about efficiency. It is usually about
            making enough room to notice what feels interesting before the week
            fills back up with obligations and tabs.
          </p>
          <p>
            We think about product work the same way. Good analytics should make
            the signal easier to see, but it should also leave enough space for
            judgment, conversation, and a little patience before the next move.
          </p>
          <p>
            This placeholder article stands in for future Sanity content, with a
            clean reading width, simple metadata, and no extra chrome. The goal
            is to make the page architecture dependable before the CMS data
            arrives.
          </p>
          <p>
            When the real content layer shows up, this template can accept rich
            text, author data, images, and related posts without changing the
            shared layout around it. That separation is the whole point.
          </p>
        </div>
      </article>
    </section>
  );
}
