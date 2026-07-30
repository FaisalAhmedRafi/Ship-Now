import { Card, CardHeader } from "@/components/ui/Card";
import { warehouseStorage } from "@/data/warehouse";
import { Filter, ChevronDown, ChevronsUpDown, ArrowUpDown } from "lucide-react";

export function WarehouseStorageTable() {
  return (
    <Card>
      <CardHeader
        title="Warehouse Storage"
        action={
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs bg-muted/10 text-ink">
              <Filter className="h-3.5 w-3.5" /> Filter <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <label className="text-xs font-medium text-muted">Sort by:</label>
            <button className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs bg-muted/10 text-ink">
               <span className="font-medium text-ink">Section</span> <ChevronDown className="h-3.5 w-3.5" />
            </button>
          </div>
        }
      />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead>
            <tr className="border-b border-border text-xs text-muted">
              {["Floor", "Section", "Category", "Storage Used", "Percentage", "Available Space"].map((h) => (
                <th key={h} className="py-2 pr-3 font-medium">
                  <span className="flex items-center gap-1">
                    {h} <ChevronsUpDown className="h-3 w-3" />
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {warehouseStorage.map((row) => (
              <tr key={row.section} className="border-b border-border/60 last:border-0">
                <td className="py-3 pr-3 text-ink">{row.floor}</td>
                <td className="py-3 pr-3 text-ink">{row.section}</td>
                <td className="py-3 pr-3 text-muted">{row.category}</td>
                <td className="py-3 pr-3">
                  <div className="h-3 w-28 rounded-[3px] bg-surface">
                    <div className="h-3 rounded-[3px] bg-brand" style={{ width: `${row.percent}%` }} />
                  </div>
                </td>
                <td className="py-3 pr-3 font-semibold text-ink">{row.percent}%</td>
                <td className="py-3 pr-3 text-muted"><span className="font-semibold text-ink">{row.available}</span>/100</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}