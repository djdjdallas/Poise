"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui";
import { Container } from "@/components/layout";

/**
 * Animated Hero section component for landing pages
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

      {/* Animated floating orbs */}
      <motion.div
        className="absolute top-20 left-[10%] w-72 h-72 bg-purple-300/30 dark:bg-purple-600/20 rounded-full blur-3xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-[10%] w-96 h-96 bg-pink-300/20 dark:bg-pink-600/10 rounded-full blur-3xl"
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Container className="relative">
        <div className="flex flex-col items-center py-24 md:py-32 lg:py-40 text-center">
          {/* Headline */}
          <motion.h1
            className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="bg-gradient-to-r from-zinc-900 via-purple-800 to-pink-700 dark:from-white dark:via-purple-300 dark:to-pink-300 bg-clip-text text-transparent">
              {headline}
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 sm:text-xl md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {subheadline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button href={primaryCta.href} size="lg">
                {primaryCta.icon && (
                  <span className="mr-2 -ml-1">{primaryCta.icon}</span>
                )}
                {primaryCta.text}
              </Button>
            </motion.div>
            {secondaryCta && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button href={secondaryCta.href} variant="secondary" size="lg">
                  {secondaryCta.icon && (
                    <span className="mr-2 -ml-1">{secondaryCta.icon}</span>
                  )}
                  {secondaryCta.text}
                </Button>
              </motion.div>
            )}
          </motion.div>

          {/* Trust Badge */}
          {trustBadge && (
            <motion.div
              className="mt-8 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
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
              </motion.div>
              <span>{trustBadge}</span>
            </motion.div>
          )}

          {/* Optional additional content */}
          {children && (
            <motion.div
              className="mt-12 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
}

export { Hero };
