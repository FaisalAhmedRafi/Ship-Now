# ShipNow

A logistics and shipping management dashboard built with **Next.js 14 (App Router)** and **TypeScript**, based on the SHIP_NOW Figma design.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8)

---

## Tech Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** — styling, with a custom design-token palette in `tailwind.config.ts`
- **Recharts** — all charts (bar, grouped bar, donut/pie) rendered live from data, not static images
- **lucide-react** — icon set

## Getting Started

```bash
npm install
npm run dev     # starts the dev server at http://localhost:3000
npm run build   # production build
npm run start   # run the production build
```

The app redirects `/` → `/login`. Logging in with any valid-looking email and an 8+ character
password simulates a session (stored in `localStorage`) and redirects to `/dashboard`. There is
no real backend — this is a static-data frontend build.

## Screens

| Screen | Description |
|---|---|
| **Login** | Split-screen layout with client-side validation, show/hide password toggle, and simulated session |
| **Dashboard** | Metric cards, shipment statistic & profit summary charts, donut chart, product categories, live tracking panel, alerts, activity feed, and a searchable recent shipments table |
| **Shipments** | Table and grid views with a toggle, status filter tabs, search, sortable columns, and pagination with page-size control |
| **Create Shipment** | Multi-section form (Sender / Recipient / Package / Shipping) with inline validation and simulated submit |
| **Invoices & Billing** | Master–detail layout — selecting an invoice updates the detail panel; totals (sub-total, tax, fee, total) are calculated from line items |
| **Warehouse** | Inventory breakdown, capacity usage donut, storage table, package status tabs, floor map, and activity log |

Other sidebar items (Analytics, Calendar, Tracking, Fleets, Drivers, Messages, Notifications,
Settings) render a placeholder screen, as they weren't part of the original design scope.

## Responsive Behavior

- **Desktop (≥1024px):** full sidebar with labels, multi-column layouts
- **Tablet (768–1023px):** sidebar collapses to an icon-only rail; content reflows to fewer columns
- **Mobile (<768px):** sidebar becomes a hamburger-triggered slide-in drawer with a sticky top bar; grids collapse to a single column; wide tables scroll horizontally within their card

## Project Structure

```
app/
  login/                     # public login route
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
  layout/        # Sidebar, MobileChrome, Footer
  dashboard/     # chart + panel components used on the dashboard
  invoices/      # InvoiceTable, InvoiceDetailsPanel, InvoiceSummaryCards
  warehouse/     # Warehouse-specific cards and widgets
  shipments/     # CompanyLogo, shipment table/grid components
  login/         # HeroIllustration
data/            # mock data: shipments.ts, dashboard.ts, invoices.ts, warehouse.ts
lib/
  utils.ts       # cn(), currency formatters
```

## Notes & Assumptions

- **Fonts / colors:** Palette values (brand purple, ink, surface, etc.) live in `tailwind.config.ts` and were sampled from the design screenshots — worth spot-checking against the source Figma file for exact values.
- **No backend:** Login, shipment creation, and invoice actions (Edit / Hold / Send) are all simulated client-side; nothing is persisted server-side.
- **Dataset:** `data/*.ts` seeds representative records so tables, pagination, and totals have real data to work with; figures are illustrative.

## AI Assistance Disclosure

Parts of this project were built with Claude as a coding assistant.

## License

No license specified.
