import { Button, Section, Card } from "@/components/ui";
import { Container } from "@/components/layout";
import { PricingTable, CTASection } from "@/components/marketing";

export const metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for Poise. Start free, upgrade when you're ready. Cancel anytime.",
};

const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    period: "",
    description: "3 messages/day - Basic styles",
    features: [
      "3 message generations/day",
      "Basic conversation styles",
      "On-device privacy",
    ],
    cta: { text: "Get Started", href: "/download" },
    popular: false,
  },
  {
    name: "Weekly",
    price: "$4.99",
    period: "week",
    description: "Unlimited messages - All styles",
    features: [
      "Unlimited message generations",
      "All conversation styles",
      "Context-aware suggestions",
      "Priority processing",
    ],
    cta: { text: "Start Free Trial", href: "/download" },
    popular: false,
  },
  {
    name: "Monthly",
    price: "$9.99",
    period: "month",
    description: "Best value for regular daters",
    features: [
      "Unlimited message generations",
      "All conversation styles",
      "Context-aware suggestions",
      "Priority processing",
      "Save 50% vs weekly",
    ],
    cta: { text: "Start Free Trial", href: "/download" },
    popular: true,
  },
  {
    name: "Yearly",
    price: "$59.99",
    period: "year",
    description: "For the committed romantic",
    features: [
      "Unlimited message generations",
      "All conversation styles",
      "Context-aware suggestions",
      "Priority processing",
      "Save 50% vs monthly",
      "Early access to new features",
    ],
    cta: { text: "Start Free Trial", href: "/download" },
    popular: false,
  },
];

const faqs = [
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, you can cancel your subscription at any time from your App Store settings. Your access will continue until the end of your current billing period.",
  },
  {
    question: "Is my data really private?",
    answer:
      "Yes, all AI processing happens directly on your device. Your conversations never leave your phone, and we have no way to access them. We only store your email and subscription status.",
  },
  {
    question: "Does Poise work with apps other than Feeld?",
    answer:
      "Yes! Poise works with Hinge, Tinder, Bumble, OkCupid, and any other dating app. Simply screenshot your conversation and Poise will help you craft the perfect response.",
  },
  {
    question: "What if Poise doesn't work for me?",
    answer:
      "We encourage you to try the free tier first to see if Poise is right for you. If you subscribe and aren't satisfied, we offer a 7-day refund policy through the App Store.",
  },
];

export default function PricingPage() {
  return (
    <main>
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-white dark:bg-zinc-950">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-white to-white dark:from-purple-950/20 dark:via-zinc-950 dark:to-zinc-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-100/40 via-transparent to-transparent dark:from-purple-900/20" />

        <Container className="relative">
          <div className="flex flex-col items-center py-20 md:py-28 lg:py-32 text-center">
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-r from-zinc-900 via-purple-800 to-pink-700 dark:from-white dark:via-purple-300 dark:to-pink-300 bg-clip-text text-transparent">
                Simple Pricing. Real Value.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 sm:text-xl">
              Start free, upgrade when you're ready. Cancel anytime.
            </p>
          </div>
        </Container>
      </section>

      {/* Pricing Table */}
      <PricingTable tiers={pricingTiers} className="py-8 md:py-12" />

      {/* FAQ Section */}
      <Section background="muted">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-white mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} padding="lg">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <CTASection
        headline="Ready to Transform Your Dating Life?"
        description="Download Poise and start having better conversations today."
        primaryCta={{ text: "Download Free", href: "/download" }}
        secondaryCta={{ text: "Learn More", href: "/about" }}
        background="gradient"
      />
    </main>
  );
}
