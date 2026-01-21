import { allArticles } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { ArticleLayout, MDXContent } from "@/components/content";
import AppSchema from "@/components/seo/AppSchema";

export async function generateStaticParams() {
  return allArticles
    .filter((article) => article.category === "enm-communication")
    .map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = allArticles.find(
    (a) => a.category === "enm-communication" && a.slug === slug
  );
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `/enm-communication/${slug}`,
    },
  };
}

export default async function ENMCommunicationArticle({ params }) {
  const { slug } = await params;
  const article = allArticles.find(
    (a) => a.category === "enm-communication" && a.slug === slug
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
        category="ENM Communication"
        backLink={{ text: "Back to ENM Communication", href: "/enm-communication" }}
        slug={slug}
      >
        <MDXContent content={article.body.raw} />
      </ArticleLayout>
    </>
  );
}
