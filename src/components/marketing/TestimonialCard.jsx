import { Card } from "@/components/ui";

/**
 * Testimonial card component for displaying user testimonials
 *
 * @param {Object} props - Component props
 * @param {string} props.quote - Testimonial quote text
 * @param {string} props.author - Author name
 * @param {string} props.details - Additional author details (e.g., "31 - Poly, Bay Area")
 * @param {string} [props.className] - Additional CSS classes
 */
function TestimonialCard({ quote, author, details, className = "" }) {
  return (
    <Card padding="lg" className={`relative ${className}`}>
      {/* Decorative quote mark */}
      <div className="absolute -top-2 left-6 text-6xl font-serif text-purple-200 dark:text-purple-800/50 select-none">
        "
      </div>

      {/* Quote text */}
      <blockquote className="relative pt-4">
        <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
          {quote}
        </p>
      </blockquote>

      {/* Author info */}
      <div className="mt-6 border-t border-zinc-100 dark:border-zinc-800 pt-4">
        <p className="font-semibold text-zinc-900 dark:text-zinc-100">
          {author}
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{details}</p>
      </div>
    </Card>
  );
}

export { TestimonialCard };
