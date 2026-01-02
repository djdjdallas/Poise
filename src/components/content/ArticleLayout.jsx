import Link from "next/link";
import { Badge } from "@/components/ui";
import { Container } from "@/components/layout";

/**
 * ArticleLayout component - MDX article wrapper
 *
 * @param {Object} props - Component props
 * @param {string} props.title - Article title
 * @param {string} props.description - Article description/excerpt
 * @param {string} props.publishedAt - Publication date string
 * @param {string} [props.author] - Optional author name
 * @param {React.ReactNode} props.children - MDX content
 * @param {string} props.category - Article category
 * @param {{ text: string, href: string }} props.backLink - Navigation back to hub
 */
function ArticleLayout({
  title,
  description,
  publishedAt,
  author,
  children,
  category,
  backLink,
}) {
  // Format the date for display
  const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="py-12 md:py-16 lg:py-20">
      <Container>
        {/* Back link */}
        {backLink && (
          <div className="mb-8">
            <Link
              href={backLink.href}
              className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              {backLink.text}
            </Link>
          </div>
        )}

        {/* Article header */}
        <header className="max-w-3xl mb-10 md:mb-12">
          {/* Category badge */}
          {category && (
            <div className="mb-4">
              <Badge variant="default">{category}</Badge>
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white mb-4 md:mb-6">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-6">
              {description}
            </p>
          )}

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400 border-t border-zinc-200 dark:border-zinc-800 pt-6">
            <time dateTime={publishedAt}>{formattedDate}</time>
            {author && (
              <>
                <span className="w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                <span>By {author}</span>
              </>
            )}
          </div>
        </header>

        {/* Article content with prose styling */}
        <div className="max-w-3xl">
          <div
            className={[
              "prose prose-zinc dark:prose-invert",
              "prose-lg",
              "prose-headings:font-semibold",
              "prose-headings:text-zinc-900 dark:prose-headings:text-white",
              "prose-a:text-purple-600 dark:prose-a:text-purple-400",
              "prose-a:no-underline hover:prose-a:underline",
              "prose-img:rounded-xl",
              "prose-code:text-purple-600 dark:prose-code:text-purple-400",
              "prose-code:before:content-none prose-code:after:content-none",
              "prose-pre:bg-zinc-900 dark:prose-pre:bg-zinc-800",
              "prose-blockquote:border-purple-500",
              "max-w-none",
            ].join(" ")}
          >
            {children}
          </div>
        </div>
      </Container>
    </article>
  );
}

export { ArticleLayout };
