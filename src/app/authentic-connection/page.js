import { HubPage } from "@/components/content";
import { allArticles } from "contentlayer/generated";

export const metadata = {
  title: "Authentic Connection > Pickup Lines",
  description:
    "Dating advice that doesn't make you cringe. Build genuine connections without manipulation tactics.",
};

export default function AuthenticConnectionPage() {
  // Filter articles for this category
  const articles = allArticles.filter(
    (a) => a.category === "authentic-connection"
  );

  return (
    <HubPage
      title="Authentic Connection > Pickup Lines"
      description="Dating Advice That Doesn't Make You Cringe"
      articles={articles}
    >
      <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl">
        The internet is full of "Rizz" tips and manipulation tactics. Here's the
        thing: most of that advice doesn't work—and when it does, it attracts
        people you don't actually want. This section is for people who want to
        date authentically. Who want connections based on who they actually are,
        not who they're pretending to be.
      </p>
    </HubPage>
  );
}
