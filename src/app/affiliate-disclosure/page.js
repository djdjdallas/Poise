import Link from "next/link";
import { Container } from "@/components/layout";

export const metadata = {
  title: "Affiliate Disclosure",
  description:
    "How Poise uses affiliate links and earns commissions from partner programs.",
  alternates: {
    canonical: "/affiliate-disclosure",
  },
};

export default function AffiliateDisclosurePage() {
  return (
    <main className="bg-white dark:bg-zinc-950">
      {/* Header */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <Container>
          <div className="py-12 md:py-16">
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
              Last updated: September 2026
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
              Affiliate Disclosure
            </h1>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <Container>
          <article className="max-w-3xl prose prose-zinc dark:prose-invert prose-headings:font-semibold prose-a:text-purple-600 dark:prose-a:text-purple-400">
            <h2>Our affiliate relationships</h2>
            <p>
              Poise (trypoise.app) participates in affiliate programs that allow us
              to earn fees by linking to qualifying products and services. This
              includes the Amazon Services LLC Associates Program, Nord
              Security&apos;s affiliate program (NordVPN, NordPass), and various
              other partner programs across privacy tools, lifestyle products, and
              books.
            </p>
            <p>
              As an Amazon Associate, we earn from qualifying purchases.
            </p>

            <h2>How it works</h2>
            <p>
              When you click an affiliate link on our site and make a qualifying
              purchase or signup, we may earn a commission. This commission comes
              at no additional cost to you, and it helps us keep producing free
              articles, tools, and guides for the community.
            </p>

            <h2>Editorial independence</h2>
            <p>
              We only recommend products and services we believe will genuinely
              help our readers. Editorial decisions about what we cover and
              recommend are not influenced by affiliate relationships or
              commission rates. If we recommend it, it&apos;s because we think
              it&apos;s actually useful.
            </p>

            <h2>Identifying affiliate links</h2>
            <p>
              Affiliate links on Poise are clearly labeled. Each promotional card
              includes the phrase &ldquo;Affiliate link&rdquo; with a brief
              explanation. We use the <code>rel=&quot;sponsored&quot;</code>{" "}
              attribute on all affiliate links, as recommended by Google.
            </p>

            <h2>Questions?</h2>
            <p>
              If you have questions about our affiliate relationships, please
              reach out through our <Link href="/help">Help &amp; Support</Link>{" "}
              page.
            </p>
          </article>

          {/* Related documents */}
          <div className="max-w-3xl mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
              Related Documents
            </h3>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/privacy-policy"
                className="text-purple-600 dark:text-purple-400 hover:underline"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-purple-600 dark:text-purple-400 hover:underline"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
