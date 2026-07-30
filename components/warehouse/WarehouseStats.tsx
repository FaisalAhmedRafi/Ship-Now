import { Card } from "@/components/ui/Card";
import { warehouseStats } from "@/data/warehouse";
import { TrendingUp } from "lucide-react";

function DeltaPill({ delta }: { delta: number }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-success/10 px-2 py-1 text-xs font-semibold text-success">
      <span className="flex h-4 w-4 items-center justify-center">
        <TrendingUp />
      </span>
      +{delta}%
    </span>
  );
}

export function WarehouseStats() {
  return (
    <div className="flex flex-row gap-6 lg:flex-col">
      <Card className="flex-1">
        <p className="mb-2 text-xs text-muted">Total SKU</p>
        <span className="mb-2 text-2xl font-bold text-ink">{warehouseStats.totalSku.value}</span>
        <span className="text-xs font-normal text-muted float-right">
            <DeltaPill delta={warehouseStats.totalSku.delta} />
        </span> 
            
      </Card>
      <Card className="flex-1">
        <p className="mb-2 text-xs text-muted">Quantity on Hand</p>
        <span className="mb-2 text-2xl font-bold text-ink">
          {warehouseStats.quantityOnHand.value.toLocaleString()} <span className="text-xs font-normal text-muted">units</span>
        </span>
        <span className="text-xs font-normal text-muted float-right">
            <DeltaPill delta={warehouseStats.quantityOnHand.delta} />
        </span> 
      </Card>
      <Card className="flex-1">
        <p className="mb-2 text-xs text-muted">Capacity Usage</p>
        <span className="mb-2 text-2xl font-bold text-ink">
          {warehouseStats.capacityUsage.value}% <span className="text-xs font-normal text-muted">Full</span>
        </span>
        <span className="text-xs font-normal text-muted float-right">
            <DeltaPill delta={warehouseStats.capacityUsage.delta} />
        </span> 
      </Card>
    </div>
  );
}