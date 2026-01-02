import { Section, Card } from "@/components/ui";
import {
  Hero,
  FeatureGrid,
  TestimonialSection,
  PricingTable,
  CTASection,
  UseCaseSection,
} from "@/components/marketing";

export default function Home() {
  // Section 3: Solution Features
  const solutionFeatures = [
    {
      icon: "🦄",
      title: "Feeld Fluency",
      description:
        "From pings to desires, unicorn etiquette to couple messaging - we actually know how Feeld works.",
    },
    {
      icon: "💬",
      title: "ENM Communication",
      description:
        "Whether you're poly, open, swinging, or exploring - get help navigating disclosure, boundaries, and the conversations that matter.",
    },
    {
      icon: "🔐",
      title: "Discretion First",
      description:
        "All processing happens on your device. Your conversations, desires, and matches never touch our servers. Period.",
    },
    {
      icon: "✨",
      title: "Authentic Over Performative",
      description:
        'No manipulative "rizz." Just help expressing what you actually want to say - clearly, confidently, and respectfully.',
    },
  ];

  // Section 4: Use Cases
  const useCases = [
    {
      title: "For Singles on Feeld",
      items: [
        "Craft openers that show you understand ENM culture",
        "Navigate messaging with couples without the awkwardness",
        "Communicate your relationship structure clearly",
      ],
    },
    {
      title: "For Couples",
      items: [
        'Write "we" messages that don\'t sound creepy',
        "Avoid the unicorn hunter reputation",
        "Coordinate your approach with linked profiles",
      ],
    },
    {
      title: "For the Lifestyle Community",
      items: [
        "Message on SDC, Kasidie, or lifestyle apps with confidence",
        "Discuss desires directly without being crude",
        "Navigate the unique etiquette of swinger spaces",
      ],
    },
    {
      title: "For Anyone in Open Relationships",
      items: [
        "Scripts for disclosing ENM on vanilla apps",
        'Help with the "how does that work?" conversation',
        "Communicate boundaries and expectations clearly",
      ],
    },
  ];

  // Section 5: Testimonials
  const testimonials = [
    {
      quote:
        "I've been on Feeld for two years and always struggled with openers. Poise actually understands the vibe - it doesn't suggest generic pickup lines, it helps me reference their desires and interests in a way that feels natural.",
      author: "Morgan",
      details: "31 · Poly, Bay Area",
    },
    {
      quote:
        "As a couple, messaging singles was always awkward. Poise helped us write bios and openers that are inviting without being pushy. We've had way better conversations since.",
      author: "Alex & Sam",
      details: "34/32 · ENM Couple, Austin",
    },
    {
      quote:
        "Finally something that doesn't assume I'm looking for monogamy. The ENM scripts for dating apps like Hinge have been game-changing.",
      author: "Jordan",
      details: "28 · Solo Poly, Brooklyn",
    },
  ];

  // Section 6: How It Works Steps
  const howItWorksSteps = [
    {
      number: "1",
      title: "Tell us the context",
      description: "What app, who you're messaging, what you want to say",
    },
    {
      number: "2",
      title: "Get tailored suggestions",
      description:
        "Options that fit ENM culture, your style, and the situation",
    },
    {
      number: "3",
      title: "Send with confidence",
      description:
        "Copy, customize if needed, and start conversations that actually go somewhere",
    },
  ];

  // Section 7: Privacy Points
  const privacyPoints = [
    "On-device processing — Your messages are generated locally",
    "No conversation storage — We never see what you type or receive",
    "Minimal account data — Just email for login, nothing more",
    "No training on your data — Your conversations don't improve our AI",
  ];

  // Section 8: Pricing Tiers
  const pricingTiers = [
    {
      name: "Free",
      price: "$0",
      period: "",
      description: "Get started",
      features: ["3 messages/day", "Basic styles"],
      cta: { text: "Start Free", href: "/download" },
      popular: false,
    },
    {
      name: "Weekly",
      price: "$7.99",
      period: "week",
      description: "Try it out",
      features: ["Unlimited messages", "All styles", "Priority responses"],
      cta: { text: "Start Weekly", href: "/download" },
      popular: false,
    },
    {
      name: "Monthly",
      price: "$14.99",
      period: "month",
      description: "Most popular",
      features: [
        "Unlimited messages",
        "All styles",
        "Priority responses",
        "History sync",
      ],
      cta: { text: "Start Monthly", href: "/download" },
      popular: true,
    },
    {
      name: "Annual",
      price: "$99.99",
      period: "year",
      description: "Best value",
      features: ["Everything in Monthly", "Profile coaching", "Early access"],
      cta: { text: "Start Annual", href: "/download" },
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Section 1: Hero */}
      <Hero
        headline="Finally. An AI That Actually Gets Open Relationships."
        subheadline="The first conversation coach built specifically for Feeld, ethical non-monogamy, and the lifestyle community. No judgment. No generic pickup lines. Just smart messaging help that understands your world."
        primaryCta={{ text: "Download Poise (Free)", href: "/download" }}
        trustBadge="Your conversations never leave your device"
      />

      {/* Section 2: Problem Section */}
      <Section background="muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
            Generic dating AI doesn't work for us.
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            You've tried ChatGPT. Maybe even Rizz. And every time, you get:
          </p>
          <ul className="text-left max-w-xl mx-auto space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mt-0.5">
                <svg
                  className="w-4 h-4 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
              <span className="text-zinc-700 dark:text-zinc-300">
                Openers that sound like they're for Tinder hookups, not Feeld
                connections
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mt-0.5">
                <svg
                  className="w-4 h-4 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
              <span className="text-zinc-700 dark:text-zinc-300">
                Zero understanding of ENM dynamics or relationship structures
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mt-0.5">
                <svg
                  className="w-4 h-4 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
              <span className="text-zinc-700 dark:text-zinc-300">
                Advice that assumes everyone's monogamous
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mt-0.5">
                <svg
                  className="w-4 h-4 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
              <span className="text-zinc-700 dark:text-zinc-300">
                Suggestions that would get you unmatched instantly by anyone in
                the lifestyle
              </span>
            </li>
          </ul>
          <p className="text-xl font-semibold text-purple-600 dark:text-purple-400">
            You need messaging help that speaks your language.
          </p>
        </div>
      </Section>

      {/* Section 3: Solution Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Built by the community. For the community.
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Poise understands:
          </p>
        </div>
        <FeatureGrid features={solutionFeatures} columns={4} />
      </Section>

      {/* Section 4: Use Cases Section */}
      <Section background="muted">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
            For the conversations that actually matter
          </h2>
        </div>
        <UseCaseSection useCases={useCases} className="py-0" />
      </Section>

      {/* Section 5: Social Proof / Testimonials */}
      <TestimonialSection testimonials={testimonials}>
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
          Made for people like you
        </h2>
      </TestimonialSection>

      {/* Section 6: How It Works */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
            Smart help. Zero judgment.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {howItWorksSteps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Section 7: Privacy Section */}
      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Your secrets stay yours
          </h2>
          <p className="text-lg text-zinc-300 mb-10">
            We built Poise for a community where discretion isn't optional -
            it's everything.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {privacyPoints.map((point, index) => (
              <Card
                key={index}
                padding="md"
                className="bg-zinc-800 border-zinc-700 text-left"
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-4 h-4 text-emerald-400"
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
                  </span>
                  <span className="text-zinc-200">{point}</span>
                </div>
              </Card>
            ))}
          </div>
          <p className="text-purple-300 font-medium">
            The lifestyle community trusts Poise because we engineered privacy
            in from day one.
          </p>
        </div>
      </Section>

      {/* Section 8: Pricing Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
            Start free. Upgrade when you're ready.
          </h2>
        </div>
        <PricingTable tiers={pricingTiers} className="py-0" />
      </Section>

      {/* Section 9: Final CTA */}
      <CTASection
        headline="Ready to message with confidence?"
        description="You've spent enough time staring at blank message fields, second-guessing yourself, or getting advice from AI that doesn't understand your world. Poise was built for Feeld. For ENM. For the lifestyle community. For you."
        primaryCta={{ text: "Download Poise - Free", href: "/download" }}
        background="gradient"
      />
    </div>
  );
}
