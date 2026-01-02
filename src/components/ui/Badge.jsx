/**
 * Badge component for trust badges and labels
 *
 * @param {Object} props - Component props
 * @param {'default' | 'success' | 'warning' | 'outline'} [props.variant='default'] - Badge style variant
 * @param {'sm' | 'md'} [props.size='md'] - Badge size
 * @param {React.ReactNode} [props.icon] - Optional icon to display on the left
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Badge content
 */
function Badge({
  variant = "default",
  size = "md",
  icon,
  className = "",
  children,
  ...props
}) {
  // Base styles for all badges
  const baseStyles = [
    "inline-flex items-center gap-1.5",
    "font-medium rounded-full",
    "whitespace-nowrap",
  ].join(" ");

  // Variant styles
  const variantStyles = {
    default: [
      "bg-zinc-100 dark:bg-zinc-800",
      "text-zinc-700 dark:text-zinc-300",
    ].join(" "),
    success: [
      "bg-emerald-100 dark:bg-emerald-900/30",
      "text-emerald-700 dark:text-emerald-400",
    ].join(" "),
    warning: [
      "bg-amber-100 dark:bg-amber-900/30",
      "text-amber-700 dark:text-amber-400",
    ].join(" "),
    outline: [
      "bg-transparent",
      "border border-zinc-300 dark:border-zinc-700",
      "text-zinc-700 dark:text-zinc-300",
    ].join(" "),
  };

  // Size styles
  const sizeStyles = {
    sm: "text-xs px-2.5 py-1",
    md: "text-sm px-3 py-1.5",
  };

  // Icon size styles
  const iconSizeStyles = {
    sm: "w-3.5 h-3.5",
    md: "w-4 h-4",
  };

  const combinedClassName = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={combinedClassName} {...props}>
      {icon && (
        <span className={`flex-shrink-0 ${iconSizeStyles[size]}`}>
          {icon}
        </span>
      )}
      {children}
    </span>
  );
}

export { Badge };
