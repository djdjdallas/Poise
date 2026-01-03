"use client";

import { useState } from "react";
import { Container } from "@/components/layout";
import { Section } from "@/components/ui";

export default function HelpPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "What is Poise?",
          a: "Poise is an AI-powered conversation coach designed specifically for the ethical non-monogamy (ENM) and lifestyle dating community. We help you craft thoughtful, authentic messages for platforms like Feeld, and provide guidance on navigating complex relationship dynamics."
        },
        {
          q: "How do I get started with Poise?",
          a: "Download Poise from the App Store, create an account using your email, and you're ready to go! The free tier gives you 3 message suggestions per day. You can upgrade to a paid subscription anytime for unlimited access."
        },
        {
          q: "Is Poise only for Feeld users?",
          a: "While Poise is optimized for Feeld and understands its unique culture, our AI coach works great for any dating platform or situation. Whether you're on Hinge, SDC, Kasidie, or just texting, Poise can help you communicate more effectively."
        },
        {
          q: "Do I need to be in an ENM relationship to use Poise?",
          a: "Not at all! While we specialize in ENM and lifestyle communication, Poise helps anyone who wants to communicate more authentically and confidently in dating situations."
        }
      ]
    },
    {
      category: "Using the App",
      questions: [
        {
          q: "How does message generation work?",
          a: "Simply provide context about your conversation - who you're messaging, what they said, and what you want to convey. Our AI analyzes this context and generates tailored suggestions that match your style and the situation. You can then copy, edit, and send the suggestion that works best for you."
        },
        {
          q: "What conversation styles are available?",
          a: "Poise offers multiple styles including Playful, Direct, Curious, Witty, and Thoughtful. Premium subscribers have access to all styles, while free users can access basic styles."
        },
        {
          q: "Can I customize the suggestions?",
          a: "Absolutely! Our suggestions are starting points, not scripts. We encourage you to edit and personalize suggestions to match your authentic voice. The best messages blend AI assistance with your unique personality."
        },
        {
          q: "What if I get a suggestion I don't like?",
          a: "Simply tap 'Regenerate' to get new suggestions, or adjust your context and preferences for different results. You can also provide feedback to help improve future suggestions."
        }
      ]
    },
    {
      category: "Privacy & Security",
      questions: [
        {
          q: "Is my data private?",
          a: "Your privacy is our priority. While conversations are processed by AI providers to generate suggestions, we never sell your data, and conversation data is automatically deleted after 90 days. You can also request immediate deletion at any time."
        },
        {
          q: "Who can see my conversations?",
          a: "Your conversation data is sent to our AI providers solely for generating suggestions. It is not shared with third parties for marketing or advertising purposes. Our team does not review individual conversations unless specifically required for troubleshooting at your request."
        },
        {
          q: "How can I delete my data?",
          a: "You can delete your conversation history in the App settings, or delete your entire account to remove all associated data. You can also email support@trypoise.app with 'Data Deletion Request' to have all your data removed within 30 days."
        }
      ]
    },
    {
      category: "Subscriptions & Billing",
      questions: [
        {
          q: "What's included in the free tier?",
          a: "Free users get 3 message suggestions per day and access to basic conversation styles. It's a great way to try Poise before committing to a subscription."
        },
        {
          q: "What do paid subscriptions include?",
          a: "Paid subscribers get unlimited message suggestions, access to all conversation styles, priority response times, and conversation history sync. Annual subscribers also get profile coaching and early access to new features."
        },
        {
          q: "How do I cancel my subscription?",
          a: "Subscriptions are managed through the Apple App Store. To cancel: Open Settings on your iPhone > Tap your Apple ID > Subscriptions > Find Poise > Cancel Subscription. Your access continues until the end of your current billing period."
        },
        {
          q: "Can I get a refund?",
          a: "Refunds are handled by Apple. To request a refund, visit reportaproblem.apple.com, sign in with your Apple ID, and select the Poise subscription. Apple will review your request and process eligible refunds."
        },
        {
          q: "Why was I charged after canceling?",
          a: "If you canceled but were still charged, the charge may have been for a billing period that started before your cancellation. Apple charges up to 24 hours before the renewal date. If you believe you were charged in error, contact Apple Support."
        }
      ]
    },
    {
      category: "Account Management",
      questions: [
        {
          q: "How do I change my email address?",
          a: "Currently, email changes require contacting support. Email support@trypoise.app from your registered email with your new preferred email address, and we'll update it for you."
        },
        {
          q: "How do I delete my account?",
          a: "To delete your account: Open Poise > Settings > Account > Delete Account. This will permanently delete your account and all associated data. This action cannot be undone."
        },
        {
          q: "What happens when I delete my account?",
          a: "All your data is permanently removed, including conversation history, preferences, and account information. If you have an active subscription, remember to cancel it separately through the App Store to avoid future charges."
        },
        {
          q: "I forgot my password. How do I reset it?",
          a: "On the login screen, tap 'Forgot Password' and enter your email address. You'll receive a password reset link. If you signed up using Apple Sign-In, you'll use your Apple ID to log in instead."
        }
      ]
    },
    {
      category: "Troubleshooting",
      questions: [
        {
          q: "The app is slow or not responding",
          a: "Try closing and reopening the app. If issues persist, check your internet connection and ensure you have the latest version installed. Restarting your device can also help resolve temporary issues."
        },
        {
          q: "I'm not getting any suggestions",
          a: "Ensure you have an active internet connection. If you're on the free tier, check if you've used your daily limit. If problems persist, try logging out and back in, or contact support."
        },
        {
          q: "My subscription isn't showing as active",
          a: "Try restoring your purchases: Settings > Restore Purchases. If the issue continues, verify your subscription status in iPhone Settings > Apple ID > Subscriptions. Contact support if the problem persists."
        }
      ]
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="bg-white dark:bg-zinc-950">
      {/* Header */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <Container>
          <div className="py-12 md:py-16 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Help & Support
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Find answers to common questions, manage your subscription, or get in touch with our support team.
            </p>
          </div>
        </Container>
      </section>

      {/* Quick Actions */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Contact Support */}
            <a
              href="mailto:support@trypoise.app"
              className="group p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-purple-300 dark:hover:border-purple-700 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Email Support
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                support@trypoise.app
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-2">
                Response within 24-48 hours
              </p>
            </a>

            {/* Manage Subscription */}
            <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                Manage Subscription
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                Cancel or modify through Apple
              </p>
              <a
                href="https://apps.apple.com/account/subscriptions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-purple-600 dark:text-purple-400 hover:underline"
              >
                Open Subscriptions →
              </a>
            </div>

            {/* Delete Account */}
            <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                Delete Account
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                Settings → Account → Delete
              </p>
              <a
                href="mailto:support@trypoise.app?subject=Account%20Deletion%20Request"
                className="text-sm text-red-600 dark:text-red-400 hover:underline"
              >
                Or email us →
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Subscription Management Guide */}
      <Section background="muted">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 text-center">
              How to Manage Your Subscription
            </h2>

            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 md:p-8 border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
                Cancel or Modify Subscription
              </h3>
              <ol className="space-y-4 text-zinc-600 dark:text-zinc-400">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-sm font-semibold text-purple-600 dark:text-purple-400">1</span>
                  <span>Open the <strong className="text-zinc-800 dark:text-zinc-200">Settings</strong> app on your iPhone</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-sm font-semibold text-purple-600 dark:text-purple-400">2</span>
                  <span>Tap your <strong className="text-zinc-800 dark:text-zinc-200">Apple ID</strong> at the top</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-sm font-semibold text-purple-600 dark:text-purple-400">3</span>
                  <span>Tap <strong className="text-zinc-800 dark:text-zinc-200">Subscriptions</strong></span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-sm font-semibold text-purple-600 dark:text-purple-400">4</span>
                  <span>Find and tap <strong className="text-zinc-800 dark:text-zinc-200">Poise</strong></span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-sm font-semibold text-purple-600 dark:text-purple-400">5</span>
                  <span>Tap <strong className="text-zinc-800 dark:text-zinc-200">Cancel Subscription</strong> or choose a different plan</span>
                </li>
              </ol>

              <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  <strong>Note:</strong> Canceling your subscription stops future charges but you'll retain access until the end of your current billing period.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 md:p-8 border border-zinc-200 dark:border-zinc-800 mt-6">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
                Request a Refund
              </h3>
              <ol className="space-y-4 text-zinc-600 dark:text-zinc-400">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-sm font-semibold text-purple-600 dark:text-purple-400">1</span>
                  <span>Visit <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline">reportaproblem.apple.com</a></span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-sm font-semibold text-purple-600 dark:text-purple-400">2</span>
                  <span>Sign in with your Apple ID</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-sm font-semibold text-purple-600 dark:text-purple-400">3</span>
                  <span>Find your Poise purchase and select it</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-sm font-semibold text-purple-600 dark:text-purple-400">4</span>
                  <span>Follow the prompts to request a refund</span>
                </li>
              </ol>
            </div>
          </div>
        </Container>
      </Section>

      {/* Account Deletion Guide */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 text-center">
              How to Delete Your Account
            </h2>

            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 md:p-8 border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
                In-App Deletion
              </h3>
              <ol className="space-y-4 text-zinc-600 dark:text-zinc-400">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-sm font-semibold text-red-600 dark:text-red-400">1</span>
                  <span>Open the Poise app</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-sm font-semibold text-red-600 dark:text-red-400">2</span>
                  <span>Go to <strong className="text-zinc-800 dark:text-zinc-200">Settings</strong></span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-sm font-semibold text-red-600 dark:text-red-400">3</span>
                  <span>Tap <strong className="text-zinc-800 dark:text-zinc-200">Account</strong></span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-sm font-semibold text-red-600 dark:text-red-400">4</span>
                  <span>Tap <strong className="text-zinc-800 dark:text-zinc-200">Delete Account</strong></span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-sm font-semibold text-red-600 dark:text-red-400">5</span>
                  <span>Confirm deletion when prompted</span>
                </li>
              </ol>

              <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <p className="text-sm text-red-800 dark:text-red-200">
                  <strong>Warning:</strong> Account deletion is permanent. All your data, including conversation history and preferences, will be permanently deleted and cannot be recovered.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                <h4 className="font-semibold text-zinc-900 dark:text-white mb-2">Alternative: Email Request</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                  If you can't access the app, you can request account deletion by email:
                </p>
                <a
                  href="mailto:support@trypoise.app?subject=Account%20Deletion%20Request"
                  className="inline-flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400 hover:underline"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send deletion request to support@trypoise.app
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section background="muted">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqs.map((category, catIndex) => (
                <div key={catIndex}>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
                    {category.category}
                  </h3>
                  <div className="space-y-2">
                    {category.questions.map((faq, faqIndex) => {
                      const globalIndex = faqs.slice(0, catIndex).reduce((acc, cat) => acc + cat.questions.length, 0) + faqIndex;
                      const isOpen = openFaq === globalIndex;

                      return (
                        <div
                          key={faqIndex}
                          className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden"
                        >
                          <button
                            onClick={() => toggleFaq(globalIndex)}
                            className="w-full flex items-center justify-between p-4 text-left hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
                          >
                            <span className="font-medium text-zinc-900 dark:text-white pr-4">
                              {faq.q}
                            </span>
                            <svg
                              className={`w-5 h-5 text-zinc-500 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          {isOpen && (
                            <div className="px-4 pb-4">
                              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                {faq.a}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Still Need Help */}
      <Section>
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
              Still need help?
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              Our support team is here to help. Send us an email and we'll get back to you within 24-48 hours.
            </p>
            <a
              href="mailto:support@trypoise.app"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Support
            </a>
          </div>
        </Container>
      </Section>
    </main>
  );
}
