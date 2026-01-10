"use client";

import { Button } from "@/components/ui";
import posthog from "posthog-js";

/**
 * CTASection component displays a call-to-action block with headline, description, and buttons
 *
 * @param {Object} props - Component props
 * @param {string} props.headline - Main headline text
 * @param {string} [props.description] - Optional description text
 * @param {{text: string, href: string}} props.primaryCta - Primary CTA button config
 * @param {{text: string, href: string}} [props.secondaryCta] - Optional secondary CTA button config
 * @param {'default' | 'gradient' | 'dark'} [props.background='default'] - Background style variant
 */
function CTASection({
  headline,
  description,
  primaryCta,
  secondaryCta,
  background = "default",
}) {
  // Background styles
  const backgroundStyles = {
    default: "bg-white dark:bg-zinc-950",
    gradient: "bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600",
    dark: "bg-zinc-900 dark:bg-zinc-950",
  };

  // Text styles based on background
  const textStyles = {
    default: {
      headline: "text-zinc-900 dark:text-white",
      description: "text-zinc-600 dark:text-zinc-400",
    },
    gradient: {
      headline: "text-white",
      description: "text-purple-100",
    },
    dark: {
      headline: "text-white",
      description: "text-zinc-400",
    },
  };

  // Button variants based on background
  const primaryButtonVariant = background === "gradient" ? "secondary" : "primary";
  const secondaryButtonVariant = "ghost";

  // Secondary button styles for dark/gradient backgrounds
  const secondaryButtonStyles =
    background === "gradient" || background === "dark"
      ? "text-white hover:bg-white/10 dark:hover:bg-white/10"
      : "";

  return (
    <section
      className={`
        py-20 md:py-28 lg:py-32
        ${backgroundStyles[background]}
      `}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Large Headline */}
          <h2
            className={`
              text-3xl md:text-4xl lg:text-5xl font-bold
              ${textStyles[background].headline}
              mb-6
            `}
          >
            {headline}
          </h2>

          {/* Description */}
          {description && (
            <p
              className={`
                text-lg md:text-xl
                ${textStyles[background].description}
                mb-10
              `}
            >
              {description}
            </p>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryCta && (
              <Button
                variant={primaryButtonVariant}
                size="lg"
                href={primaryCta.href}
                className={
                  background === "gradient"
                    ? "!bg-white !text-purple-900 font-semibold hover:!bg-zinc-100 !border-0 shadow-lg"
                    : ""
                }
                onClick={() => {
                  posthog.capture("cta_download_clicked", {
                    cta_text: primaryCta.text,
                    cta_location: "cta_section_primary",
                    destination_url: primaryCta.href,
                    section_headline: headline,
                  });
                }}
              >
                {primaryCta.icon && (
                  <span className="mr-2 -ml-1">{primaryCta.icon}</span>
                )}
                {primaryCta.text}
              </Button>
            )}
            {secondaryCta && (
              <Button
                variant={secondaryButtonVariant}
                size="lg"
                href={secondaryCta.href}
                className={secondaryButtonStyles}
                onClick={() => {
                  posthog.capture("cta_download_clicked", {
                    cta_text: secondaryCta.text,
                    cta_location: "cta_section_secondary",
                    destination_url: secondaryCta.href,
                    section_headline: headline,
                  });
                }}
              >
                {secondaryCta.icon && (
                  <span className="mr-2 -ml-1">{secondaryCta.icon}</span>
                )}
                {secondaryCta.text}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export { CTASection };
