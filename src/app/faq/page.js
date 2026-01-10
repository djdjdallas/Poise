"use client";

import { useState } from "react";
import { Section, Card } from "@/components/ui";
import { Container } from "@/components/layout";
import posthog from "posthog-js";

const faqCategories = [
  {
    title: "About Poise",
    faqs: [
      {
        question: "What is Poise?",
        answer:
          "Poise is an AI-powered dating conversation coach designed specifically for Feeld users and the ENM (ethical non-monogamy) community. It helps you craft authentic, thoughtful messages that reflect your personality while navigating the unique nuances of modern dating.",
      },
      {
        question: "How does Poise work?",
        answer:
          "Simply screenshot your dating app conversation and share it with Poise. Our AI analyzes the context, tone, and dynamics of your chat, then suggests personalized responses in your preferred communication style. All processing happens directly on your device for complete privacy.",
      },
      {
        question: "Is Poise just for Feeld users?",
        answer:
          "While Poise was built with Feeld and ENM communities in mind, it works great with any dating app including Hinge, Tinder, Bumble, OkCupid, and more. Our AI understands the nuances of all types of modern dating conversations.",
      },
      {
        question: "What makes Poise different from other AI dating apps?",
        answer:
          "Unlike generic 'Rizz' apps that offer cheesy pickup lines, Poise focuses on authentic communication. We understand complex relationship dynamics like ENM, kink, and couples dating. Plus, all AI processing happens on your device, so we never see your private conversations.",
      },
    ],
  },
  {
    title: "Privacy & Security",
    faqs: [
      {
        question: "How does Poise protect my privacy?",
        answer:
          "Privacy is our top priority. All AI processing happens directly on your device using on-device machine learning. Your conversation screenshots and generated messages never leave your phone, and we have no way to access them.",
      },
      {
        question: "Does Poise store my conversations?",
        answer:
          "No. Your conversation screenshots and AI-generated suggestions are processed entirely on your device and are never uploaded to our servers. We only store your email address and subscription status for account management.",
      },
      {
        question: "Can Poise see my dating app messages?",
        answer:
          "No. Poise can only analyze screenshots you explicitly share with the app. We have no access to your dating app accounts or messages. You're always in control of what information you share.",
      },
      {
        question: "Is my data used to train AI models?",
        answer:
          "Absolutely not. Since all processing happens on your device, we never have access to your conversations in the first place. Your private dating messages are never used for AI training or any other purpose.",
      },
    ],
  },
  {
    title: "Features & Usage",
    faqs: [
      {
        question: "What can Poise help me with?",
        answer:
          "Poise can help you craft opening messages, maintain engaging conversations, navigate tricky topics like discussing boundaries or relationship structures, express interest authentically, and recover from awkward moments. We offer multiple communication styles to match your personality.",
      },
      {
        question: "How many messages can I generate for free?",
        answer:
          "The free tier includes 3 message generations per day with access to basic conversation styles. This lets you try Poise and see how it fits your dating life before committing to a subscription.",
      },
      {
        question: "Does Poise work with ENM/poly situations?",
        answer:
          "Yes! Poise was specifically designed to understand ethical non-monogamy, polyamory, and alternative relationship structures. Our AI can help you navigate conversations about relationship dynamics, discuss boundaries, and communicate clearly about your situation.",
      },
      {
        question: "Can Poise help couples?",
        answer:
          "Absolutely. Poise understands couples dating dynamics and can help you craft messages when dating as a pair. Whether you're looking for a third, networking in the lifestyle community, or navigating any other couples scenario, Poise has you covered.",
      },
    ],
  },
  {
    title: "Pricing & Subscription",
    faqs: [
      {
        question: "How much does Poise cost?",
        answer:
          "Poise offers flexible pricing: Free (3 messages/day), Weekly ($4.99/week), Monthly ($9.99/month, most popular), and Yearly ($59.99/year, best value). All paid plans include unlimited message generations and access to all conversation styles.",
      },
      {
        question: "Can I cancel my subscription?",
        answer:
          "Yes, you can cancel anytime directly from your App Store settings. Your access will continue until the end of your current billing period, and you won't be charged again.",
      },
      {
        question: "Is there a free trial?",
        answer:
          "The free tier with 3 daily messages lets you experience Poise before subscribing. Additionally, new subscribers can take advantage of our 7-day refund policy through the App Store if Poise isn't the right fit.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "Payments are processed securely through the Apple App Store, which accepts all major credit cards, debit cards, Apple Pay, and App Store gift cards. Your payment information is handled entirely by Apple.",
      },
    ],
  },
  {
    title: "Technical",
    faqs: [
      {
        question: "What platforms is Poise available on?",
        answer:
          "Poise is currently available on iOS (iPhone and iPad). We're actively developing an Android version, and you can join our waitlist to be notified when it launches.",
      },
      {
        question: "Does Poise work offline?",
        answer:
          "Poise requires an internet connection to verify your subscription status, but the core AI processing happens on your device. This means your conversations stay private while still benefiting from our latest AI improvements.",
      },
      {
        question: "How do I contact support?",
        answer:
          "You can reach our support team at support@trypoise.app. We typically respond within 24 hours on business days. For common questions, check our FAQ or visit our help center in the app.",
      },
    ],
  },
];

function FAQItem({ question, answer, isOpen, onToggle, category }) {
  const handleToggle = () => {
    // Only track when expanding (not collapsing)
    if (!isOpen) {
      posthog.capture("faq_item_expanded", {
        question: question,
        category: category,
      });
    }
    onToggle();
  };

  return (
    <div className="border-b border-zinc-200 dark:border-zinc-800 last:border-b-0">
      <button
        onClick={handleToggle}
        className="w-full py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900 rounded-lg"
      >
        <span className="text-lg font-medium text-zinc-900 dark:text-white pr-4">
          {question}
        </span>
        <span className="flex-shrink-0 ml-4">
          <svg
            className={`w-5 h-5 text-purple-600 dark:text-purple-400 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

function FAQCategory({ title, faqs, openItems, onToggle }) {
  return (
    <div className="mb-12 last:mb-0">
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
        {title}
      </h2>
      <Card padding="none" className="overflow-hidden">
        <div className="px-6">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItems[`${title}-${index}`]}
              onToggle={() => onToggle(`${title}-${index}`)}
              category={title}
            />
          ))}
        </div>
      </Card>
    </div>
  );
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (key) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

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
                Frequently Asked Questions
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 sm:text-xl">
              Everything you need to know about Poise, your AI dating coach for
              authentic connections.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ Content */}
      <Section>
        <div className="mx-auto max-w-3xl">
          {faqCategories.map((category, index) => (
            <FAQCategory
              key={index}
              title={category.title}
              faqs={category.faqs}
              openItems={openItems}
              onToggle={toggleItem}
            />
          ))}
        </div>
      </Section>

      {/* Still Have Questions */}
      <Section background="muted">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            We're here to help. Reach out to our support team and we'll get back
            to you as soon as possible.
          </p>
          <a
            href="mailto:support@trypoise.app"
            onClick={() => {
              posthog.capture("support_email_clicked", {
                source: "faq_page",
              });
            }}
            className="inline-flex items-center gap-2 text-lg font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            support@trypoise.app
          </a>
        </div>
      </Section>
    </main>
  );
}
