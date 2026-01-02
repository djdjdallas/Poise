import { HubPage } from "@/components/content";
import { allArticles } from "contentlayer/generated";

export const metadata = {
  title: "The ENM Communication Toolkit",
  description:
    "Navigate ethical non-monogamy with clarity and confidence. Scripts, frameworks, and strategies for the conversations that matter.",
};

export default function ENMCommunicationPage() {
  // Filter articles for this category
  const articles = allArticles.filter((a) => a.category === "enm-communication");

  return (
    <HubPage
      title="The ENM Communication Toolkit"
      description="Navigate Ethical Non-Monogamy with Clarity and Confidence"
      articles={articles}
    >
      <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl">
        Ethical non-monogamy isn't just about who you date—it's about how you
        communicate. The relationships that thrive in ENM are built on radical
        honesty, clear boundaries, and ongoing conversation. This toolkit gives
        you frameworks, scripts, and strategies for the conversations that
        matter most.
      </p>
    </HubPage>
  );
}
