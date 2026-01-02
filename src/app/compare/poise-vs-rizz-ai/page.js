import { Button, Badge, Section, Card } from "@/components/ui";
import { Container } from "@/components/layout";
import { CTASection } from "@/components/marketing";

export const metadata = {
  title: "Poise vs Rizz.ai: Which AI Dating Assistant Is Right for You?",
  description:
    "Compare Poise and Rizz.ai. See which AI dating coach offers better privacy, ENM support, and authentic messaging help.",
};

const comparisonData = [
  {
    feature: "Privacy",
    poise: "On-device",
    rizzai: "Cloud-based",
    poiseWins: true,
  },
  {
    feature: "ENM/Lifestyle Support",
    poise: "Built for it",
    rizzai: "Generic",
    poiseWins: true,
  },
  {
    feature: "Approach",
    poise: "Authentic coaching",
    rizzai: "Pickup lines",
    poiseWins: true,
  },
  {
    feature: "Feeld Integration",
    poise: "Yes",
    rizzai: "No",
    poiseWins: true,
  },
  {
    feature: "Price",
    poise: "Free tier available",
    rizzai: "Subscription",
    poiseWins: true,
  },
];

const poiseWins = [
  {
    title: "True Privacy Protection",
    description:
      "Poise processes everything on your device. Your intimate dating conversations never leave your phone, so there's zero risk of data breaches exposing your personal messages. Rizz.ai sends your conversations to their servers, creating potential privacy vulnerabilities.",
  },
  {
    title: "Built for ENM and Alternative Lifestyles",
    description:
      "Poise was designed from the ground up to understand ethical non-monogamy, kink dynamics, and queer dating. Rizz.ai offers generic advice that often doesn't translate to these communities and may even give tone-deaf suggestions.",
  },
  {
    title: "Authentic Communication vs. Pickup Lines",
    description:
      "Poise teaches you how to communicate genuinely with specific people based on context. Rizz.ai focuses on generic pickup lines that often feel inauthentic and can come across as insincere to potential matches.",
  },
  {
    title: "Deep Feeld Integration",
    description:
      "Poise understands Feeld's unique culture, terminology, and community norms. Whether you're explaining your relationship structure or navigating a triad conversation, Poise gets it. Rizz.ai treats all dating apps the same.",
  },
];

const rizzaiFits = [
  {
    title: "Quick Pickup Lines",
    description:
      "If you're looking for rapid-fire pickup lines without much context or personalization, Rizz.ai's library might give you quick options to try.",
  },
  {
    title: "Mainstream Dating Only",
    description:
      "If you're exclusively on mainstream apps like Tinder or Bumble and don't need ENM or kink-aware suggestions, Rizz.ai's generic approach may be sufficient.",
  },
];

const whoShouldChoosePoise = [
  "You value privacy and don't want your dating conversations stored on external servers",
  "You're part of the ENM, polyamorous, or kink communities",
  "You use Feeld or similar lifestyle-focused dating apps",
  "You want to develop genuine communication skills, not just copy-paste lines",
  "You prefer authentic connection over gaming or manipulation tactics",
];

export default function PoiseVsRizzAiPage() {
  return (
    <main>
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-white dark:bg-zinc-950">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-white to-white dark:from-purple-950/20 dark:via-zinc-950 dark:to-zinc-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-100/40 via-transparent to-transparent dark:from-purple-900/20" />

        <Container className="relative">
          <div className="flex flex-col items-center py-20 md:py-28 lg:py-32 text-center">
            <Badge variant="outline" className="mb-6">
              Comparison Guide
            </Badge>
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-r from-zinc-900 via-purple-800 to-pink-700 dark:from-white dark:via-purple-300 dark:to-pink-300 bg-clip-text text-transparent">
                Poise vs. Rizz.ai
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 sm:text-xl">
              Which AI Dating Assistant Is Right for You?
            </p>
          </div>
        </Container>
      </section>

      {/* Quick Comparison Table */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-white mb-8">
            Quick Comparison
          </h2>
          <Card padding="none" className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-zinc-50 dark:bg-zinc-800/50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900 dark:text-white">
                      Feature
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-purple-600 dark:text-purple-400">
                      Poise
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-600 dark:text-zinc-400">
                      Rizz.ai
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                  {comparisonData.map((row, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 text-sm font-medium text-zinc-900 dark:text-white">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300">
                        <span className="inline-flex items-center gap-2">
                          {row.poiseWins && (
                            <span className="text-emerald-500">&#10003;</span>
                          )}
                          {row.poise}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-zinc-500 dark:text-zinc-500">
                        {row.rizzai}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </Section>

      {/* Where Poise Wins */}
      <Section background="muted">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-white mb-4">
            Where Poise Wins
          </h2>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
            Key advantages that make Poise the better choice for most users
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {poiseWins.map((item, index) => (
              <Card key={index} padding="lg" hover>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                      &#10003;
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Where Rizz.ai Might Fit Better */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-white mb-4">
            Where Rizz.ai Might Fit Better
          </h2>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
            To be fair, there are some use cases where Rizz.ai could work
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {rizzaiFits.map((item, index) => (
              <Card key={index} padding="lg">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Who Should Choose Poise */}
      <Section background="muted">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-white mb-4">
            Who Should Choose Poise
          </h2>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12">
            Poise is the right choice if any of these describe you
          </p>
          <Card padding="lg">
            <ul className="space-y-4">
              {whoShouldChoosePoise.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mt-0.5">
                    <span className="text-purple-600 dark:text-purple-400 text-sm font-bold">
                      &#10003;
                    </span>
                  </span>
                  <span className="text-zinc-700 dark:text-zinc-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Final CTA */}
      <CTASection
        headline="Ready to Try the Privacy-First Approach?"
        description="Download Poise and experience authentic dating communication with complete privacy."
        primaryCta={{ text: "Download Free", href: "/download" }}
        secondaryCta={{ text: "See Pricing", href: "/pricing" }}
        background="gradient"
      />
    </main>
  );
}
