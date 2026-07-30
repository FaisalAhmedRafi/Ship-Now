import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Shipment } from "@/data/shipments";

import AirFreightIcon from "@/assets/transportIcon/flight.png";
import RoadFreightIcon from "@/assets/transportIcon/truck.png";
import OceanFreightIcon from "@/assets/transportIcon/ship.png";
import RailFreightIcon from "@/assets/transportIcon/train.png";

const iconByFreight: Record<Shipment["freight"], typeof AirFreightIcon> = {
  "Air Freight": AirFreightIcon,
  "Road Freight": RoadFreightIcon,
  "Ocean Freight": OceanFreightIcon,
  "Rail Freight": RailFreightIcon,
};

const ICON_SIZE = 40;

export function FreightIcon({
  freight,
  size = ICON_SIZE,
  className,
}: {
  freight: Shipment["freight"];
  size?: number;
  className?: string;
}) {
  const icon = iconByFreight[freight];
  if (!icon) return null;

  return (
    <span
      className={cn("relative inline-block shrink-0", className)}
      style={{ width: size, height: size }}
    >
      <Image
        src={icon}
        alt={freight}
        fill
        sizes={`${size}px`}
        className="object-contain"
      />
    </span>
  );
}

export default FreightIcon;