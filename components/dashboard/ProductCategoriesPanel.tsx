import { Card, CardHeader } from "@/components/ui/Card";
import { productCategories } from "@/data/dashboard";
import { MoreHorizontal } from "lucide-react";

export function ProductCategoriesPanel() {
  const totalProducts = productCategories.reduce((s, d) => s + d.products, 0);
  const lastIndex = productCategories.length - 1;

  const getSegmentClass = (index: number) => {
    if (index === 0) return "h-full rounded-l-xl rounded-r-none";
    if (index === lastIndex) return "h-full rounded-l-none rounded-r-xl";
    return "h-full rounded-none";
  };

  return (
    <Card>
      <CardHeader title="Product Categories"
       action={
          <div className="flex items-center justify-center rounded-md bg-surface p-2">
            <MoreHorizontal className="h-4 w-4 text-muted" />
          </div>
        } 
       />
      <div className="mb-5 flex items-baseline justify-between">
        <span className="text-sm text-muted">Total Products</span>
        <span className="text-3xl font-bold text-ink">{totalProducts.toLocaleString()}</span>
      </div>
      <div className="mb-5 flex h-20 w-full gap-2">
        {productCategories.map((d, i) => (
          <span
            key={d.label}
            className={getSegmentClass(i)}
            style={{ width: `${d.percent}%`, backgroundColor: d.color }}
          />
        ))}
      </div>
      <ul className="space-y-3">
        {productCategories.map((d) => (
          <li key={d.label} className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 text-ink">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: d.color }} />
              {d.label}
            </span>
            <span className="flex items-center gap-2">
              <span className="rounded-md bg-surface px-2 py-1 text-xs text-muted">
                {d.products} products
              </span>
              <span className="w-9 text-right font-semibold text-ink">{d.percent}%</span>
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}