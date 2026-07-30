"use client";

import { useState } from "react";
import { Card, CardHeader } from "@/components/ui/Card";
import { shipmentStatistic } from "@/data/dashboard";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { ArrowUpRight } from "lucide-react";

function HighlightCallout(props: any) {
  const { x, y, width, entry } = props;
  if (!entry) return null;

  const cx = x + width / 2;
  const boxWidth = 78;
  const boxHeight = 42;
  const boxY = y - boxHeight - 16;

  return (
    <g>
      <circle cx={cx} cy={y} r={8} fill="#1A1A1E" stroke="#FFFFFF" strokeWidth={3} />
      <rect
        x={cx - boxWidth / 2}
        y={boxY}
        width={boxWidth}
        height={boxHeight}
        rx={10}
        fill="#E3DDFF"
      />
      <text x={cx} y={boxY + 17} textAnchor="middle" fill="#000000" fontSize={10.5} opacity={0.75}>
        {entry.month} 2030
      </text>
      <text x={cx} y={boxY + 33} textAnchor="middle" fill="#000000" fontSize={13.5} fontWeight={700}>
        {entry.value.toLocaleString()}
      </text>
    </g>
  );
}

function BarWithTopBorder(props: any) {
  const { x, y, width, height, index, activeIndex, payload } = props;
  const entry = payload ?? shipmentStatistic[index];
  const fill = activeIndex === index || entry?.highlight
    ? "url(#barGradientBrand)"
    : "url(#barGradientDark)";

  return (
    <g>
      <rect x={x} y={y} width={width} height={height} rx={2} fill={fill} />
      <rect x={x} y={y} width={width} height={3} rx={2} fill="#000000" />
      {activeIndex === index && <HighlightCallout x={x} y={y} width={width} entry={entry} />}
    </g>
  );
}

export function ShipmentStatisticChart() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const latestValue = shipmentStatistic[shipmentStatistic.length - 1]?.value;
  return (
    <Card>
      <CardHeader
        title="Shipment Statistic"
        action={
          <select className="rounded-lg border border-border bg-[#F0F0F0] px-3 py-1.5 text-xs text-ink">
            <option>Last Year</option>
            <option>Last 6 Months</option>
          </select>
        }
      />
      <div className="mb-1 flex items-baseline gap-2">
        <span className="text-3xl font-bold text-ink">{latestValue?.toLocaleString()}</span>
        <span className="inline-flex items-center gap-1 rounded-full bg-success-bg px-2 py-0.5 text-xs font-semibold text-success">
          <span className="text-[15px] leading-none"><ArrowUpRight className="h-3.5 w-3.5" /></span>
          <span>+8.7%</span>
        </span>
      </div>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={shipmentStatistic}
            margin={{ top: 48, right: 4, left: -20, bottom: 0 }}
            barCategoryGap="0%"
            barGap={0}
          >
            <defs>
              <linearGradient id="barGradientDark" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#d4d4d4" stopOpacity={1} />
                <stop offset="100%" stopColor="#d4d4d4" stopOpacity={0} />
              </linearGradient>
              
              <linearGradient id="barGradientBrand" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6C5DD3" stopOpacity={1} />
                <stop offset="100%" stopColor="#6C5DD3" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              vertical={false}
              stroke="#D1D5DB"
              strokeDasharray="4 4"
              strokeWidth={1.2}
            />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#6B7280", fontSize: 12 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: "#6B7280", fontSize: 12 }} tickFormatter={(v) => `${v / 1000}K`} />
            <Bar
              dataKey="value"
              radius={[2, 2, 0, 0]}
              isAnimationActive={false}
              shape={(props: any) => <BarWithTopBorder {...props} activeIndex={activeIndex} />}
              onMouseEnter={(_, index) => setActiveIndex(index as number)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {shipmentStatistic.map((entry, i) => {
                const isActive = activeIndex === i;
                return (
                  <Cell
                    key={i}
                    fill={isActive ? "url(#barGradientBrand)" : "url(#barGradientDark)"}
                  />
                );
              })}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}