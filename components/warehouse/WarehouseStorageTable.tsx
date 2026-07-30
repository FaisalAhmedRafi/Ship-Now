import { Card, CardHeader } from "@/components/ui/Card";
import { warehouseStorage } from "@/data/warehouse";
import { Filter, ChevronDown, ChevronsUpDown } from "lucide-react";

export function WarehouseStorageTable() {
  return (
    <Card>
      <CardHeader
        title="Warehouse Storage"
        action={
          <div className="hidden items-center gap-2 sm:flex">
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
        <table className="w-full min-w-[360px] text-left text-sm sm:min-w-[560px]">
          <thead>
            <tr className="border-b border-border text-xs text-muted">
              <th className="py-2 pr-3 font-medium">
                <span className="flex items-center gap-1">Floor <ChevronsUpDown className="h-3 w-3" /></span>
              </th>
              <th className="py-2 pr-3 font-medium">
                <span className="flex items-center gap-1">Section <ChevronsUpDown className="h-3 w-3" /></span>
              </th>
              <th className="py-2 pr-3 font-medium">
                <span className="flex items-center gap-1">Category <ChevronsUpDown className="h-3 w-3" /></span>
              </th>
              <th className="py-2 pr-3 font-medium">
                <span className="flex items-center gap-1">Storage Used <ChevronsUpDown className="h-3 w-3" /></span>
              </th>
              <th className="hidden py-2 pr-3 font-medium sm:table-cell">
                <span className="flex items-center gap-1">Percentage <ChevronsUpDown className="h-3 w-3" /></span>
              </th>
              <th className="hidden py-2 pr-3 font-medium sm:table-cell">
                <span className="flex items-center gap-1">Available Space <ChevronsUpDown className="h-3 w-3" /></span>
              </th>
            </tr>
          </thead>
          <tbody>
            {warehouseStorage.map((row) => (
              <tr key={row.section} className="border-b border-border/60 last:border-0">
                <td className="py-3 pr-3 text-ink">{row.floor}</td>
                <td className="py-3 pr-3 text-ink">{row.section}</td>
                <td className="py-3 pr-3 text-muted">{row.category}</td>
                <td className="py-3 pr-3">
                  <div className="h-3 w-16 rounded-[3px] bg-surface sm:w-28">
                    <div className="h-3 rounded-[3px] bg-brand" style={{ width: `${row.percent}%` }} />
                  </div>
                  <span className="mt-1 block text-xs text-ink sm:hidden">
                    <span className="font-semibold">{row.percent}%</span> · {row.available}/100
                  </span>
                </td>
                <td className="hidden py-3 pr-3 font-semibold text-ink sm:table-cell">{row.percent}%</td>
                <td className="hidden py-3 pr-3 text-muted sm:table-cell">
                  <span className="font-semibold text-ink">{row.available}</span>/100
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}