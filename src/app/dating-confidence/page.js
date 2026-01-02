import { HubPage } from "@/components/content";
import { allArticles } from "contentlayer/generated";

export const metadata = {
  title: "Build Dating Confidence That Lasts",
  description:
    "Overcome anxiety, rejection fear, and self-doubt. Practical strategies for the psychological side of dating.",
};

export default function DatingConfidencePage() {
  // Filter articles for this category
  const articles = allArticles.filter((a) => a.category === "dating-confidence");

  return (
    <HubPage
      title="Build Dating Confidence That Lasts"
      description="Overcome Anxiety, Rejection Fear, and Self-Doubt"
      articles={articles}
    >
      <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl">
        The hardest part of dating isn't finding matches—it's feeling confident
        enough to message them. Dating confidence isn't about becoming someone
        you're not. It's about understanding your anxiety, building skills that
        feel authentic, and learning to take action despite fear. This section
        is your toolkit for the psychological side of dating.
      </p>
    </HubPage>
  );
}
