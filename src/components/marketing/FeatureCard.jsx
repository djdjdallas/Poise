import { Card } from "@/components/ui";

/**
 * Feature card component for displaying individual features
 *
 * @param {Object} props - Component props
 * @param {string | React.ReactNode} props.icon - Icon emoji or JSX element
 * @param {string} props.title - Feature title
 * @param {string} props.description - Feature description
 * @param {string} [props.className] - Additional CSS classes
 */
function FeatureCard({ icon, title, description, className = "" }) {
  return (
    <Card hover padding="lg" className={className}>
      {/* Icon with subtle background circle */}
      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
        <span className="text-2xl">{icon}</span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">{description}</p>
    </Card>
  );
}

export { FeatureCard };
