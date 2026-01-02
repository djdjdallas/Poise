/**
 * Section component for consistent page sections
 *
 * @param {Object} props - Component props
 * @param {string} [props.id] - Section ID for navigation/anchoring
 * @param {'default' | 'muted' | 'dark' | 'gradient'} [props.background='default'] - Background color variant
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Section content
 */
function Section({
  id,
  background = "default",
  className = "",
  children,
  ...props
}) {
  // Base styles for all sections
  const baseStyles = [
    "py-16 md:py-24",
    "w-full",
  ].join(" ");

  // Background styles
  const backgroundStyles = {
    default: "bg-white dark:bg-zinc-950",
    muted: "bg-zinc-50 dark:bg-zinc-900",
    dark: "bg-zinc-900 dark:bg-black text-white",
    gradient: "bg-gradient-to-b from-purple-50 to-white dark:from-purple-950/20 dark:to-zinc-950",
  };

  const combinedClassName = [
    baseStyles,
    backgroundStyles[background],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={combinedClassName} {...props}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

export { Section };
