import Link from "next/link";
import { Search, Plus } from "lucide-react";
import { MobileChrome } from "@/components/layout/MobileChrome"; // adjust path to match your project
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ShipmentStatisticChart } from "@/components/dashboard/ShipmentStatisticChart";
import { ProfitSummaryChart } from "@/components/dashboard/ProfitSummaryChart";
import { ShipmentTypeDonut } from "@/components/dashboard/ShipmentTypeDonut";
import { ProductCategoriesPanel } from "@/components/dashboard/ProductCategoriesPanel";
import { TrackingPanel } from "@/components/dashboard/TrackingPanel";
import { AlertsPanel } from "@/components/dashboard/AlertsPanel";
import { ActivityPanel } from "@/components/dashboard/ActivityPanel";
import { RecentShipmentsTable } from "@/components/dashboard/RecentShipmentsTable";
import truckIcon from "@/assets/truck.png";
import monitorIcon from "@/assets/monitor.png";
import dollarIcon from "@/assets/dollar.png";

export default function DashboardPage() {
  return (
    <div>
      {/* ---------- MOBILE-ONLY CHROME (logo / title / hamburger + search / add, fixed 2-row header) ---------- */}
      <MobileChrome title="Dashboard" />

      {/*
        Padding to clear MobileChrome's fixed 2-row header on mobile.
        Adjust this value if it doesn't line up exactly with your header's rendered height.
      */}
      <div className="pt-[7.5rem] md:pt-0">
        {/* ---------- TABLET / DESKTOP HEADER (hidden on mobile) ---------- */}
        <div className="mb-6 hidden flex-col gap-4 md:flex md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-muted">Hello John!</p>
            <h1 className="text-2xl font-bold text-ink sm:text-3xl">Good Morning</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              <input
                placeholder="Search anything"
                className="w-64 rounded-xl border border-border bg-white py-2.5 pl-10 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30"
              />
            </div>
            <Link
              href="/create-shipment"
              className="flex items-center gap-2 whitespace-nowrap rounded-xl bg-ink px-4 py-2.5 text-sm font-medium text-white"
            >
              <Plus className="h-4 w-4" /> Add New Shipping
            </Link>
          </div>
        </div>

        {/* ---------- MOBILE + TABLET (below xl) ---------- */}
        <div className="space-y-6 xl:hidden">
          {/* 3 metric cards: stacked on mobile, side by side from md (tablet) up */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <MetricCard label="Active Shipments" value="1,284" suffix="shipments" delta={+8.7} deltaLabel="from last week" icon={truckIcon} />
            <MetricCard label="Delivery Performance" value="94.3%" suffix="on-time" delta={-1.2} deltaLabel="from last week" icon={monitorIcon} />
            <MetricCard label="Revenue" value="$82,450" delta={+12.4} deltaLabel="from last month" icon={dollarIcon} />
          </div>

          {/* Shipment Statistic + Profit Summary */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ShipmentStatisticChart />
            <ProfitSummaryChart />
          </div>

          {/* Shipment Type + Product Categories */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ShipmentTypeDonut />
            <ProductCategoriesPanel />
          </div>

          {/* Tracking panel: always full width */}
          <TrackingPanel />

          {/*
            Alerts / Recent Shipments / Recent Activity:
            - Mobile order:  Alerts -> Recent Shipments -> Recent Activity (all stacked)
            - Tablet order:  Alerts + Recent Activity side by side -> Recent Shipments full width below
          */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="order-1 md:order-1">
              <AlertsPanel />
            </div>
            <div className="order-3 md:order-2">
              <ActivityPanel />
            </div>
            <div className="order-2 col-span-1 md:order-3 md:col-span-2">
              <RecentShipmentsTable />
            </div>
          </div>
        </div>

        {/* ---------- DESKTOP (xl and up) ---------- */}
        <div className="hidden xl:grid xl:grid-cols-4 xl:gap-6">
          <div className="space-y-6 xl:col-span-3">
            <div className="grid grid-cols-3 gap-6">
              <MetricCard label="Active Shipments" value="1,284" suffix="shipments" delta={+8.7} deltaLabel="from last week" icon={truckIcon} />
              <MetricCard label="Delivery Performance" value="94.3%" suffix="on-time" delta={-1.2} deltaLabel="from last week" icon={monitorIcon} />
              <MetricCard label="Revenue" value="$82,450" delta={+12.4} deltaLabel="from last month" icon={dollarIcon} />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <ShipmentStatisticChart />
              <ProfitSummaryChart />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <ProductCategoriesPanel />
              <TrackingPanel />
            </div>

            <RecentShipmentsTable />
          </div>

          <div className="space-y-6 xl:col-span-1">
            <ShipmentTypeDonut />
            <AlertsPanel />
            <ActivityPanel />
          </div>
        </div>
      </div>
    </div>
  );
}