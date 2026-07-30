"use client";

import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { LogoLockup } from "@/components/ui/Logo";
import { MobileNavList } from "./Sidebar";

export function MobileChrome() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 flex h-16 items-center justify-between border-b border-border bg-card px-4 md:hidden">
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-surface"
        >
          <Menu className="h-5 w-5" />
        </button>
        <LogoLockup markClassName="h-6 w-6" textClassName="text-base" />
        <button
          aria-label="Search"
          className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-surface"
        >
          <Search className="h-5 w-5" />
        </button>
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
