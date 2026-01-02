import { Button, Badge, Section, Card } from "@/components/ui";
import { Container } from "@/components/layout";
import { CTASection } from "@/components/marketing";

export const metadata = {
  title: "Poise vs ChatGPT for Dating: Why a Specialized Tool Wins",
  description:
    "Why use Poise instead of ChatGPT for dating help? Learn how a purpose-built AI dating coach beats general AI.",
};

const comparisonData = [
  {
    feature: "Privacy",
    poise: "On-device, never stored",
    chatgpt: "Conversations stored on servers",
    poiseWins: true,
  },
  {
    feature: "ENM/Kink Understanding",
    poise: "Native support",
    chatgpt: "May flag or refuse content",
    poiseWins: true,
  },
  {
    feature: "Feeld Context",
    poise: "Deep platform knowledge",
    chatgpt: "No specific understanding",
    poiseWins: true,
  },
  {
    feature: "Convenience",
    poise: "Purpose-built, one tap",
    chatgpt: "Requires long prompts",
    poiseWins: true,
  },
  {
    feature: "Screenshot Analysis",
    poise: "Built-in conversation reading",
    chatgpt: "Limited image understanding",
    poiseWins: true,
  },
  {
    feature: "Consistency",
    poise: "Dating-optimized always",
    chatgpt: "Variable quality",
    poiseWins: true,
  },
];

const poiseAdvantages = [
  {
    title: "Your Conversations Stay Private",
    description:
      "ChatGPT stores your conversation history on OpenAI's servers. When you're pasting intimate dating conversations and asking for help, that data becomes part of their systems. Poise processes everything on your device - your dating conversations never leave your phone, period.",
    icon: "shield",
  },
  {
    title: "It Actually Understands Your Context",
    description:
      "Ask ChatGPT about Feeld and you'll get generic information. Ask it to help with a throuple conversation or explain your relationship anarchy approach, and it often stumbles or gives bland, unhelpful responses. Poise was built to understand these contexts natively.",
    icon: "brain",
  },
  {
    title: "No Prompt Engineering Required",
    description:
      "To get good dating advice from ChatGPT, you need to write detailed prompts explaining your situation, the platform, your communication style, your relationship structure, and more. With Poise, you screenshot, tap, and get contextually aware suggestions instantly.",
    icon: "zap",
  },
  {
    title: "It Won't Flag Your Lifestyle",
    description:
      "ChatGPT has content policies that sometimes flag or refuse to engage with kink, ENM, or sexually explicit dating conversations. Poise understands that these are normal parts of adult dating and provides helpful, non-judgmental assistance.",
    icon: "heart",
  },
];

const whenChatGPTWorks = [
  {
    title: "General Life Advice",
    description:
      "For broad questions about relationships, communication theory, or general advice that isn't tied to a specific dating conversation, ChatGPT's general knowledge can be useful.",
  },
  {
    title: "Research and Learning",
    description:
      "If you want to learn about attachment styles, communication frameworks, or relationship psychology in general, ChatGPT's broad knowledge base works well.",
  },
  {
    title: "Non-Dating Writing",
    description:
      "For professional emails, general social messages, or other non-dating communication, ChatGPT's general-purpose nature is an advantage.",
  },
];

const whenPoiseIsBetter = [
  {
    title: "Active Dating Conversations",
    description:
      "When you're in the middle of a real conversation and need help with your next message, Poise's speed, privacy, and context-awareness make it the clear choice.",
  },
  {
    title: "ENM and Alternative Lifestyle Dating",
    description:
      "If you're navigating ethical non-monogamy, kink dynamics, or queer dating, Poise understands these contexts without requiring explanation or risking content refusals.",
  },
  {
    title: "Feeld and Lifestyle App Users",
    description:
      "Poise knows Feeld's culture, terminology, and community norms. It can help you navigate the unique dynamics of lifestyle-focused dating apps in ways ChatGPT simply can't.",
  },
  {
    title: "Privacy-Conscious Users",
    description:
      "If you don't want your dating conversations stored on external servers or potentially used for AI training, Poise's on-device processing is the only choice.",
  },
];

export default function PoiseVsChatGPTPage() {
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
                Poise vs. ChatGPT for Dating
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 sm:text-xl">
              Why a Specialized Tool Wins
            </p>
          </div>
        </Container>
      </section>

      {/* Introduction */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-lg prose-zinc dark:prose-invert mx-auto">
            <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
              You might be thinking: "I already have ChatGPT - why would I need
              a separate app for dating?" It's a fair question. ChatGPT is
              incredibly capable for many tasks. But when it comes to dating
              communication, a purpose-built tool offers critical advantages
              that general AI simply can't match.
            </p>
          </div>
        </div>
      </Section>

      {/* Quick Comparison Table */}
      <Section background="muted">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-white mb-8">
            Quick Comparison
          </h2>
          <Card padding="none" className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-zinc-100 dark:bg-zinc-800/80">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900 dark:text-white">
                      Feature
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-purple-600 dark:text-purple-400">
                      Poise
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-600 dark:text-zinc-400">
                      ChatGPT
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
                        {row.chatgpt}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </Section>

      {/* Why Poise Beats ChatGPT for Dating */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-white mb-4">
            Why Poise Beats ChatGPT for Dating
          </h2>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
            Four critical advantages of a specialized tool
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {poiseAdvantages.map((item, index) => (
              <Card key={index} padding="lg" hover>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <span className="text-purple-600 dark:text-purple-400 font-bold text-lg">
                      {index + 1}
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

      {/* When ChatGPT Works */}
      <Section background="muted">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-white mb-4">
            When ChatGPT Works Fine
          </h2>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
            To be fair, ChatGPT has its place - just not for active dating
            conversations
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {whenChatGPTWorks.map((item, index) => (
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

      {/* When Poise is Better */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-white mb-4">
            When Poise Is the Clear Choice
          </h2>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
            Scenarios where a specialized dating tool makes all the difference
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {whenPoiseIsBetter.map((item, index) => (
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

      {/* The Bottom Line */}
      <Section background="muted">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">
            The Bottom Line
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
            ChatGPT is a powerful general-purpose AI, but dating communication
            requires specialized understanding, privacy protection, and
            community awareness that general tools simply don't provide.
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Poise was built from the ground up for modern dating - with privacy
            as a foundation, ENM and kink awareness baked in, and the
            convenience of a purpose-built tool. For your dating life, you
            deserve more than a general-purpose chatbot.
          </p>
        </div>
      </Section>

      {/* Final CTA */}
      <CTASection
        headline="Try the Purpose-Built Approach"
        description="Download Poise and experience what dating AI should actually feel like."
        primaryCta={{ text: "Download Free", href: "/download" }}
        secondaryCta={{ text: "See Pricing", href: "/pricing" }}
        background="gradient"
      />
    </main>
  );
}
