import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Poise - AI Dating Coach for Feeld & ENM",
    template: "%s | Poise"
  },
  description: "The first AI conversation coach built specifically for Feeld, ethical non-monogamy, and the lifestyle community. Your conversations never leave your device.",
  keywords: ["AI dating coach", "Feeld", "ENM", "ethical non-monogamy", "dating app", "conversation coach", "polyamory"],
  openGraph: {
    title: "Poise - AI Dating Coach for Feeld & ENM",
    description: "The first AI conversation coach built specifically for Feeld, ethical non-monogamy, and the lifestyle community.",
    url: "https://poise.app",
    siteName: "Poise",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Poise - AI Dating Coach for Feeld & ENM",
    description: "The first AI conversation coach built specifically for Feeld, ethical non-monogamy, and the lifestyle community.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
