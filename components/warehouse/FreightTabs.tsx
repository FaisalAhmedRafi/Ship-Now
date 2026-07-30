"use client";

import { freightTabs } from "@/data/warehouse";
import { Truck, TrainFront, Ship, Plane } from "lucide-react";

const freightIcons = { "Road Freight": Truck, "Rail Freight": TrainFront, "Ocean Freight": Ship, "Air Freight": Plane };

type Freight = (typeof freightTabs)[number];

interface FreightTabsProps {
  value: Freight;
  onChange: (value: Freight) => void;
}

export function FreightTabs({ value, onChange }: FreightTabsProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {freightTabs.map((f) => {
        const Icon = freightIcons[f];
        const active = f === value;
        return (
          <button
            key={f}
            onClick={() => onChange(f)}
            className={`flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-medium ${
              active ? "border-ink bg-ink text-white" : "border-border bg-white text-ink"
            }`}
          >
            <Icon className="h-3.5 w-3.5" /> {f}
          </button>
        );
      })}
    </div>
  );
}