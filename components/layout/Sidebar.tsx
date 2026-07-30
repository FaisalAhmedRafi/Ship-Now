"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { LogoLockup } from "@/components/ui/Logo";
import { primaryNav, secondaryNav } from "./nav-items";
import { cn } from "@/lib/utils";
import Image from "next/image";
import userAvatar from "@/assets/Image.png";

function NavList({ items, pathname }: { items: typeof primaryNav; pathname: string }) {
  return (
    <nav className="flex flex-col gap-1">
      {items.map((item) => {
        const active = pathname === item.href || pathname.startsWith(item.href + "/");
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors md:justify-center lg:justify-start",
              active
                ? "bg-brand-light text-brand-dark"
                : "text-ink/70 hover:bg-surface hover:text-ink"
            )}
          >
            <Image
              src={item.icon}
              alt=""
              width={20}
              height={20}
              className="h-5 w-5 shrink-0"
            />
            <span className="hidden lg:inline">{item.label}</span>
            {item.badge && (
              <span className="ml-auto hidden rounded-full bg-brand px-2 py-0.5 text-xs font-semibold text-white lg:inline">
                {item.badge}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-20 flex-col overflow-y-auto border-r border-border bg-card px-3 py-6 md:flex lg:w-72 lg:px-5">
      <Link href="/dashboard" className="mb-8 flex items-center justify-center lg:justify-start">
        <LogoLockup
          textClassName="hidden lg:inline text-ink"
          markClassName="h-7 w-7"
        />
      </Link>

      <button className="mb-6 flex w-full items-center gap-3 rounded-xl bg-surface p-2 lg:p-2.5">
        <Image
          src={userAvatar}
          alt="John Doe"
          width={32}
          height={32}
          className="h-8 w-8 shrink-0 overflow-hidden rounded-full"
        />
        <span className="hidden min-w-0 flex-1 text-left lg:block">
          <span className="block truncate text-sm font-semibold text-ink">John Doe</span>
          <span className="block truncate text-xs text-muted">Admin</span>
        </span>
        <ChevronDown className="hidden h-4 w-4 text-muted lg:block" />
      </button>

      <NavList items={primaryNav} pathname={pathname} />

      <div className="my-4 border-t border-border" />

      <NavList items={secondaryNav} pathname={pathname} />

      <div className="mt-auto hidden pt-6 lg:block">
  <div className="relative overflow-hidden rounded-2xl bg-ink p-5 text-white">
    <svg
      viewBox="0 0 120 100"
      className="pointer-events-none absolute -right-2 -top-2 h-24 w-28"
      fill="none"
      aria-hidden="true"
    >
      <path d="M70 0 H100 L78 40 H48 Z" fill="#6C5DD3" opacity="0.6" />
      <path d="M92 20 H118 L96 60 H70 Z" fill="#5847C7" opacity="0.3"/>
    </svg>

    <p className="relative mb-1 text-xl font-extrabold leading-snug">
      Loving
      <br />
      ShipNow
      <br />
      Free?
    </p>
    <p className="relative mb-4 text-xs text-white/70">
      Go Pro to access priority support, real-time tracking, and full
      analytics.
    </p>
    <button className="relative w-full rounded-full bg-white py-2.5 text-sm font-semibold text-ink">
      Go Pro Today
    </button>
  </div>
</div>
    </aside>
  );
}

export function MobileNavList({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  return (
    <div className="flex h-full flex-col overflow-y-auto">
      <Link href="/dashboard" className="mb-8 flex items-center" onClick={onNavigate}>
        <LogoLockup textClassName="text-ink" />
      </Link>
      <button className="mb-6 flex w-full items-center gap-3 rounded-xl bg-surface p-2.5">
        <span className="h-9 w-9 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-brand to-brand-dark" />
        <span className="min-w-0 flex-1 text-left">
          <span className="block truncate text-sm font-semibold text-ink">John Doe</span>
          <span className="block truncate text-xs text-muted">Admin</span>
        </span>
        <ChevronDown className="h-4 w-4 text-muted" />
      </button>
      <nav className="flex flex-col gap-1" onClick={onNavigate}>
        {[...primaryNav, ...secondaryNav].map((item) => {
          const active = pathname === item.href || pathname.startsWith(item.href + "/");
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium",
                active
                  ? "bg-brand-light text-brand-dark"
                  : "text-ink/70 hover:bg-surface"
              )}
            >
              <Image
                src={item.icon}
                alt=""
                width={20}
                height={20}
                className="h-5 w-5 shrink-0"
              />
              <span>{item.label}</span>
              {item.badge && (
                <span className="ml-auto rounded-full bg-brand px-2 py-0.5 text-xs font-semibold text-white">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
