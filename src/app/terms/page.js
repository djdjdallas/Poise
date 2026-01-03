import { Container } from "@/components/layout";
import { termsContent } from "@/content/legal/terms";

export const metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Poise - AI Dating Coach. Read our terms regarding account usage, subscriptions, and service policies.",
};

export default function TermsPage() {
  return (
    <main className="bg-white dark:bg-zinc-950">
      {/* Header */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <Container>
          <div className="py-12 md:py-16">
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
              Last updated: {termsContent.lastUpdated}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
              Terms of Service
            </h1>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl">
            <div className="prose prose-zinc dark:prose-invert max-w-none">
              {termsContent.sections.map((section, index) => (
                <div key={index} className="mb-10">
                  <h2 className="text-xl md:text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                    {index + 1}. {section.title}
                  </h2>
                  <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed whitespace-pre-line">
                    {section.content.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="mb-4">
                        {paragraph.split('**').map((part, partIndex) =>
                          partIndex % 2 === 1 ? (
                            <strong key={partIndex} className="font-semibold text-zinc-800 dark:text-zinc-200">
                              {part}
                            </strong>
                          ) : (
                            part
                          )
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Navigation */}
            <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
                Related Documents
              </h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/privacy-policy"
                  className="text-purple-600 dark:text-purple-400 hover:underline"
                >
                  Privacy Policy
                </a>
                <a
                  href="/help"
                  className="text-purple-600 dark:text-purple-400 hover:underline"
                >
                  Help & Support
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
