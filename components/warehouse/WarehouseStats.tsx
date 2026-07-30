import { Card } from "@/components/ui/Card";
import { warehouseStats } from "@/data/warehouse";
import { TrendingUp } from "lucide-react";

function DeltaPill({ delta }: { delta: number }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-success/10 px-2 py-1 text-xs font-semibold text-success">
      <TrendingUp className="h-3 w-3" />
      +{delta}%
    </span>
  );
}

function StatCard({
  label,
  value,
  suffix,
  delta,
}: {
  label: string;
  value: React.ReactNode;
  suffix?: string;
  delta: number;
}) {
  return (
    <Card className="flex-1 p-3 sm:p-6">
      <p className="mb-2 text-xs text-muted">{label}</p>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-base font-bold text-ink sm:text-2xl">
          {value} {suffix && <span className="text-xs font-normal text-muted">{suffix}</span>}
        </span>
        <DeltaPill delta={delta} />
      </div>
    </Card>
  );
}

export function WarehouseStats() {
  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-4 xl:flex xl:flex-col xl:gap-6">
      <StatCard label="Total SKU" value={warehouseStats.totalSku.value} delta={warehouseStats.totalSku.delta} />
      <StatCard
        label="Quantity on Hand"
        value={warehouseStats.quantityOnHand.value.toLocaleString()}
        suffix="units"
        delta={warehouseStats.quantityOnHand.delta}
      />
      <StatCard
        label="Capacity Usage"
        value={`${warehouseStats.capacityUsage.value}%`}
        suffix="Full"
        delta={warehouseStats.capacityUsage.delta}
      />
    </div>
  );
}