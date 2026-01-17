import { allArticles } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { ArticleLayout, MDXContent } from "@/components/content";

export async function generateStaticParams() {
  return allArticles
    .filter((article) => article.category === "authentic-connection")
    .map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = allArticles.find(
    (a) => a.category === "authentic-connection" && a.slug === slug
  );
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `/authentic-connection/${slug}`,
    },
  };
}

export default async function AuthenticConnectionArticle({ params }) {
  const { slug } = await params;
  const article = allArticles.find(
    (a) => a.category === "authentic-connection" && a.slug === slug
  );

  if (!article) notFound();

  return (
    <ArticleLayout
      title={article.title}
      description={article.description}
      publishedAt={article.publishedAt}
      author={article.author}
      category="Authentic Connection"
      backLink={{ text: "Back to Authentic Connection", href: "/authentic-connection" }}
    >
      <MDXContent content={article.body.raw} />
    </ArticleLayout>
  );
}
