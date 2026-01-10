# PostHog post-wizard report

The wizard has completed a deep integration of your Poise Next.js marketing website. PostHog has been configured with client-side initialization using the `instrumentation-client.js` approach (recommended for Next.js 15.3+), server-side tracking support via `posthog-node`, and environment variables properly configured with the `NEXT_PUBLIC_` prefix for client-side access.

The integration includes:
- **Automatic pageview and session tracking** via PostHog's default configuration
- **Error tracking** with `capture_exceptions: true` for automatic exception capture
- **User identification** on newsletter signup (email-based)
- **14 custom events** tracking key conversion and engagement actions across the site

## Events Implemented

| Event Name | Description | File(s) |
|------------|-------------|---------|
| `cta_download_clicked` | User clicks any download CTA button (primary conversion event) | `src/components/marketing/Hero.jsx`, `src/components/marketing/CTASection.jsx` |
| `pricing_tier_clicked` | User clicks a pricing tier CTA button (tracks tier details) | `src/components/marketing/PricingTable.jsx` |
| `app_store_link_clicked` | User clicks the App Store download link | `src/app/download/DownloadButtons.jsx` |
| `android_waitlist_clicked` | User clicks to join the Android waitlist (lead capture) | `src/app/download/DownloadButtons.jsx` |
| `bio_generation_submitted` | User submits the bio generator form | `src/app/tools/bio-generator/page.js` |
| `bio_generation_completed` | Bio generation API returns successfully | `src/app/tools/bio-generator/page.js` |
| `bio_copied` | User copies a generated bio to clipboard | `src/app/tools/bio-generator/page.js` |
| `opener_generation_submitted` | User submits the opener generator form | `src/app/tools/opener-generator/page.js` |
| `opener_generation_completed` | Opener generation API returns successfully | `src/app/tools/opener-generator/page.js` |
| `opener_copied` | User copies a generated opener to clipboard | `src/app/tools/opener-generator/page.js` |
| `newsletter_subscribed` | User submits the newsletter signup form (includes user identification) | `src/components/layout/NewsletterForm.jsx` |
| `faq_item_expanded` | User expands an FAQ item (engagement metric) | `src/app/faq/page.js` |
| `support_email_clicked` | User clicks support email link | `src/app/faq/page.js` |

## Files Created/Modified

### New Files
- `instrumentation-client.js` - Client-side PostHog initialization
- `src/lib/posthog-server.js` - Server-side PostHog client
- `src/app/download/DownloadButtons.jsx` - Client component for download page tracking
- `src/components/layout/NewsletterForm.jsx` - Client component for newsletter with user identification
- `.env` - Environment variables for PostHog configuration

### Modified Files
- `src/components/marketing/Hero.jsx` - Added CTA click tracking
- `src/components/marketing/CTASection.jsx` - Added CTA click tracking
- `src/components/marketing/PricingTable.jsx` - Added pricing tier click tracking
- `src/app/download/page.js` - Integrated DownloadButtons component
- `src/app/tools/bio-generator/page.js` - Added generation and copy tracking
- `src/app/tools/opener-generator/page.js` - Added generation and copy tracking
- `src/components/layout/Footer.jsx` - Integrated NewsletterForm component
- `src/app/faq/page.js` - Added FAQ expansion and support email tracking

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

### Dashboard
- [Analytics basics](https://us.posthog.com/project/277658/dashboard/970584) - Core analytics dashboard with all key metrics

### Insights
- [Download Conversion Trend](https://us.posthog.com/project/277658/insights/ZYaHAWB1) - Tracks download CTA and App Store link clicks over time
- [Tool Engagement Funnel](https://us.posthog.com/project/277658/insights/HvZhFKmu) - Bio and opener generator usage from submission to copy
- [Pricing Page Engagement](https://us.posthog.com/project/277658/insights/56DTIPUa) - Which pricing tiers users click on (pie chart breakdown)
- [Newsletter & Lead Capture](https://us.posthog.com/project/277658/insights/JexbskCM) - Newsletter subscriptions and Android waitlist sign-ups
- [Support & FAQ Engagement](https://us.posthog.com/project/277658/insights/lBX3q2ex) - FAQ item expansions and support email clicks

## Configuration

Environment variables are stored in `.env`:
```
NEXT_PUBLIC_POSTHOG_KEY=phc_vCkIysSwhoyCb9vFunDu1DakLe6I4rVGAdFxtner52I
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

Make sure to add these to your production environment (Vercel, Netlify, etc.) as well.
