/**
 * AppSchema component - JSON-LD structured data for the iOS app
 * Follows SoftwareApplication schema from schema.org
 */
export default function AppSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Poise - AI Dating Coach",
    "applicationCategory": "LifestyleApplication",
    "operatingSystem": "iOS",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "downloadUrl": "https://apps.apple.com/us/app/poise-app/id6757319090",
    "installUrl": "https://apps.apple.com/us/app/poise-app/id6757319090",
    "author": {
      "@type": "Organization",
      "name": "Poise",
      "url": "https://trypoise.app"
    },
    "description": "AI dating coach for Feeld and the ENM community. Get personalized conversation suggestions that feel authentic to you.",
    "screenshot": "https://trypoise.app/og-image.png",
    "softwareVersion": "1.0",
    "datePublished": "2026-01-01",
    "inLanguage": "en",
    "keywords": "AI dating coach, Feeld, ENM, ethical non-monogamy, dating app, conversation coach, polyamory"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
