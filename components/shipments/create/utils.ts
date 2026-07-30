import { cn } from "@/lib/utils";

export function inputClass(hasError?: boolean) {
  return cn(
    "w-full rounded-xl border bg-surface px-4 py-3 text-sm text-ink placeholder:text-muted",
    "focus:outline-none focus:ring-2 focus:ring-brand/40",
    hasError ? "border-brand" : "border-transparent"
  );
}

export function generateShipmentId() {
  return `#SH${Math.floor(9000000 + Math.random() * 900000)}`;
}

export function formatToday() {
  return new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}