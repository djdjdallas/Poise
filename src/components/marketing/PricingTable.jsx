"use client";

import { Button, Badge, Card, Section } from "@/components/ui";
import posthog from "posthog-js";

/**
 * CheckIcon component for feature list items
 */
function CheckIcon({ className = "" }) {
  return (
    <svg
      className={`w-5 h-5 flex-shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

/**
 * PricingCard component for individual pricing tiers
 */
function PricingCard({ tier }) {
  const { name, price, period, description, features, cta, popular } = tier;

  return (
    <Card
      padding="lg"
      className={`
        relative flex flex-col h-full
        ${popular
          ? "border-2 border-purple-500 dark:border-purple-400 shadow-xl shadow-purple-500/15 scale-[1.02] z-10"
          : ""
        }
      `}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge variant="default" className="bg-purple-600 text-white">
            Most Popular
          </Badge>
        </div>
      )}

      {/* Tier Header */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
          {name}
        </h3>
        {description && (
          <p className="text-zinc-600 dark:text-zinc-400 text-sm">
            {description}
          </p>
        )}
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-zinc-900 dark:text-white">
            {price}
          </span>
          {period && (
            <span className="text-zinc-500 dark:text-zinc-400">/{period}</span>
          )}
        </div>
      </div>

      {/* Features List */}
      <ul className="space-y-3 mb-8 flex-grow">
        {features?.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckIcon className="text-emerald-500 mt-0.5" />
            <span className="text-zinc-700 dark:text-zinc-300 text-sm">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      {cta && (
        <Button
          variant={popular ? "primary" : "secondary"}
          href={cta.href}
          className="w-full"
          onClick={() => {
            posthog.capture("pricing_tier_clicked", {
              tier_name: name,
              tier_price: price,
              tier_period: period,
              is_popular: popular,
              cta_text: cta.text,
              destination_url: cta.href,
            });
          }}
        >
          {cta.text}
        </Button>
      )}
    </Card>
  );
}

/**
 * PricingTable component displays pricing tiers in a responsive grid
 *
 * @param {Object} props - Component props
 * @param {Array<{name: string, price: string, period: string, description: string, features: string[], cta: {text: string, href: string}, popular: boolean}>} props.tiers - Array of pricing tier data
 * @param {string} [props.className] - Additional CSS classes
 *
 * @example
 * const tiers = [
 *   {
 *     name: "Free",
 *     price: "$0",
 *     period: "",
 *     description: "3 messages/day - Basic styles",
 *     features: ["3 message generations/day", "Basic conversation styles", "On-device privacy"],
 *     cta: { text: "Get Started", href: "/download" },
 *     popular: false
 *   }
 * ]
 */
function PricingTable({ tiers, className = "" }) {
  if (!tiers || tiers.length === 0) {
    return null;
  }

  return (
    <Section className={className}>
      <div
        className={`
          grid gap-6 lg:gap-8
          grid-cols-1
          ${tiers.length === 2 ? "md:grid-cols-2 max-w-3xl mx-auto" : ""}
          ${tiers.length === 3 ? "md:grid-cols-2 lg:grid-cols-3" : ""}
          ${tiers.length >= 4 ? "md:grid-cols-2 lg:grid-cols-4" : ""}
        `}
      >
        {tiers.map((tier, index) => (
          <PricingCard key={index} tier={tier} />
        ))}
      </div>
    </Section>
  );
}

export { PricingTable };
