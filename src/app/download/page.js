import { Badge } from "@/components/ui";
import { Container } from "@/components/layout";
import DownloadButtons from "./DownloadButtons";

export const metadata = {
  title: "Download",
  description:
    "Download Poise for iOS and start having better dating conversations today. Your data stays on your device.",
};

export default function DownloadPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-zinc-950">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-white to-white dark:from-purple-950/20 dark:via-zinc-950 dark:to-zinc-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-100/40 via-transparent to-transparent dark:from-purple-900/20" />

      <Container className="relative">
        <div className="flex flex-col items-center text-center py-20">
          {/* App Icon Placeholder */}
          <div className="w-24 h-24 mb-8 rounded-3xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-xl shadow-purple-500/25">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
              />
            </svg>
          </div>

          {/* Header */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4">
            <span className="bg-gradient-to-r from-zinc-900 via-purple-800 to-pink-700 dark:from-white dark:via-purple-300 dark:to-pink-300 bg-clip-text text-transparent">
              Download Poise
            </span>
          </h1>

          {/* Subhead */}
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-10">
            Available on iOS. Android coming soon.
          </p>

          {/* Buttons */}
          <DownloadButtons />

          {/* Trust Badge */}
          <Badge
            variant="success"
            size="md"
            icon={
              <svg
                className="w-full h-full"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            }
          >
            All processing happens on your device. We never see your
            conversations.
          </Badge>
        </div>
      </Container>
    </main>
  );
}
