# ShipNow — Trends Bird Frontend Intern Assignment

A logistics/shipping management dashboard built from the SHIP_NOW Figma design, submitted
for the Trends Bird Limited Frontend Developer Intern recruitment assignment.

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for styling, with a small custom design-token palette in `tailwind.config.ts`
- **Recharts** for all charts (bar, grouped bar, donut) — no static chart images
- **lucide-react** for icons

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

The app redirects `/` → `/login`. Logging in with any valid-looking email/password
(8+ characters) simulates a session (stored in `localStorage`) and redirects to `/dashboard`.
There is no real backend — this is a static-data frontend build, as scoped by the assignment.

## Screen status

| Screen | Status | Notes |
|---|---|---|
| Login | **Complete** | Split-screen layout, full client-side validation, show/hide password, simulated session |
| Dashboard | **Complete** | Metric cards, 2 real charts (Shipment Statistic, Profit Summary), donut chart, product categories, live tracking panel, alerts, activity feed, searchable recent shipments table |
| Shipments (Table + Grid) | **Complete** | Single `/shipments` route, view toggle, status tabs, search, sort, pagination with page-size control |
| Create New Shipment | **Complete** | Full form across Sender/Recipient/Package/Shipping sections, real inline validation matching the Figma error states, simulated submit |
| Invoices & Billing | **Complete** | Master-detail layout; selecting a row updates the detail panel; totals (sub-total/tax/fee/total) are calculated from line items, not hard-coded |
| Warehouse | **Complete** | Inventory bars, capacity donut, storage table, package status tabs, floor map with tab switcher, activity log |
| Analytics, Calendar, Tracking, Fleets, Drivers, Message, Notification, Settings | **Not attempted (placeholder)** | These nav items had no corresponding screen in the assignment's 7 screens, so they render a clearly labeled "not implemented" placeholder rather than a broken link |

## Responsive behavior

- **Desktop (≥1024px):** full sidebar with labels, multi-column layouts as in the Figma desktop frames
- **Tablet (768–1023px):** sidebar collapses to an icon-only rail; content reflows to fewer columns
- **Mobile (<768px):** sidebar becomes a hamburger-triggered slide-in drawer with a sticky top bar; all grids collapse to a single column; tables scroll horizontally within their card rather than breaking the page layout

I did not have Figma exports for the tablet/mobile frames (only the 7 desktop screens were
uploaded), so these breakpoints were implemented from the written breakpoint spec rather than
pixel-matched — worth double-checking against the actual Figma tablet/mobile frames before
you submit, if design accuracy there is graded closely.

## Known assumptions / deviations (please review before submitting)

1. **Fonts:** This sandbox couldn't reach Google Fonts, so the app currently uses a
   system-font stack (`-apple-system, Segoe UI, Roboto...`) instead of a specific
   webfont from the Figma file. It looks clean, but if the Figma design specifies a
   particular typeface, swap it in via `next/font/google` in `app/layout.tsx` — that
   will work fine once you're building outside this sandboxed environment.
2. **Colors:** Palette values (brand purple `#6C5DD3`, ink `#1A1A1E`, etc., in
   `tailwind.config.ts`) were sampled visually from your screenshots, not read from
   Figma's inspect panel. Recommend spot-checking a few against Figma's exact hex values.
3. **Login hero image:** The two photographic images in the Figma login screen were
   replaced with a placeholder SVG illustration — image search wasn't returning results
   in this session. Swap in your own photos before submitting (the assignment explicitly
   allows substituting photographic assets).
4. **Shipments status tabs:** The Table view and Grid view mockups used slightly different
   tab labels for the same underlying statuses. I standardized on one consistent set
   (All / In Transit / Out for Delivery / Delivered / Processing) across both views.
5. **Dataset size:** `data/shipments.ts` seeds the exact records visible in your
   screenshots, then generates additional synthetic records so pagination has something
   real to page through. Totals/labels are illustrative, not meant to reconcile exactly
   to the KPI numbers shown in the design.
6. **No backend:** Login, shipment creation, and invoice actions (Edit/Hold/Send) are all
   simulated client-side per the assignment's scope — nothing is persisted server-side.

## Project structure

```
app/
  login/                    # public login route
  (dashboard)/               # shared shell (sidebar, mobile nav, footer)
    dashboard/
    shipments/
    create-shipment/
    invoices/
    warehouse/
    analytics/ calendar/ tracking/ fleets/ drivers/   # placeholders
    messages/ notifications/ settings/                # placeholders
components/
  ui/            # Button, Card, Badge, Input, Pagination, Logo
  layout/        # Sidebar, MobileChrome, Footer, ComingSoon
  dashboard/     # chart + panel components used on the dashboard
  login/         # HeroIllustration
data/            # mock data: shipments.ts, dashboard.ts, invoices.ts, warehouse.ts
lib/utils.ts     # cn(), currency formatters
```

## AI assistance disclosure

This project was built with Claude as a coding assistant, per the assignment's explicit
permission to use AI tools. I reviewed and understand the structure and logic in this
codebase and can walk through any part of it.
# Ship-Now
