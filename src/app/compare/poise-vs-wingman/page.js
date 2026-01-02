import { Button, Badge, Section, Card } from "@/components/ui";
import { Container } from "@/components/layout";
import { CTASection } from "@/components/marketing";

export const metadata = {
  title: "Poise vs Wingman: AI Dating Coach Comparison",
  description:
    "Compare Poise and Wingman AI. See which dating assistant offers better privacy and ENM community support.",
};

const comparisonData = [
  {
    feature: "Privacy Model",
    poise: "100% on-device processing",
    wingman: "Cloud-based AI",
    poiseWins: true,
  },
  {
    feature: "Community Focus",
    poise: "ENM, kink, and queer-aware",
    wingman: "Mainstream dating",
    poiseWins: true,
  },
  {
    feature: "Feeld Support",
    poise: "Deep integration",
    wingman: "Basic support",
    poiseWins: true,
  },
  {
    feature: "Approach",
    poise: "Coaching for authenticity",
    wingman: "Message suggestions",
    poiseWins: true,
  },
  {
    feature: "Free Tier",
    poise: "Yes, 3 messages/day",
    wingman: "Limited trial",
    poiseWins: true,
  },
  {
    feature: "Relationship Styles",
    poise: "All configurations",
    wingman: "Primarily monogamous",
    poiseWins: true,
  },
];

const poiseWins = [
  {
    title: "Privacy That Actually Matters",
    description:
      "When you're discussing intimate topics like relationship structures, boundaries, or desires, privacy isn't optional. Poise processes everything on your device, meaning your conversations never touch external servers. Wingman's cloud-based approach means your private messages are transmitted and processed externally.",
  },
  {
    title: "ENM and Alternative Lifestyle Expertise",
    description:
      "Poise understands the nuances of ethical non-monogamy, polyamory, and kink communities. It knows the difference between a triad and a V, understands kitchen table vs. parallel poly, and can help navigate consent conversations. Wingman focuses primarily on mainstream monogamous dating scenarios.",
  },
  {
    title: "Genuine Feeld Integration",
    description:
      "Poise was built with Feeld users in mind. It understands Feeld's unique culture, the community's communication norms, and the specific challenges of connecting on a lifestyle-focused app. Wingman treats Feeld like any other dating app, missing crucial context.",
  },
  {
    title: "Skill Building Over Dependency",
    description:
      "Poise aims to make you a better communicator over time, not dependent on the app forever. The coaching approach helps you internalize genuine communication skills that transfer beyond dating. Wingman focuses more on providing ready-made messages.",
  },
];

const wingmanFits = [
  {
    title: "Mainstream Dating Focus",
    description:
      "If you're exclusively using mainstream apps like Hinge or Tinder for traditional monogamous dating, Wingman's general approach might meet your basic needs.",
  },
  {
    title: "Quick Message Generation",
    description:
      "If you prioritize speed over depth and just want quick message suggestions without coaching, Wingman's streamlined approach could work.",
  },
  {
    title: "Integrated App Experience",
    description:
      "Wingman offers some direct integrations with dating apps that some users find convenient, though this comes at the cost of privacy.",
  },
];

const whoShouldChoosePoise = [
  "Privacy is non-negotiable for your dating conversations",
  "You're active in ENM, polyamorous, or kink communities",
  "You primarily use Feeld or similar lifestyle apps",
  "You want to develop lasting communication skills",
  "You prefer authentic expression over templated responses",
  "You're tired of generic advice that doesn't fit your relationship style",
];

export default function PoiseVsWingmanPage() {
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
                Poise vs. Wingman
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 sm:text-xl">
              AI Dating Coach Comparison
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
                      Wingman
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
                        {row.wingman}
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
            Key advantages that set Poise apart
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

      {/* Where Wingman Might Fit Better */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-white mb-4">
            Where Wingman Might Fit Better
          </h2>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
            Situations where Wingman could be a reasonable choice
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {wingmanFits.map((item, index) => (
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
            Poise is the better choice if you identify with any of these
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

      {/* The Bottom Line */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">
            The Bottom Line
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
            While both tools aim to help with dating communication, Poise and
            Wingman serve different audiences. If you value privacy, belong to
            alternative lifestyle communities, or want genuine skill-building
            rather than message templates, Poise is designed specifically for
            you. Wingman may work for mainstream dating needs, but it lacks the
            privacy protections and community understanding that make Poise
            unique.
          </p>
        </div>
      </Section>

      {/* Final CTA */}
      <CTASection
        headline="Experience the Difference"
        description="Try Poise free and see why privacy-first, community-aware dating assistance matters."
        primaryCta={{ text: "Download Free", href: "/download" }}
        secondaryCta={{ text: "See Pricing", href: "/pricing" }}
        background="gradient"
      />
    </main>
  );
}
