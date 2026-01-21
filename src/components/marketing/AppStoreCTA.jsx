"use client";

import posthog from "posthog-js";

const APP_STORE_URL = "https://apps.apple.com/us/app/poise-app/id6757319090";

/**
 * AppStoreCTA component - Reusable App Store download CTA for articles
 *
 * @param {Object} props - Component props
 * @param {'inline' | 'footer'} [props.variant='footer'] - CTA style variant
 * @param {string} [props.articleSlug] - Article slug for tracking
 * @param {string} [props.className] - Additional CSS classes
 */
function AppStoreCTA({ variant = "footer", articleSlug, className = "" }) {
  const handleClick = () => {
    posthog.capture("article_cta_clicked", {
      platform: "ios",
      store: "app_store",
      destination_url: APP_STORE_URL,
      cta_variant: variant,
      article_slug: articleSlug || "unknown",
    });
  };

  // Apple icon SVG
  const AppleIcon = ({ className: iconClass }) => (
    <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );

  if (variant === "inline") {
    return (
      <div
        className={`
          my-8 p-4 rounded-xl
          bg-gradient-to-r from-purple-50 to-pink-50
          dark:from-purple-950/30 dark:to-pink-950/30
          border border-purple-100 dark:border-purple-900/50
          ${className}
        `}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm font-medium text-zinc-900 dark:text-white">
              Need help crafting the perfect message?
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Poise helps you write authentic openers that get responses.
            </p>
          </div>
          <a
            href={APP_STORE_URL}
            onClick={handleClick}
            className="
              inline-flex items-center gap-2 px-4 py-2
              bg-black dark:bg-white
              text-white dark:text-black
              text-sm font-medium
              rounded-lg
              hover:bg-zinc-800 dark:hover:bg-zinc-100
              transition-colors
              shrink-0
            "
          >
            <AppleIcon className="w-4 h-4" />
            Download Free
          </a>
        </div>
      </div>
    );
  }

  // Footer variant (default)
  return (
    <div
      className={`
        mt-12 p-6 md:p-8 rounded-2xl
        bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600
        ${className}
      `}
    >
      <div className="text-center">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
          Ready to level up your conversations?
        </h3>
        <p className="text-purple-100 mb-6 max-w-lg mx-auto">
          Poise is your AI dating coach for Feeld and the ENM community. Get
          personalized message suggestions that feel authentic to you.
        </p>
        <a
          href={APP_STORE_URL}
          onClick={handleClick}
          className="
            inline-flex items-center gap-3 px-6 py-3
            bg-white text-purple-900
            font-semibold
            rounded-xl
            hover:bg-zinc-100
            transition-colors
            shadow-lg
          "
        >
          <AppleIcon className="w-6 h-6" />
          <div className="text-left">
            <div className="text-xs opacity-75">Download on the</div>
            <div className="text-base font-semibold -mt-0.5">App Store</div>
          </div>
        </a>
      </div>
    </div>
  );
}

export { AppStoreCTA };
