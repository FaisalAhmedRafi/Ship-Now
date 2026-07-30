"use client";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { liveTracking } from "@/data/dashboard";
import { Search, Plus, Minus, Truck, ArrowUpRight } from "lucide-react";

export function TrackingPanel() {
  const startX = -40;
  const startY = 180;
  const endX = 440;
  const endY = -20;

  const viewBoxMinX = -40;
  const viewBoxWidth = 480;
  const viewBoxMinY = -20;
  const viewBoxHeight = 200;

  const progressX = startX + (endX - startX) * (liveTracking.progress / 100);
  const progressY = startY + (endY - startY) * (liveTracking.progress / 100);

  const markerLeftPct = ((progressX - viewBoxMinX) / viewBoxWidth) * 100;
  const markerTopPct = ((progressY - viewBoxMinY) / viewBoxHeight) * 100;

  return (
    <Card className="relative overflow-hidden !p-0">
      <div className="relative h-60 w-full overflow-hidden bg-surface">
        <svg
          viewBox={`${viewBoxMinX} ${viewBoxMinY} ${viewBoxWidth} ${viewBoxHeight}`}
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          <line x1={startX} y1={startY} x2={progressX} y2={progressY} stroke="#1A1A1E" strokeWidth="2" />
          <line x1={progressX} y1={progressY} x2={endX} y2={endY} stroke="#6C5DD3" strokeWidth="3" />
        </svg>
        <div
          className="absolute flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand shadow-card"
          style={{
            left: `${markerLeftPct}%`,
            top: `${markerTopPct}%`,
          }}
        >
          <ArrowUpRight className="h-4 w-4 text-white" strokeWidth={2.5} style={{ transform: "rotate(21deg)" }}/>
        </div>

        {/* Overlay controls on top of the map */}
        <div className="absolute inset-x-0 top-0 z-20 flex items-start justify-between gap-3 p-4">
          <div className="relative w-3/5 max-w-[220px]">
            <input
              placeholder="Search by Shipping ID..."
              className="w-full rounded-full bg-white py-3 pl-5 pr-11 text-sm text-ink placeholder:text-muted shadow-card focus:outline-none focus:ring-2 focus:ring-brand/40"
            />
            <Search className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink" />
          </div>
          <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-card">
            <button className="flex h-9 w-9 items-center justify-center rounded-t-xl text-ink hover:bg-surface">
              <Plus className="h-4 w-4" />
            </button>
            <div className="h-px w-full bg-border" />
            <button className="flex h-9 w-9 items-center justify-center rounded-b-xl text-ink hover:bg-surface">
              <Minus className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-10 -mt-4 rounded-t-2xl bg-white p-4 shadow-card">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-sm font-semibold text-ink">#{liveTracking.id}</p>
            <Badge tone="brand" className="mt-1">
              {liveTracking.status} · On Schedule
            </Badge>
          </div>
          <div className="text-right text-xs text-muted">
            <p>Courier:</p>
            <p className="font-semibold text-ink">{liveTracking.courier}</p>
            <p>{liveTracking.carrier}</p>
          </div>
        </div>
        <div className="mb-3 flex items-center">
          <span className="relative flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-brand bg-white">
            <span className="h-2 w-2 rounded-full bg-brand" />
          </span>
          <div className="h-1 flex-1 bg-brand" />
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
            <Truck className="h-3.5 w-3.5" />
          </span>
          <div className="h-1 flex-1 bg-surface" />
          <span className="relative flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-border bg-white">
            <span className="h-2 w-2 rounded-full bg-border" />
          </span>
        </div>
        <div className="flex justify-between text-xs">
          <div>
            <p className="font-medium text-ink">{liveTracking.originCity}</p>
            <p className="text-muted">{liveTracking.originDate}</p>
          </div>
          <div className="text-right">
            <p className="font-medium text-ink">{liveTracking.destinationCity}</p>
            <p className="text-muted">{liveTracking.destinationDate}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}