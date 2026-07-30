"use client";

import { useState } from "react";
import { Card, CardHeader } from "@/components/ui/Card";
import { warehouseFloors } from "@/data/warehouse";

export function WarehouseMapCard() {
  const [floor, setFloor] = useState<1 | 2 | 3>(1);

  return (
    <Card>
      <CardHeader
        title="Warehouse Map"
        action={
          <div className="flex gap-1 rounded-xl bg-surface p-1">
            {[1, 2, 3].map((f) => (
              <button
                key={f}
                onClick={() => setFloor(f as 1 | 2 | 3)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium ${
                  floor === f ? "bg-ink text-white" : "text-ink/70"
                }`}
              >
                Floor {f}
              </button>
            ))}
          </div>
        }
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 bg-surface p-4 rounded-xl">
        {warehouseFloors[floor].map((sectionGroup) => {
          // decide column span to match the reference layout
          let spanClass = "lg:col-span-3"; // 4 equal columns on large
          if (sectionGroup.name === "Apparel") spanClass = "lg:col-span-8"; // wide row
          if (sectionGroup.name === "Beauty & Health") spanClass = "lg:col-span-4"; // smaller right column

          const bins = sectionGroup.bins ?? [];
          const availableBins = Math.max(0, Math.round((sectionGroup.available / 100) * bins.length));

          return (
            <div key={sectionGroup.name} className={`${spanClass} rounded-xl border border-border p-4 bg-card`}>
              <p className="mb-3 font-semibold text-ink">{sectionGroup.name}</p>
              <div className="mb-3 flex flex-wrap items-center gap-3">
                {bins.map((bin) => (
                  <div
                    key={bin.id}
                    className={`flex h-9 w-9 items-center justify-center rounded-md text-xs font-medium ${
                      bin.status === "available"
                        ? "bg-[#E0DAFC] text-ink shadow-[0_8px_20px_rgba(108,93,211,0.12)]"
                        : "bg-[#DEDEDE] border border-border text-ink/80"
                    }`}
                  >
                    <span className="bg-white flex h-6 w-6 items-center justify-center rounded-md">{bin.id}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted">
                Available Space <strong className="text-ink">{sectionGroup.available}/100</strong>
              </p>
            </div>
          );
        })}

        <div className="mt-4 flex items-center gap-4 text-xs text-muted">
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded bg-[#E0DAFC] shadow-[0_6px_12px_rgba(108,93,211,0.12)] border border-transparent" /> Available
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded bg-[#DEDEDE] border border-border" /> Full
        </span>
      </div>

      </div>
      
    </Card>
  );
}