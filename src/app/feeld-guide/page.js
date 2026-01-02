import { HubPage } from "@/components/content";
import { allArticles } from "contentlayer/generated";

export const metadata = {
  title: "The Complete Feeld Playbook",
  description:
    "Everything you need to succeed on the internet's most interesting dating app. Feeld tips, bio examples, openers, and more.",
};

export default function FeeldGuidePage() {
  // Filter articles for this category
  const articles = allArticles.filter((a) => a.category === "feeld-guide");

  return (
    <HubPage
      title="The Complete Feeld Playbook"
      description="Everything You Need to Succeed on the Internet's Most Interesting Dating App"
      articles={articles}
    >
      <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl">
        Feeld isn't like other dating apps—and that's the point. Whether you're
        exploring ethical non-monogamy, looking for a third, or just tired of
        vanilla swiping, Feeld offers something different.
      </p>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mt-4">
        But "different" comes with a learning curve. This is your complete guide
        to Feeld—from setting up your profile to starting conversations that
        actually go somewhere.
      </p>
    </HubPage>
  );
}
