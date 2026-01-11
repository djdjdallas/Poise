import { Container } from "@/components/layout";

export const metadata = {
  title: "Support - Poise",
  description: "Get help with Poise - AI Dating Coach. Contact our support team, manage your subscription, or find answers to common questions.",
};

export default function SupportPage() {
  return (
    <main className="bg-white dark:bg-zinc-950">
      {/* Header */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <Container>
          <div className="py-12 md:py-16">
            <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
              Support
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              We're here to help you get the most out of Poise.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl">
            {/* Contact Us */}
            <div className="mb-12">
              <h2 className="text-xl md:text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                Contact Us
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                Have a question, issue, or feedback? Our support team is ready to assist you.
              </p>
              <a
                href="mailto:support@trypoise.app"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                support@trypoise.app
              </a>
              <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-500">
                We typically respond within 24-48 hours.
              </p>
            </div>

            {/* Common Topics */}
            <div className="mb-12">
              <h2 className="text-xl md:text-2xl font-semibold text-zinc-900 dark:text-white mb-6">
                Common Support Topics
              </h2>
              <div className="grid gap-4">
                <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">
                    Subscription & Billing
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-3">
                    Manage your subscription, update payment methods, or request refunds through your App Store account settings.
                  </p>
                  <p className="text-zinc-500 dark:text-zinc-500 text-sm">
                    For iOS: Settings → Apple ID → Subscriptions
                  </p>
                </div>

                <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">
                    Account & Data
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                    To request account deletion or access your data, please email us at{" "}
                    <a href="mailto:support@trypoise.app" className="text-purple-600 dark:text-purple-400 hover:underline">
                      support@trypoise.app
                    </a>
                    . We process all requests within 30 days.
                  </p>
                </div>

                <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">
                    Technical Issues
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                    Experiencing bugs or app crashes? Please include your device model, iOS version, and steps to reproduce the issue when contacting support.
                  </p>
                </div>

                <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">
                    Feature Requests & Feedback
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                    We love hearing from our users! Share your ideas and suggestions to help us improve Poise.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
                Helpful Resources
              </h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/help"
                  className="text-purple-600 dark:text-purple-400 hover:underline"
                >
                  Help Center & FAQ
                </a>
                <a
                  href="/privacy-policy"
                  className="text-purple-600 dark:text-purple-400 hover:underline"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="text-purple-600 dark:text-purple-400 hover:underline"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
