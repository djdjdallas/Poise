import { Section, Card } from "@/components/ui";
import { Container } from "@/components/layout";
import { CTASection } from "@/components/marketing";

export const metadata = {
  title: "About",
  description:
    "Learn about the team behind Poise and our mission to help you communicate authentically in modern dating.",
};

const values = [
  {
    emoji: "🔒",
    title: "Privacy First",
    description:
      "Your dating conversations are intimate. We built Poise so we literally cannot access them.",
  },
  {
    emoji: "🌈",
    title: "Inclusive by Design",
    description:
      "ENM, kink, queer dating—we built Poise to understand the full spectrum.",
  },
  {
    emoji: "🎯",
    title: "Authenticity Over Tricks",
    description:
      "No manipulative tactics. We help you communicate genuinely.",
  },
  {
    emoji: "📈",
    title: "Skills, Not Dependency",
    description: "Our goal is to make you more confident over time.",
  },
];

export default function AboutPage() {
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
                We Built Poise Because Dating Apps Failed Us
              </span>
            </h1>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-lg prose-zinc dark:prose-invert mx-auto">
            <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
              Like most people, we've experienced the anxiety of staring at a
              blank message field. The pressure to be witty, charming, and
              authentic—all in one opener. The fear of saying the wrong thing to
              someone you're genuinely interested in.
            </p>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
              We tried the existing "Rizz" apps. They gave us cheesy pickup
              lines that felt inauthentic. The AI didn't understand our
              situations—dating as a couple, explaining non-monogamy, navigating
              kink conversations.
            </p>
            <p className="text-2xl font-semibold text-zinc-900 dark:text-white mb-8">
              So we built something different.
            </p>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
              Poise is an AI conversation coach that actually understands modern
              dating in all its complexity. We're not here to give you "lines"
              that work on everyone—we're here to help you communicate
              authentically with the specific people you're interested in.
            </p>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
              And because we value privacy (especially in dating), we made sure
              your conversations never leave your device. We don't want your
              data. We just want you to feel confident.
            </p>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section background="muted">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-white mb-12">
            Our Values
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value, index) => (
              <Card key={index} padding="lg">
                <div className="text-4xl mb-4">{value.emoji}</div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <CTASection
        headline="Ready to Date with Confidence?"
        description="Download Poise and start having authentic conversations today."
        primaryCta={{ text: "Download Free", href: "/download" }}
        secondaryCta={{ text: "See Pricing", href: "/pricing" }}
        background="gradient"
      />
    </main>
  );
}
