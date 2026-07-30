import { Card, CardHeader } from "@/components/ui/Card";
import { inventoryByCategory } from "@/data/warehouse";
import { MoreHorizontal } from "lucide-react";

const barVariants = [
  { base: "#6C5DD3", stripe: false },
  { base: "#6C5DD3", stripe: true },
  { base: "#1A1A1E", stripe: false },
  { base: "#1A1A1E", stripe: true },
  { base: "#6E6B74", stripe: false },
  { base: "#6E6B74", stripe: true },
];

const STRIPE_BG =
  "repeating-linear-gradient(135deg, rgba(255,255,255,.5) 0, rgba(255,255,255,.5) 1px, transparent 2px, transparent 12px)";

export function WarehouseInventoryCard() {
  const totalUnits = inventoryByCategory.reduce((s, c) => s + c.units, 0);
  const maxPercent = Math.max(...inventoryByCategory.map((c) => c.percent));

  return (
    <Card>
      <CardHeader title="Warehouse Inventory" action={<MoreHorizontal className="h-4 w-4 text-muted" />} />
      <p className="mb-6 text-2xl font-semibold text-ink sm:text-3xl">
        {totalUnits.toLocaleString()} <span className="text-sm font-normal text-muted">packages</span>
      </p>

      {/* Mobile: horizontal bar list */}
      <div className="flex flex-col divide-y divide-border/60 sm:hidden">
        {inventoryByCategory.map((category, index) => {
          const variant = barVariants[index] ?? barVariants[0];
          const widthPct = Math.max((category.percent / maxPercent) * 100, 15);
          const barStyle: React.CSSProperties = {
            width: `${widthPct}%`,
            backgroundColor: variant.base,
            ...(variant.stripe && { backgroundImage: STRIPE_BG }),
          };

          return (
            <div key={category.label} className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0">
              <div className="h-9 max-w-[45%] flex-1 rounded-lg" style={barStyle} />
              <div className="text-right">
                <p className="text-xs text-muted">{category.label}</p>
                <p className="text-sm font-semibold text-ink">
                  {category.percent}% · {category.units.toLocaleString()}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tablet/Desktop: vertical bar chart */}
      <div className="hidden grid-cols-3 gap-4 sm:grid sm:grid-cols-6">
        {inventoryByCategory.map((category, index) => {
          const variant = barVariants[index] ?? barVariants[0];
          const height = Math.max(category.percent * 1.4, 20);
          const fillStyle: React.CSSProperties = {
            height: `${height}px`,
            backgroundColor: variant.base,
            borderRadius: "8px",
            width: "100%",
            transition: "height 0.25s ease",
            ...(variant.stripe && { backgroundImage: STRIPE_BG }),
          };

          return (
            <div
              key={category.label}
              className="relative flex flex-col items-center border-r border-dashed border-border/30 last:border-none"
            >
              <div className="mb-3 flex h-36 w-full items-end overflow-hidden rounded-xl bg-surface px-1 py-2">
                <div className="w-full rounded-xl" style={fillStyle} />
              </div>
              <p className="text-center text-[11px] font-semibold leading-tight text-ink">{category.label}</p>
              <p className="text-[11px] text-muted">
                <span className="font-semibold text-ink">{category.percent}%</span> · {category.units.toLocaleString()}
              </p>
            </div>
          );
        })}
      </div>
    </Card>
  );
}