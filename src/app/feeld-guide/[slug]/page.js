import { allArticles } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { ArticleLayout, MDXContent } from "@/components/content";
import FAQSchema, { articleFAQs } from "@/components/seo/FAQSchema";
import AppSchema from "@/components/seo/AppSchema";

export async function generateStaticParams() {
  return allArticles
    .filter((article) => article.category === "feeld-guide")
    .map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = allArticles.find(
    (a) => a.category === "feeld-guide" && a.slug === slug
  );
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `/feeld-guide/${slug}`,
    },
  };
}

export default async function FeeldGuideArticle({ params }) {
  const { slug } = await params;
  const article = allArticles.find(
    (a) => a.category === "feeld-guide" && a.slug === slug
  );

  if (!article) notFound();

  const faqs = articleFAQs[slug] || null;

  return (
    <>
      {faqs && <FAQSchema faqs={faqs} />}
      <AppSchema />
      <ArticleLayout
        title={article.title}
        description={article.description}
        publishedAt={article.publishedAt}
        author={article.author}
        category="Feeld Guide"
        backLink={{ text: "Back to Feeld Guide", href: "/feeld-guide" }}
        slug={slug}
      >
        <MDXContent content={article.body.raw} />
      </ArticleLayout>
    </>
  );
}
