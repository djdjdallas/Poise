"use client";

import { forwardRef } from "react";

/**
 * Button component with multiple variants and sizes
 *
 * @param {Object} props - Component props
 * @param {'primary' | 'secondary' | 'ghost'} [props.variant='primary'] - Button style variant
 * @param {'sm' | 'md' | 'lg'} [props.size='md'] - Button size
 * @param {string} [props.href] - If provided, renders as an anchor tag
 * @param {boolean} [props.disabled] - Disables the button
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Button content
 * @param {React.Ref} ref - Forwarded ref
 */
const Button = forwardRef(function Button(
  {
    variant = "primary",
    size = "md",
    href,
    disabled = false,
    className = "",
    children,
    ...props
  },
  ref
) {
  // Base styles for all buttons
  const baseStyles = [
    "inline-flex items-center justify-center gap-2",
    "font-medium rounded-full",
    "transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
  ].join(" ");

  // Variant styles
  const variantStyles = {
    primary: [
      "bg-gradient-to-r from-purple-600 to-pink-600",
      "text-white",
      "hover:from-purple-700 hover:to-pink-700",
      "focus:ring-purple-500",
      "shadow-lg shadow-purple-500/25",
      "hover:shadow-xl hover:shadow-purple-500/30",
    ].join(" "),
    secondary: [
      "border-2 border-zinc-300 dark:border-zinc-700",
      "bg-transparent",
      "text-zinc-900 dark:text-zinc-100",
      "hover:bg-zinc-100 dark:hover:bg-zinc-800",
      "focus:ring-zinc-500",
    ].join(" "),
    ghost: [
      "bg-transparent",
      "text-zinc-700 dark:text-zinc-300",
      "hover:bg-zinc-100 dark:hover:bg-zinc-800",
      "focus:ring-zinc-500",
    ].join(" "),
  };

  // Size styles
  const sizeStyles = {
    sm: "text-sm px-4 py-2 h-9",
    md: "text-base px-6 py-2.5 h-11",
    lg: "text-lg px-8 py-3 h-14",
  };

  const combinedClassName = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Render as anchor if href is provided
  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        className={combinedClassName}
        aria-disabled={disabled}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      disabled={disabled}
      className={combinedClassName}
      {...props}
    >
      {children}
    </button>
  );
});

export { Button };
