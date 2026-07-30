"use client";

import { cn } from "@/lib/utils";

export function ToggleSwitch({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}) {
  return (
    <label className="inline-flex items-center gap-2 text-sm text-ink cursor-default">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={cn(
          "cursor-default flex h-5 w-9 shrink-0 items-center rounded-full p-0.5 transition-colors ease-in-out duration-500",
          checked ? "justify-end bg-brand" : "justify-start bg-border"
        )}
      >
        <span className="h-4 w-4 rounded-full bg-white shadow-sm" />
      </button>
      {label}
    </label>
  );
}