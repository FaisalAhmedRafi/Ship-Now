"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function StepperButtons({
  onIncrement,
  onDecrement,
  incrementLabel = "Increase",
  decrementLabel = "Decrease",
  className,
}: {
  onIncrement: () => void;
  onDecrement: () => void;
  incrementLabel?: string;
  decrementLabel?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "absolute right-2 top-1/2 flex -translate-y-1/2 flex-col gap-1 opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto",
        className
      )}
    >
      <button
        type="button"
        onClick={onIncrement}
        className="text-muted hover:text-ink"
        aria-label={incrementLabel}
      >
        <ChevronUp className="h-3.5 w-3.5" />
      </button>
      <button
        type="button"
        onClick={onDecrement}
        className="text-muted hover:text-ink"
        aria-label={decrementLabel}
      >
        <ChevronDown className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
