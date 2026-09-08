"use client";

import posthog from "posthog-js";

/**
 * AffiliateCard - reusable affiliate placement with PostHog tracking + FTC disclosure.
 *
 * WHY THIS DESIGN:
 * - Single component for all placements → consistent UX, easy A/B testing later
 * - PostHog capture on click → measure per-partner, per-placement conversion
 * - rel="sponsored nofollow" is REQUIRED by Google for affiliate links
 * - Per-card disclosure satisfies the FTC "clear and conspicuous" requirement
 *
 * Rendered inside article prose by MDXContent, which parses
 * `<AffiliateCard ... />` blocks out of the raw markdown source.
 *
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.description
 * @param {string} props.ctaText
 * @param {string} props.url - Affiliate URL
 * @param {string} [props.badge] - Small label shown above the title
 * @param {string} props.partner - e.g. "nordvpn" (analytics)
 * @param {string} props.placement - e.g. "fetlife-privacy-top" (analytics)
 * @param {'default' | 'highlight' | 'inline'} [props.variant='default']
 */
export default function AffiliateCard({
  title,
  description,
  ctaText,
  url,
  badge,
  partner,
  placement,
  variant = "default",
}) {
  // Don't ship a dead link: hide the card until the affiliate URL is real.
  // (Pending programs keep a REPLACE_WITH_* placeholder in the MDX.)
  if (!url || url.startsWith("REPLACE_WITH_")) return null;

  const handleClick = () => {
    // Capture before the browser navigates away
    if (typeof posthog !== "undefined" && posthog.capture) {
      posthog.capture("affiliate_click", {
        partner,
        placement,
        url,
        page: typeof window !== "undefined" ? window.location.pathname : "",
      });
    }
  };

  const variantStyles = {
    default: "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900",
    highlight:
      "border-purple-200 bg-purple-50 dark:border-purple-900/50 dark:bg-purple-950/30",
    inline: "border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50",
  };

  return (
    <div
      className={`not-prose my-8 rounded-2xl border-2 p-5 sm:p-6 ${
        variantStyles[variant] || variantStyles.default
      }`}
      data-affiliate-partner={partner}
      data-affiliate-placement={placement}
    >
      {badge && (
        <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wide text-purple-700 dark:text-purple-400">
          {badge}
        </span>
      )}
      <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-white">
        {title}
      </h3>
      <p className="mb-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
      <a
        href={url}
        target="_blank"
        rel="sponsored nofollow noopener"
        onClick={handleClick}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-100 sm:w-auto"
      >
        {ctaText}
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </a>
      <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-500">
        Affiliate link. We may earn a commission if you sign up — at no cost to
        you.{" "}
        <a
          href="/affiliate-disclosure"
          className="underline hover:text-zinc-700 dark:hover:text-zinc-300"
        >
          Learn more
        </a>
        .
      </p>
    </div>
  );
}
