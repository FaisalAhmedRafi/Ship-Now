import { Card } from "@/components/ui/Card";
import { ChevronUp, ChevronDown, MoreHorizontal, type LucideIcon } from "lucide-react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

export function MetricCard({
  icon: Icon,
  image,
  iconBg = "bg-brand/10 text-brand",
  label,
  value,
  trend,
  percent,
  deltaText,
}: {
  icon?: LucideIcon;
  image?: StaticImageData | string;
  iconBg?: string;
  label: string;
  value: string;
  trend: "up" | "down";
  percent: string;
  deltaText: string;
}) {
  const TrendIcon = trend === "up" ? ChevronUp : ChevronDown;
  const trendColor = trend === "up" ? "text-success bg-success/10" : "text-red-600 bg-red-100";

  return (
    <Card>
      <div className="mb-3 flex items-center justify-between">
        <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${iconBg}`}>
          {image ? (
            <Image src={image} alt={label} className="h-5 w-5 object-contain" />
          ) : Icon ? (
            <Icon className="h-4 w-4" />
          ) : null}
        </span>
        <button className="text-muted hover:text-ink">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>

      <p className="mb-1 text-sm text-muted">{label}</p>

      <div className="flex items-end justify-between">
        <p className="text-2xl font-bold text-ink">{value}</p>
        <div className="text-right">
          <span className={`inline-flex items-center gap-1 rounded-full px-1 py-1 text-xs font-medium ${trendColor}`}>
            <TrendIcon className="h-3 w-3" />
          </span> 
          <span className="text-sm mr-2 ml-2">{deltaText}</span><span className={`bg-surface text-sm ${trendColor}`}>{percent}</span>
          <p className="mt-1 text-xs text-muted">
            {
              deltaText.includes("Up by")
                ? "this week"
                : deltaText.includes("Down")
                  ? "from last week"
                  : "No change from last week"
            }
          </p>
        </div>
      </div>
    </Card>
  );
}

export default MetricCard;