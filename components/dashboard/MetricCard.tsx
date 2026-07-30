import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { ArrowUp, ArrowDown, ChevronUp, ChevronDown } from "lucide-react";
import Image, { type StaticImageData } from "next/image";

export function MetricCard({
  label,
  value,
  suffix,
  delta,
  deltaLabel,
  icon,
}: {
  label: string;
  value: string;
  suffix?: string;
  delta: number;
  deltaLabel: string;
  icon: StaticImageData;
}) {
  const positive = delta >= 0;
  return (
    <Card className="flex items-start justify-between gap-3">
      <div>
        <p className="mb-2 text-sm text-muted">{label}</p>
        <p className="mb-2 text-2xl font-bold text-ink sm:text-3xl">
          {value} {suffix && <span className="text-base font-medium text-muted">{suffix}</span>}
        </p>
        <p className="flex items-center gap-1 text-xs">
          <span
            className={cn(
              "inline-flex items-center gap-0.5 rounded-full px-1 py-1 font-semibold",
              positive ? "bg-success-bg text-success" : "bg-danger-bg text-danger"
            )}
          >
            {positive ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
          </span>
          <span className={cn(positive ? " text-success" : " text-danger", "ml-1")}>{delta}%</span>
          <span className="text-muted">{deltaLabel}</span>
        </p>
      </div>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
        <Image src={icon} alt="" className="h-10.5 w-10.5 object-contain" />
      </span>
    </Card>
  );
}