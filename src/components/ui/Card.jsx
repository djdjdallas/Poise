/**
 * Card component for content containers
 *
 * @param {Object} props - Component props
 * @param {boolean} [props.hover=false] - Enable hover effects (lift and shadow)
 * @param {'none' | 'sm' | 'md' | 'lg'} [props.padding='md'] - Padding variant
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Card content
 */
function Card({
  hover = false,
  padding = "md",
  className = "",
  children,
  ...props
}) {
  // Base styles for all cards
  const baseStyles = [
    "rounded-2xl",
    "bg-white dark:bg-zinc-900",
    "border border-zinc-200 dark:border-zinc-800",
    "shadow-sm",
  ].join(" ");

  // Hover styles
  const hoverStyles = hover
    ? [
        "transition-all duration-300",
        "hover:shadow-lg hover:shadow-zinc-200/50 dark:hover:shadow-zinc-900/50",
        "hover:-translate-y-1",
      ].join(" ")
    : "";

  // Padding styles
  const paddingStyles = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const combinedClassName = [
    baseStyles,
    hoverStyles,
    paddingStyles[padding],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={combinedClassName} {...props}>
      {children}
    </div>
  );
}

export { Card };
