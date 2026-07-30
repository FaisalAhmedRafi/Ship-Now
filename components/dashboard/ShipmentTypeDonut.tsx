"use client";

import { Card, CardHeader } from "@/components/ui/Card";
import { shipmentType } from "@/data/dashboard";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { MoreHorizontal } from "lucide-react";

export function ShipmentTypeDonut() {
  const total = shipmentType.reduce((s, d) => s + d.value, 0);
  return (
    <Card className="flex flex-col">
      <CardHeader
        title="Shipment Type"
        action={
          <div className="flex items-center justify-center rounded-md bg-surface p-2">
            <MoreHorizontal className="h-4 w-4 text-muted" />
          </div>
        }
      />
      <div className="relative mx-auto h-56 w-56">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={shipmentType}
              dataKey="value"
              innerRadius="72%"
              outerRadius="100%"
              paddingAngle={2}
              startAngle={90}
              endAngle={-270}
              stroke="none"
            >
              {shipmentType.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xs text-muted">Total Shipment</span>
          <span className="text-2xl font-bold text-ink">{total.toLocaleString()}</span>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4">
        {shipmentType.map((d) => (
          <div key={d.label} className="flex items-center gap-2.5">
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white"
              style={{ backgroundColor: d.color }}
            >
              {d.percent}%
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">{d.label}</p>
              <p className="text-xs text-muted">{d.value.toLocaleString()} shipments</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}