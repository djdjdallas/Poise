import { HubPage } from "@/components/content";
import { allArticles } from "contentlayer/generated";

export const metadata = {
  title: "Kink Community Guides",
  description:
    "Navigate FetLife, munches, kink negotiation, and BDSM dating with confidence. Safety-first guides for the kink-curious and experienced alike.",
};

export default function KinkCommunityPage() {
  // Filter articles for this category
  const articles = allArticles.filter((a) => a.category === "kink-community");

  return (
    <HubPage
      title="Kink Community Guides"
      description="Navigate FetLife, Munches, and BDSM Dating with Confidence"
      articles={articles}
    >
      <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl">
        Whether you're exploring FetLife for the first time, preparing for your
        first munch, or navigating complex kink dynamics with multiple partners,
        these guides help you do it safely and confidently.
      </p>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mt-4">
        Safety and consent come first. Every guide here is written with that
        foundation—because good kink starts with good communication.
      </p>
    </HubPage>
  );
}
