import { Section, Card } from "@/components/ui";
import { Container } from "@/components/layout";
import { CTASection } from "@/components/marketing";

export const metadata = {
  title: "Privacy",
  description:
    "Your conversations stay yours. Learn how Poise protects your dating data with on-device processing and zero cloud storage.",
};

const privacyPoints = [
  {
    title: "Local Processing Only",
    description:
      "All AI inference happens on your device using Apple's Core ML framework. Your conversation screenshots are analyzed locally, and the AI suggestions are generated without ever sending your data to external servers. This means even we can't see what you're talking about.",
  },
  {
    title: "No Cloud Storage",
    description:
      "Your conversation history is stored locally in encrypted storage on your device. We don't maintain any cloud database of your chats, screenshots, or AI-generated suggestions. When you delete the app, your data is gone forever.",
  },
  {
    title: "No Training on Your Data",
    description:
      "We will never use your conversations to train AI models. Period. The AI models we use are pre-trained and run entirely on your device. Your intimate conversations remain intimate.",
  },
  {
    title: "Minimal Account Data",
    description:
      "We only collect what's necessary: your email address (for account recovery) and subscription status (to enable premium features). That's it. No analytics on your conversations, no tracking of who you're messaging, no behavioral profiling.",
  },
  {
    title: "Open Architecture",
    description:
      "We're transparent about how Poise works. Our privacy model is simple: if data never leaves your device, it can't be leaked, sold, or subpoenaed. We've architected Poise this way on purpose.",
  },
];

const comparisonData = [
  {
    feature: "Message processing location",
    poise: "On your device",
    typical: "Cloud servers",
  },
  {
    feature: "Conversation storage",
    poise: "Local only",
    typical: "Cloud database",
  },
  {
    feature: "Can company read your chats?",
    poise: "No",
    typical: "Yes",
  },
  {
    feature: "Data used for AI training",
    poise: "Never",
    typical: "Usually",
  },
  {
    feature: "Data shared with third parties",
    poise: "No",
    typical: "Often",
  },
  {
    feature: "Works offline",
    poise: "Yes",
    typical: "No",
  },
];

export default function PrivacyPage() {
  return (
    <main>
      {/* Header */}
      <section className="relative overflow-hidden bg-white dark:bg-zinc-950">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-white to-white dark:from-purple-950/20 dark:via-zinc-950 dark:to-zinc-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-100/40 via-transparent to-transparent dark:from-purple-900/20" />

        <Container className="relative">
          <div className="flex flex-col items-center py-20 md:py-28 lg:py-32 text-center">
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-r from-zinc-900 via-purple-800 to-pink-700 dark:from-white dark:via-purple-300 dark:to-pink-300 bg-clip-text text-transparent">
                Your Conversations Stay Yours. Period.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 sm:text-xl">
              We built Poise with a simple rule: if we can't see your data, we
              can't leak, sell, or misuse it.
            </p>
          </div>
        </Container>
      </section>

      {/* Privacy Points */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="space-y-8">
            {privacyPoints.map((point, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-emerald-600 dark:text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                    {point.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why This Matters */}
      <Section background="muted">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-white mb-8">
            Why This Matters
          </h2>
          <Card padding="lg">
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              Most AI dating apps send your conversations to cloud servers for
              processing. This creates serious risks:
            </p>
            <ul className="space-y-4 text-zinc-600 dark:text-zinc-400">
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">!</span>
                <span>
                  <strong className="text-zinc-900 dark:text-white">
                    Data breaches
                  </strong>{" "}
                  — Your intimate conversations could be exposed in a hack
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">!</span>
                <span>
                  <strong className="text-zinc-900 dark:text-white">
                    Insider access
                  </strong>{" "}
                  — Company employees may be able to read your messages
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">!</span>
                <span>
                  <strong className="text-zinc-900 dark:text-white">
                    Data sales
                  </strong>{" "}
                  — Your dating patterns and preferences could be sold to
                  advertisers
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">!</span>
                <span>
                  <strong className="text-zinc-900 dark:text-white">
                    Legal requests
                  </strong>{" "}
                  — Governments or lawyers could subpoena your conversation
                  history
                </span>
              </li>
            </ul>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mt-6">
              Poise eliminates all of these risks by keeping your data on your
              device. We can't leak what we never had.
            </p>
          </Card>
        </div>
      </Section>

      {/* Comparison Table */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-white mb-8">
            Poise vs. Typical AI Dating Apps
          </h2>
          <Card padding="none" className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-zinc-200 dark:border-zinc-800">
                    <th className="text-left py-4 px-6 text-zinc-900 dark:text-white font-semibold">
                      Feature
                    </th>
                    <th className="text-center py-4 px-6 text-purple-600 dark:text-purple-400 font-semibold bg-purple-50 dark:bg-purple-900/20">
                      Poise
                    </th>
                    <th className="text-center py-4 px-6 text-zinc-500 dark:text-zinc-400 font-semibold">
                      Typical AI Apps
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-zinc-100 dark:border-zinc-800 last:border-0"
                    >
                      <td className="py-4 px-6 text-zinc-700 dark:text-zinc-300">
                        {row.feature}
                      </td>
                      <td className="py-4 px-6 text-center bg-purple-50 dark:bg-purple-900/20">
                        <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {row.poise}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center text-zinc-500 dark:text-zinc-400">
                        {row.typical}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </Section>

      {/* Final CTA */}
      <CTASection
        headline="Date with Privacy"
        description="Download Poise and keep your conversations where they belong—on your device."
        primaryCta={{ text: "Download Free", href: "/download" }}
        secondaryCta={{ text: "Learn More", href: "/about" }}
        background="gradient"
      />
    </main>
  );
}
