"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

// ── Static imports for your 4 local transport icons ─────────────────────────
import AirFreightIcon from "@/assets/transport/flight.png";
import RoadFreightIcon from "@/assets/transport/truck.png";
import OceanFreightIcon from "@/assets/transport/ship.png";
import RailFreightIcon from "@/assets/transport/train.png";

type Freight = "Air Freight" | "Road Freight" | "Ocean Freight" | "Rail Freight";

const iconByFreight: Record<Freight, typeof AirFreightIcon> = {
  "Air Freight": AirFreightIcon,
  "Road Freight": RoadFreightIcon,
  "Ocean Freight": OceanFreightIcon,
  "Rail Freight": RailFreightIcon,
};

export function TransportIcon({
  freight,
  className = "h-4 w-4",
  badge = false,
}: {
  freight?: Freight;
  className?: string;
  badge?: boolean;
}) {
  const icon = freight ? iconByFreight[freight] : undefined;
  if (!icon) return null;

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center",
        badge && "rounded-lg bg-surface p-1.5",
        className
      )}
    >
      <Image src={icon} alt={freight} className="h-full w-full object-contain" />
    </span>
  );
}

export default TransportIcon;