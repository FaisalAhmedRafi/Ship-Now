"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { COUNTRIES, type Country } from "@/components/shipments/create/types";
import Image from "next/image";

function FlagIcon({ code, className }: { code: string; className?: string }) {
  return (
    <img
      src={`https://flagcdn.com/w40/${code.toLowerCase()}.png`}
      srcSet={`https://flagcdn.com/w80/${code.toLowerCase()}.png 2x`}
      alt={code}
      className={cn("h-4 w-5 rounded-[3px] object-cover", className)}
    />
  );
}

export function PhoneField({
  id,
  value,
  onChange,
  country,
  onCountryChange,
  hasError,
}: {
  id: string;
  value: string;
  onChange: (v: string) => void;
  country: Country;
  onCountryChange: (c: Country) => void;
  hasError?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className={cn(
          "flex items-center rounded-xl border bg-surface",
          "focus-within:ring-2 focus-within:ring-brand/40",
          hasError ? "border-brand" : "border-transparent"
        )}
      >
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex shrink-0 items-center gap-1.5 border-r border-border/60 px-3 py-3 text-sm text-ink"
        >
          <FlagIcon code={country.code} />
          {country.dial}
          <ChevronDown className="h-3.5 w-3.5 text-muted" />
        </button>
        <input
          id={id}
          type="tel"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="555-000-0000"
          className="w-full min-w-0 bg-transparent px-3 py-3 text-sm text-ink placeholder:text-muted focus:outline-none"
        />
      </div>

      {open && (
        <div className="absolute z-10 mt-1 max-h-56 w-56 overflow-y-auto rounded-xl border border-border bg-white py-1 shadow-lg">
          {COUNTRIES.map((c) => (
            <button
              key={c.code}
              type="button"
              onClick={() => {
                onCountryChange(c);
                setOpen(false);
              }}
              className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-ink hover:bg-surface"
            >
              <FlagIcon code={c.code} />
              <span className="flex-1">{c.dial}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}