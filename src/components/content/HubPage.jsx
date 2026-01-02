"use client";

import { useState } from "react";
import { Section, Badge } from "@/components/ui";
import { Container } from "@/components/layout";
import { ArticleCard } from "./ArticleCard";

/**
 * HubPage component - Template for pillar landing pages
 *
 * @param {Object} props - Component props
 * @param {string} props.title - Hub page title
 * @param {string} props.description - Hub page description
 * @param {Array} props.articles - Array of articles from Contentlayer
 * @param {Array<{ slug: string, name: string }>} [props.categories] - Optional category filters
 * @param {React.ReactNode} [props.children] - Optional intro content
 */
function HubPage({
  title,
  description,
  articles = [],
  categories,
  children,
}) {
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter articles by category
  const filteredArticles =
    activeCategory === "all"
      ? articles
      : articles.filter(
          (article) =>
            article.category?.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <div>
      {/* Hero header */}
      <Section background="gradient" className="py-12 md:py-16 lg:py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        </div>
      </Section>

      {/* Optional intro content */}
      {children && (
        <Section background="default" className="py-8 md:py-12">
          <div className="max-w-3xl">{children}</div>
        </Section>
      )}

      {/* Category filters */}
      {categories && categories.length > 0 && (
        <div className="bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-10">
          <Container>
            <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
              <button
                onClick={() => setActiveCategory("all")}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap
                  ${
                    activeCategory === "all"
                      ? "bg-purple-600 text-white"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                  }
                `}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category.slug}
                  onClick={() => setActiveCategory(category.slug)}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap
                    ${
                      activeCategory === category.slug
                        ? "bg-purple-600 text-white"
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                    }
                  `}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </Container>
        </div>
      )}

      {/* Articles grid */}
      <Section background="default" className="py-12 md:py-16">
        {filteredArticles.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <ArticleCard
                key={article._id || article.slug}
                title={article.title}
                description={article.description || article.excerpt}
                href={article.url || article.slug}
                category={article.category}
                readTime={article.readTime || article.readingTime?.text}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-zinc-500 dark:text-zinc-400">
              No articles found in this category.
            </p>
          </div>
        )}
      </Section>
    </div>
  );
}

export { HubPage };
