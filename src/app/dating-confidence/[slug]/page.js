import { allArticles } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { ArticleLayout, MDXContent } from "@/components/content";
import AppSchema from "@/components/seo/AppSchema";

export async function generateStaticParams() {
  return allArticles
    .filter((article) => article.category === "dating-confidence")
    .map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = allArticles.find(
    (a) => a.category === "dating-confidence" && a.slug === slug
  );
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `/dating-confidence/${slug}`,
    },
  };
}

export default async function DatingConfidenceArticle({ params }) {
  const { slug } = await params;
  const article = allArticles.find(
    (a) => a.category === "dating-confidence" && a.slug === slug
  );

  if (!article) notFound();

  return (
    <>
      <AppSchema />
      <ArticleLayout
        title={article.title}
        description={article.description}
        publishedAt={article.publishedAt}
        author={article.author}
        category="Dating Confidence"
        backLink={{ text: "Back to Dating Confidence", href: "/dating-confidence" }}
        slug={slug}
      >
        <MDXContent content={article.body.raw} />
      </ArticleLayout>
    </>
  );
}
