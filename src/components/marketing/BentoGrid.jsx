"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Animated Bento Grid layout for feature showcases
 */
function BentoGrid({ children, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}
    >
      {children}
    </motion.div>
  );
}

/**
 * Individual Bento Grid item with hover animations
 */
function BentoItem({
  children,
  className = "",
  colSpan = 1,
  rowSpan = 1,
  index = 0,
  gradient = false,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const colSpanClasses = {
    1: "md:col-span-1",
    2: "md:col-span-2",
    3: "md:col-span-3",
    4: "md:col-span-4",
  };

  const rowSpanClasses = {
    1: "row-span-1",
    2: "row-span-2",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 30, scale: 0.95 }
      }
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      className={`
        relative overflow-hidden rounded-2xl p-6
        ${gradient
          ? "bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 text-white"
          : "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
        }
        ${colSpanClasses[colSpan]}
        ${rowSpanClasses[rowSpan]}
        ${className}
      `}
    >
      {/* Subtle gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

/**
 * Feature card designed for bento grid
 */
function BentoFeature({
  icon,
  title,
  description,
  index = 0,
  size = "default", // "default" | "large" | "highlight"
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const sizeConfig = {
    default: {
      colSpan: "md:col-span-1",
      iconSize: "w-12 h-12",
      titleSize: "text-lg",
      padding: "p-6",
    },
    large: {
      colSpan: "md:col-span-2",
      iconSize: "w-14 h-14",
      titleSize: "text-xl",
      padding: "p-8",
    },
    highlight: {
      colSpan: "md:col-span-2",
      iconSize: "w-14 h-14",
      titleSize: "text-xl",
      padding: "p-8",
    },
  };

  const config = sizeConfig[size];
  const isHighlight = size === "highlight";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 30, scale: 0.95 }
      }
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{
        scale: 1.02,
        y: -4,
        transition: { duration: 0.2 },
      }}
      className={`
        relative overflow-hidden rounded-2xl ${config.padding}
        ${config.colSpan}
        ${isHighlight
          ? "bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 text-white shadow-xl shadow-purple-500/25"
          : "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-purple-300 dark:hover:border-purple-700"
        }
        transition-colors duration-300
      `}
    >
      {/* Background pattern for highlight */}
      {isHighlight && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white_0%,transparent_50%)]" />
        </div>
      )}

      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className={`
            ${config.iconSize} mb-4 rounded-xl flex items-center justify-center text-2xl
            ${isHighlight
              ? "bg-white/20"
              : "bg-purple-100 dark:bg-purple-900/30"
            }
          `}
          whileHover={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>

        {/* Title */}
        <h3 className={`
          font-semibold mb-2 ${config.titleSize}
          ${isHighlight ? "text-white" : "text-zinc-900 dark:text-white"}
        `}>
          {title}
        </h3>

        {/* Description */}
        <p className={`
          text-sm leading-relaxed
          ${isHighlight ? "text-purple-100" : "text-zinc-600 dark:text-zinc-400"}
        `}>
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export { BentoGrid, BentoItem, BentoFeature };
