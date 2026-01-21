import { allArticles } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { ArticleLayout, MDXContent } from "@/components/content";
import FAQSchema, { articleFAQs } from "@/components/seo/FAQSchema";
import AppSchema from "@/components/seo/AppSchema";

export async function generateStaticParams() {
  return allArticles
    .filter((article) => article.category === "kink-community")
    .map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = allArticles.find(
    (a) => a.category === "kink-community" && a.slug === slug
  );
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `/kink-community/${slug}`,
    },
  };
}

export default async function KinkCommunityArticle({ params }) {
  const { slug } = await params;
  const article = allArticles.find(
    (a) => a.category === "kink-community" && a.slug === slug
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
        category="Kink Community"
        backLink={{ text: "Back to Kink Community", href: "/kink-community" }}
        slug={slug}
      >
        <MDXContent content={article.body.raw} />
      </ArticleLayout>
    </>
  );
}
