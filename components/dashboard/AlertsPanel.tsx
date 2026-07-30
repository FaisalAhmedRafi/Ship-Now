import { Card, CardHeader } from "@/components/ui/Card";
import { shipmentAlerts } from "@/data/dashboard";
import Image from "next/image";
import { MoreHorizontal, ArrowUpRight } from "lucide-react";
import customsIcon from "@/assets/custom.png";
import mapIcon from "@/assets/map.png";
import weatherIcon from "@/assets/weather.png";

const iconMap = {
  customs: customsIcon,
  address: mapIcon,
  weather: weatherIcon,
};

const summaryConfig = [
  { key: "customs", label: "Customs Clearance Delay" },
  { key: "address", label: "Incorrect Address Provided" },
  { key: "weather", label: "Weather-Related Hold" },
];

export function AlertsPanel() {
  const counts = summaryConfig.map((s) => ({
    ...s,
    count: shipmentAlerts.filter((a) => a.icon === s.key).length,
  }));
  const totalDelays = counts.reduce((sum, s) => sum + s.count, 0);

  return (
    <Card>
      <CardHeader
        title="Shipment Alerts"
        action={
          <div className="flex items-center justify-center rounded-md bg-surface p-2">
            <MoreHorizontal className="h-4 w-4 text-muted" />
          </div>
        }
      />
      <p className="mb-4 text-2xl font-bold text-ink">
        {totalDelays} <span className="text-sm font-normal text-muted">Delays Detected</span>
      </p>

      <div className="mb-4 grid grid-cols-3 gap-3">
        {counts.map((s) => (
          <div key={s.key} className="rounded-2xl bg-brand-light p-4 text-center">
            <p className="text-2xl font-bold text-ink">{s.count}</p>
            <p className="mt-1 text-xs text-ink/80 leading-tight">{s.label}</p>
          </div>
        ))}
      </div>

      <ul className="space-y-3">
        {shipmentAlerts.map((a, i) => (
          <li key={i} className="flex items-start gap-3 rounded-xl bg-surface p-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-light text-brand-dark">
              <Image
                src={iconMap[a.icon]}
                alt={`${a.icon} Icon`}
                className="h-8.5 w-8.5"
              />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-ink">{a.title}</p>
              <p className="text-xs text-muted">
                <span className="text-brand-dark">#{a.id}</span> · {a.freight} · {a.date}
              </p>
            </div>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-muted" />
          </li>
        ))}
      </ul>
    </Card>
  );
}