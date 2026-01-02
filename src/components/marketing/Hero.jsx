import { Button } from "@/components/ui";
import { Container } from "@/components/layout";

/**
 * Hero section component for landing pages
 *
 * @param {Object} props - Component props
 * @param {string} props.headline - Main headline text
 * @param {string} props.subheadline - Supporting subheadline text
 * @param {{ text: string, href: string }} props.primaryCta - Primary call-to-action button
 * @param {{ text: string, href: string }} [props.secondaryCta] - Optional secondary call-to-action button
 * @param {string} [props.trustBadge] - Optional trust badge text (displays with lock icon)
 * @param {React.ReactNode} [props.children] - Optional additional content
 */
function Hero({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  trustBadge,
  children,
}) {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-zinc-950">
      {/* Background gradient/pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-white to-white dark:from-purple-950/20 dark:via-zinc-950 dark:to-zinc-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-100/40 via-transparent to-transparent dark:from-purple-900/20" />

      <Container className="relative">
        <div className="flex flex-col items-center py-24 md:py-32 lg:py-40 text-center">
          {/* Headline */}
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-zinc-900 via-purple-800 to-pink-700 dark:from-white dark:via-purple-300 dark:to-pink-300 bg-clip-text text-transparent">
              {headline}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 sm:text-xl md:text-2xl">
            {subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Button href={primaryCta.href} size="lg">
              {primaryCta.text}
            </Button>
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="secondary" size="lg">
                {secondaryCta.text}
              </Button>
            )}
          </div>

          {/* Trust Badge */}
          {trustBadge && (
            <div className="mt-8 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
              <svg
                className="h-4 w-4"
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
              <span>{trustBadge}</span>
            </div>
          )}

          {/* Optional additional content */}
          {children && <div className="mt-12 w-full">{children}</div>}
        </div>
      </Container>
    </section>
  );
}

export { Hero };
