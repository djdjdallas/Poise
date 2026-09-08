# Affiliate URLs — Status Tracker

## ✅ LIVE (implemented in code)

| Placeholder (formerly) | Real URL | Where |
|---|---|---|
| `REPLACE_WITH_NORDVPN_LINK` | `https://go.nordvpn.net/aff_c?offer_id=15&aff_id=149995&url_id=902` | fetlife-privacy-settings (top + bottom) |
| `REPLACE_WITH_NORDPASS_LINK` (new) | `https://go.nordpass.io/aff_c?offer_id=488&aff_id=149995&url_id=9356` | fetlife-privacy-settings (mid) |
| `REPLACE_WITH_AMAZON_ETHICAL_SLUT_LINK` | `https://amzn.to/4iQAcFw` | feeld-bio-examples (bottom) |
| `REPLACE_WITH_AMAZON_MORETHANTWO_LINK` | `https://amzn.to/4hfhqq6` | feeld-openers (mid) |

## ⏳ PENDING (still placeholders in code)

| Placeholder | Program | Action needed |
|---|---|---|
| `REPLACE_WITH_LOVEHONEY_LINK` | Lovehoney (via Awin) | Waiting on Awin approval. Once approved, generate deep link and grep-replace in `feeld-bio-examples.mdx` and `feeld-openers.mdx`. |

## How the cards render

Articles are rendered with `react-markdown` from `body.raw`, not compiled MDX.
`src/components/content/MDXContent.jsx` parses `<AffiliateCard ... />` blocks out of
the raw source and renders `src/components/content/AffiliateCard.jsx` in their place.
Do **not** add `import` lines to the MDX files — they are not needed and would
break the Contentlayer build.

Every click fires a PostHog `affiliate_click` event with `partner`, `placement`, `url`, `page`.

## Amazon Associates critical reminder

You are in the 180-day trial window. You need **3 qualifying sales** from your links before Amazon does their final account review. Prioritize driving your first 3 sales — after that, the account is confirmed and the account termination risk from FetLife content review drops significantly.

## Backup affiliates if primary programs fail

- NordVPN backup → Surfshark (surfshark.com/affiliates)
- Lovehoney backup → Adam & Eve (affiliates.adameve.com), PinkCherry (via Refersion)
- Amazon backup for books → Bookshop.org (bookshop.org/affiliates) — much more permissive on ENM content
