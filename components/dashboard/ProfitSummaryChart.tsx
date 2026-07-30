"use client";

import { useState } from "react";
import { Card, CardHeader } from "@/components/ui/Card";
import { profitSummary } from "@/data/dashboard";
import { formatCurrencyCompact } from "@/lib/utils";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  Cell,
  Tooltip,
  TooltipProps,
} from "recharts";
import { ArrowUpRight } from "lucide-react";

function ProfitTooltip({ active, payload }: TooltipProps<number, string>) {
  if (!active || !payload || payload.length === 0) return null;

  const revenue = payload.find((p) => p.dataKey === "revenue");
  const cost = payload.find((p) => p.dataKey === "cost");

  return (
    <div className="rounded-xl border border-border bg-white px-4 py-3 shadow-lg">
      <div className="flex flex-col gap-2">
        {revenue && (
          <div className="flex items-center gap-2 text-xs">
            <span className="h-3 w-3 rounded-[3px] bg-[#856DF3]" />
            <span className="text-ink-muted">Revenue</span>
            <span className="ml-auto font-semibold text-ink">
              {formatCurrencyCompact(revenue.value as number)}
            </span>
          </div>
        )}
        {cost && (
          <div className="flex items-center gap-2 text-xs">
            <span className="h-3 w-3 rounded-[3px] bg-[#292929]" />
            <span className="text-ink-muted">Cost</span>
            <span className="ml-auto font-semibold text-ink">
              {formatCurrencyCompact(cost.value as number)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

// Custom legend renderer — gives us rounded-square swatches, which
// Recharts' built-in iconType="square" can't do (no rx on its <rect>).
function ProfitLegend() {
  return (
    <div className="mb-2 flex items-center justify-end gap-4 text-xs text-ink-muted">
      <div className="flex items-center gap-1.5">
        <span className="h-3 w-3 rounded-[3px] bg-[#856DF3]" />
        <span>Revenue</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="h-3 w-3 rounded-[3px] bg-[#292929]" />
        <span>Cost</span>
      </div>
    </div>
  );
}

export function ProfitSummaryChart() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const total = profitSummary.reduce((sum, d) => sum + d.revenue, 0);
  return (
    <Card>
      <CardHeader
        title="Profit Summary"
        action={
          <select className="rounded-lg border border-border bg-[#F0F0F0] px-3 py-1.5 text-xs text-ink">
            <option>Last 8 Months</option>
            <option>Last Year</option>
          </select>
        }
      />
      <div className="mb-1 flex items-baseline gap-2">
        <span className="text-3xl font-bold text-ink">{formatCurrencyCompact(total)}</span>
        <span className="inline-flex items-center gap-1 rounded-full bg-success-bg px-2 py-0.5 text-xs font-semibold text-success">
          <span className="text-[15px] leading-none"><ArrowUpRight className="h-3.5 w-3.5" /></span>
          <span>5.62%</span>
        </span>
      </div>
      <ProfitLegend />
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={profitSummary} margin={{ top: 10, right: 0, left: -10, bottom: 0 }} barGap={4}>
            <CartesianGrid vertical={false} stroke="#EDEDF1" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#6B7280", fontSize: 12 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: "#6B7280", fontSize: 12 }} tickFormatter={(v) => `$${v / 1000}K`} />
            <Tooltip
              cursor={{ fill: "rgba(0,0,0,0.03)" }}
              content={<ProfitTooltip />}
            />
            <Bar
              dataKey="revenue"
              name="Revenue"
              fill="#856DF3"
              radius={[4, 4, 0, 0]}
              onMouseEnter={(_, index) => setActiveIndex(index as number)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {profitSummary.map((entry, i) => (
                <Cell
                  key={i}
                  fill={activeIndex === i ? "#856DF3" : "#E3DDFF"}
                />
              ))}
            </Bar>
            <Bar
              dataKey="cost"
              name="Cost"
              fill="#292929"
              radius={[4, 4, 0, 0]}
              onMouseEnter={(_, index) => setActiveIndex(index as number)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {profitSummary.map((entry, i) => (
                <Cell
                  key={i}
                  fill={activeIndex === i ? "#292929" : "#F0F0F0"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}