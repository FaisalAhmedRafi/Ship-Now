import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

export type BadgeTone =
  | "processing"
  | "success"
  | "warning"
  | "danger"
  | "brand"
  | "neutral";

const toneClasses: Record<BadgeTone, string> = {
  processing: "bg-processing/10 text-processing",
  success: "bg-success-bg text-success",
  warning: "bg-warning-bg text-warning",
  danger: "bg-danger-bg text-danger",
  brand: "bg-brand-light text-brand-dark",
  neutral: "bg-neutralpill-bg text-neutralpill",
};

const toneStyles: Record<BadgeTone, CSSProperties> = {
  processing: { backgroundColor: "#DBEAFE", color: "#2563EB" },
  success: { backgroundColor: "#DCFCE7", color: "#16A34A" },
  warning: { backgroundColor: "#FEF9C3", color: "#CA8A04" },
  danger: { backgroundColor: "#FEE2E2", color: "#DC2626" },
  brand: { backgroundColor: "#EDEAFB", color: "#5847C7" },
  neutral: { backgroundColor: "#EEEEF1", color: "#4B5563" },
};

export function Badge({
  tone = "neutral",
  className,
  dot,
  children,
}: {
  tone?: BadgeTone;
  className?: string;
  dot?: boolean;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        dot
          ? "inline-flex items-center gap-1.5 rounded-full bg-surface px-2.5 py-1 text-ink"
          : "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium whitespace-nowrap",
        dot ? "" : toneClasses[tone],
        className
      )}
      style={dot ? undefined : toneStyles[tone]}
    >
      {dot && (
        <span
          className={cn(
            "h-2.5 w-2.5 rounded-full",
            tone === "success" && "bg-success",
            tone === "warning" && "bg-warning",
            tone === "danger" && "bg-danger",
            tone === "brand" && "bg-brand",
            tone === "neutral" && "bg-neutralpill",
            tone === "processing" && "bg-processing"
          )}
          style={tone === "processing" ? { backgroundColor: "#2563EB" } : undefined}
        />
      )}
      {children}
    </span>
  );
}
