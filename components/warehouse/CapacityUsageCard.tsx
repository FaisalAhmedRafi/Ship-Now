import { Card, CardHeader } from "@/components/ui/Card";
import { capacityUsage } from "@/data/warehouse";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { MoreHorizontal } from "lucide-react";

const TOTAL_USAGE_PERCENT = 62.5;

export function CapacityUsageCard() {
  const donutData = [
    { name: "used", value: TOTAL_USAGE_PERCENT },
    { name: "free", value: 100 - TOTAL_USAGE_PERCENT },
  ];

  return (
    <Card className="bg-ink text-white">
      <CardHeader title={<span className="text-white">Capacity Usage</span>} action={<MoreHorizontal className="h-4 w-4 text-white/70" />} />
      <div className="relative mx-auto h-40 w-40">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={donutData} dataKey="value" innerRadius="70%" outerRadius="100%" startAngle={90} endAngle={-270} stroke="none">
              <Cell fill="#6C5DD3" />
              <Cell fill="#FEFEFE" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xs text-white/60">Total Usage</span>
          <span className="text-xl font-bold">{TOTAL_USAGE_PERCENT}%</span>
        </div>
      </div>
      <div className="mt-4 flex justify-between text-sm">
        <div>
          <p className="text-white/60 ml-5">Loaded</p>
          <p className="font-semibold">{capacityUsage.loadedShelves} shelves</p>
        </div>
        <div className="text-right">
          <p className="text-white/60 mr-7">Empty</p>
          <p className="font-semibold">{capacityUsage.emptyShelves} shelves</p>
        </div>
      </div>
    </Card>
  );
}