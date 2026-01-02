import { Button } from "@/components/ui";
import { Container } from "@/components/layout";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-zinc-950">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-white to-white dark:from-purple-950/20 dark:via-zinc-950 dark:to-zinc-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-100/40 via-transparent to-transparent dark:from-purple-900/20" />

      <Container className="relative">
        <div className="flex flex-col items-center text-center py-20">
          {/* Large 404 Display */}
          <div className="mb-8">
            <span className="text-8xl sm:text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              404
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            Page Not Found
          </h1>

          {/* Subhead */}
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-md mb-10">
            The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Navigation Suggestions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
            <Button href="/" size="lg">
              Go Home
            </Button>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center gap-6 text-base">
            <a
              href="/feeld-guide"
              className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors"
            >
              Browse Guides
            </a>
            <span className="text-zinc-300 dark:text-zinc-700">|</span>
            <a
              href="/pricing"
              className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors"
            >
              View Pricing
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
