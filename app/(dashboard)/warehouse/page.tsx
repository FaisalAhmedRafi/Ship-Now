"use client";

import { useState } from "react";
import Link from "next/link";
import { freightTabs } from "@/data/warehouse";
import { FreightTabs } from "@/components/warehouse/FreightTabs";
import { WarehouseStats } from "@/components/warehouse/WarehouseStats";
import { WarehouseInventoryCard } from "@/components/warehouse/WarehouseInventoryCard";
import { CapacityUsageCard } from "@/components/warehouse/CapacityUsageCard";
import { WarehouseStorageTable } from "@/components/warehouse/WarehouseStorageTable";
import { PackageStatusCard } from "@/components/warehouse/PackageStatusCard";
import { WarehouseMapCard } from "@/components/warehouse/WarehouseMapCard";
import { WarehouseActivityLogCard } from "@/components/warehouse/WarehouseActivityLogCard";

export default function WarehousePage() {
  const [freight, setFreight] = useState<(typeof freightTabs)[number]>("Road Freight");

  return (
    <div>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-ink sm:text-3xl">Warehouse</h1>
          <p className="text-sm text-muted">
            <Link href="/dashboard" className="text-brand-dark hover:underline">Dashboard</Link> / Warehouse
          </p>
        </div>
        <FreightTabs value={freight} onChange={setFreight} />
      </div>

      <div className="mb-6 grid grid-cols-1 gap-6 xl:grid-cols-[250px_1fr_300px]">
        <WarehouseStats />
        <WarehouseInventoryCard />
        <CapacityUsageCard />
      </div>

      <div className="mb-6 grid grid-cols-1 gap-6 xl:grid-cols-[1fr_340px]">
        <WarehouseStorageTable />
        <PackageStatusCard />
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_340px]">
        <WarehouseMapCard />
        <WarehouseActivityLogCard />
      </div>
    </div>
  );
}