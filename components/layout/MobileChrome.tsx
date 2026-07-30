"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, Search, Plus, ChevronLeft } from "lucide-react";
import { LogoMark } from "@/components/ui/Logo";
import { MobileNavList } from "./Sidebar";

export function MobileChrome({
  title = "Dashboard",
  showBack = false,
  hideActions = false,
}: {
  title?: string;
  showBack?: boolean;
  hideActions?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 flex flex-col gap-3 border-b border-border bg-card px-4 py-3 md:hidden">
        <div className="flex h-9 items-center justify-between">
          {showBack ? (
            <button
              aria-label="Go back"
              onClick={() => router.back()}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-border"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          ) : (
            <Link href="/dashboard" aria-label="Go to dashboard" className="flex items-center">
              <LogoMark className="h-7 w-7" />
            </Link>
          )}
          <h1 className="text-base font-semibold text-ink">{title}</h1>
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-surface"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {!hideActions && (
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              <input
                placeholder="Search anything"
                className="w-full rounded-xl border border-border bg-white py-2.5 pl-10 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30"
              />
            </div>
            <Link
              href="/create-shipment"
              aria-label="Add New Shipping"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink text-white"
            >
              <Plus className="h-5 w-5" />
            </Link>
          </div>
        )}
      </header>

      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-ink/40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute inset-y-0 left-0 w-[85vw] max-w-xs bg-card p-4 shadow-xl">
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg hover:bg-surface"
            >
              <X className="h-5 w-5" />
            </button>
            <MobileNavList onNavigate={() => setOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}