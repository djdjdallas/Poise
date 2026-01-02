import { Button, Badge, Section, Card } from "@/components/ui";
import { Container } from "@/components/layout";
import { CTASection } from "@/components/marketing";

export const metadata = {
  title: "Free Dating Profile Bio Generator",
  description:
    "Get personalized bio suggestions for Feeld, Hinge, and more. AI-powered bio ideas that actually work.",
};

export default function BioGeneratorPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 md:pt-28 md:pb-16">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-white to-white dark:from-purple-950/20 dark:via-zinc-950 dark:to-zinc-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-100/40 via-transparent to-transparent dark:from-purple-900/20" />

        <Container className="relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              <span className="bg-gradient-to-r from-zinc-900 via-purple-800 to-pink-700 dark:from-white dark:via-purple-300 dark:to-pink-300 bg-clip-text text-transparent">
                Free Dating Profile Bio Generator
              </span>
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              Get personalized bio suggestions for Feeld, Hinge, Tinder, and
              more
            </p>
          </div>
        </Container>
      </section>

      {/* Form Section */}
      <Section>
        <div className="max-w-2xl mx-auto">
          <Card padding="lg" className="shadow-lg">
            <form className="space-y-6">
              {/* App Selection */}
              <div>
                <label
                  htmlFor="app"
                  className="block text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-2"
                >
                  Which app is this for?
                </label>
                <select
                  id="app"
                  name="app"
                  className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select an app...</option>
                  <option value="feeld">Feeld</option>
                  <option value="hinge">Hinge</option>
                  <option value="tinder">Tinder</option>
                  <option value="bumble">Bumble</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Relationship Situation */}
              <div>
                <label
                  htmlFor="relationship"
                  className="block text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-2"
                >
                  What's your relationship situation?
                </label>
                <select
                  id="relationship"
                  name="relationship"
                  className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select your situation...</option>
                  <option value="single">Single</option>
                  <option value="enm">In a relationship / ENM</option>
                  <option value="couple">Couple profile</option>
                </select>
              </div>

              {/* Looking For */}
              <div>
                <label
                  htmlFor="looking-for"
                  className="block text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-2"
                >
                  What are you looking for?
                </label>
                <textarea
                  id="looking-for"
                  name="looking-for"
                  rows={3}
                  placeholder="e.g., Casual connections, deep conversations, exploring kinks, finding a third..."
                  className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
                />
              </div>

              {/* Interests */}
              <div>
                <label
                  htmlFor="interests"
                  className="block text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-2"
                >
                  Interests or traits to highlight
                </label>
                <textarea
                  id="interests"
                  name="interests"
                  rows={3}
                  placeholder="e.g., Rock climbing, cooking, travel, great communicator, adventurous..."
                  className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
                />
              </div>

              {/* Vibe Selection */}
              <div>
                <label
                  htmlFor="vibe"
                  className="block text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-2"
                >
                  What vibe?
                </label>
                <select
                  id="vibe"
                  name="vibe"
                  className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select a vibe...</option>
                  <option value="playful">Playful</option>
                  <option value="sincere">Sincere</option>
                  <option value="witty">Witty</option>
                  <option value="mysterious">Mysterious</option>
                  <option value="direct">Direct</option>
                </select>
              </div>

              {/* Submit Button */}
              <Button type="submit" variant="primary" size="lg" className="w-full">
                Generate Bio Ideas
              </Button>
            </form>
          </Card>

          {/* Upgrade Card */}
          <Card
            padding="lg"
            className="mt-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-purple-200 dark:border-purple-800"
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                Get unlimited bio generations in the Poise app
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                Plus personalized coaching, opener suggestions, and more - all
                processed privately on your device.
              </p>
              <Button href="/download" variant="primary" size="lg">
                Download Poise Free
              </Button>
            </div>
          </Card>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Badge
              variant="success"
              size="md"
              icon={
                <svg
                  className="w-full h-full"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                  />
                </svg>
              }
            >
              On-device processing
            </Badge>
            <Badge
              variant="success"
              size="md"
              icon={
                <svg
                  className="w-full h-full"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              }
            >
              No data stored
            </Badge>
          </div>
        </div>
      </Section>

      {/* Final CTA Section */}
      <CTASection
        headline="Ready to write bios with confidence?"
        description="Stop second-guessing every word. Get AI-powered suggestions that actually understand ENM culture and dating app dynamics."
        primaryCta={{ text: "Download Poise Free", href: "/download" }}
        background="gradient"
      />
    </main>
  );
}
