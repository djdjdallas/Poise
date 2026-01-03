import { Container } from "@/components/layout";
import { privacyPolicyContent } from "@/content/legal/privacy-policy";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Poise - AI Dating Coach. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white dark:bg-zinc-950">
      {/* Header */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <Container>
          <div className="py-12 md:py-16">
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
              Last updated: {privacyPolicyContent.lastUpdated}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
              Privacy Policy
            </h1>
          </div>
        </Container>
      </section>

      {/* Quick Summary */}
      <section className="py-8 bg-purple-50 dark:bg-purple-950/20 border-b border-zinc-200 dark:border-zinc-800">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">
              Quick Summary
            </h2>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                <span>We collect your email, preferences, and conversation context to provide AI suggestions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                <span><strong className="text-zinc-800 dark:text-zinc-200">Your prompts are sent to AI providers</strong> to generate message suggestions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                <span>Conversation data is deleted after 90 days or upon your request</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                <span>We never sell your personal data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                <span>You can request deletion of all your data at any time</span>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl">
            {/* Table of Contents */}
            <nav className="mb-12 p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
                Table of Contents
              </h2>
              <ol className="space-y-2 text-sm">
                {privacyPolicyContent.sections.map((section, index) => (
                  <li key={index}>
                    <a
                      href={`#section-${index + 1}`}
                      className="text-purple-600 dark:text-purple-400 hover:underline"
                    >
                      {index + 1}. {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* Sections */}
            <div className="prose prose-zinc dark:prose-invert max-w-none">
              {privacyPolicyContent.sections.map((section, index) => (
                <div key={index} id={`section-${index + 1}`} className="mb-10 scroll-mt-24">
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
                  href="/terms"
                  className="text-purple-600 dark:text-purple-400 hover:underline"
                >
                  Terms of Service
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
