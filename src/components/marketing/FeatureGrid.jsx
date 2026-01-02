import { FeatureCard } from "./FeatureCard";

/**
 * Grid layout component for displaying multiple feature cards
 *
 * @param {Object} props - Component props
 * @param {Array<{ icon: string | React.ReactNode, title: string, description: string }>} props.features - Array of feature objects
 * @param {number} [props.columns=4] - Number of columns on desktop (3 or 4)
 * @param {string} [props.className] - Additional CSS classes
 */
function FeatureGrid({ features, columns = 4, className = "" }) {
  // Determine grid columns class based on columns prop
  const gridColumnsClass =
    columns === 3
      ? "lg:grid-cols-3"
      : "lg:grid-cols-4";

  return (
    <div
      className={[
        "grid gap-6 md:gap-8",
        "grid-cols-1 sm:grid-cols-2",
        gridColumnsClass,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}

export { FeatureGrid };
