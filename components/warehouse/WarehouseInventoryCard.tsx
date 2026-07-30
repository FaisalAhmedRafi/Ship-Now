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

export function WarehouseInventoryCard() {
  const totalUnits = inventoryByCategory.reduce((s, c) => s + c.units, 0);

  return (
    <Card>
      <CardHeader title="Warehouse Inventory" action={<MoreHorizontal className="h-4 w-4 text-muted" />} />
      <p className="mb-6 text-3xl font-semibold text-ink">
        {totalUnits.toLocaleString()} <span className="text-sm font-normal text-muted">packages</span>
      </p>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
        {inventoryByCategory.map((category, index) => {
          const variant = barVariants[index] ?? barVariants[0];
          const height = Math.max(category.percent * 1.4, 20);
          const fillStyle: React.CSSProperties = {
            height: `${height}px`,
            backgroundColor: variant.base,
            borderRadius: "8px",
            width: "100%",
            transition: "height 0.25s ease",
          };

          if (variant.stripe) {
            fillStyle.backgroundImage =
              "repeating-linear-gradient(135deg, rgba(255,255,255,.5) 0, rgba(255,255,255,.5) 1px, transparent 2px, transparent 12px)";
          }

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