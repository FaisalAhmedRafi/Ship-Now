import Link from "next/link";
import { Truck, MonitorPlay, CircleDollarSign , Search, Plus } from "lucide-react";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ShipmentStatisticChart } from "@/components/dashboard/ShipmentStatisticChart";
import { ProfitSummaryChart } from "@/components/dashboard/ProfitSummaryChart";
import { ShipmentTypeDonut } from "@/components/dashboard/ShipmentTypeDonut";
import { ProductCategoriesPanel } from "@/components/dashboard/ProductCategoriesPanel";
import { TrackingPanel } from "@/components/dashboard/TrackingPanel";
import { AlertsPanel } from "@/components/dashboard/AlertsPanel";
import { ActivityPanel } from "@/components/dashboard/ActivityPanel";
import { RecentShipmentsTable } from "@/components/dashboard/RecentShipmentsTable";
import Image from "next/image";
import truckIcon from "@/assets/truck.png";
import monitorIcon from "@/assets/monitor.png";
import dollarIcon from "@/assets/dollar.png";

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
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

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-4">
        <div className="space-y-6 xl:col-span-3">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <MetricCard label="Active Shipments" value="1,284" suffix="shipments" delta={+8.7} deltaLabel="from last week" icon={truckIcon} />
            <MetricCard label="Delivery Performance" value="94.3%" suffix="on-time" delta={-1.2} deltaLabel="from last week" icon={monitorIcon} />
            <MetricCard label="Revenue" value="$82,450" delta={+12.4} deltaLabel="from last month" icon={dollarIcon} />
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <ShipmentStatisticChart />
            <ProfitSummaryChart />
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
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
  );
}
