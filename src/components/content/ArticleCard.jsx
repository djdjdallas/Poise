import Link from "next/link";
import { Card, Badge } from "@/components/ui";

/**
 * ArticleCard component for listing articles on hub pages
 *
 * @param {Object} props - Component props
 * @param {string} props.title - Article title
 * @param {string} props.description - Article description
 * @param {string} props.href - Link to the article
 * @param {string} [props.category] - Optional category for badge display
 * @param {string} [props.readTime] - Optional read time, e.g., "5 min read"
 * @param {string} [props.className] - Additional CSS classes
 */
function ArticleCard({
  title,
  description,
  href,
  category,
  readTime,
  className = "",
}) {
  return (
    <Card hover className={`group relative ${className}`}>
      <div className="flex flex-col gap-3">
        {/* Category badge and read time */}
        {(category || readTime) && (
          <div className="flex items-center gap-3">
            {category && (
              <Badge variant="default" size="sm">
                {category}
              </Badge>
            )}
            {readTime && (
              <span className="text-sm text-zinc-500 dark:text-zinc-400">
                {readTime}
              </span>
            )}
          </div>
        )}

        {/* Title as link */}
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
          <Link
            href={href}
            className="after:absolute after:inset-0 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            {title}
          </Link>
        </h3>

        {/* Description with line clamp */}
        <p className="text-zinc-600 dark:text-zinc-400 line-clamp-2">
          {description}
        </p>

        {/* Arrow icon that appears on hover */}
        <div className="flex items-center gap-1 text-purple-600 dark:text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-sm font-medium">Read more</span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </Card>
  );
}

export { ArticleCard };
