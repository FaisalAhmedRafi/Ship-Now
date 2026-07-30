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

      <div className="warehouse-grid">
        <div className="min-w-0" style={{ gridArea: "stats" }}>
          <WarehouseStats />
        </div>
        <div className="min-w-0" style={{ gridArea: "inv" }}>
          <WarehouseInventoryCard />
        </div>
        <div className="min-w-0" style={{ gridArea: "cap" }}>
          <CapacityUsageCard />
        </div>
        <div className="min-w-0" style={{ gridArea: "pkg" }}>
          <PackageStatusCard />
        </div>
        <div className="min-w-0" style={{ gridArea: "stor" }}>
          <WarehouseStorageTable />
        </div>
        <div className="min-w-0" style={{ gridArea: "map" }}>
          <WarehouseMapCard />
        </div>
        <div className="min-w-0" style={{ gridArea: "act" }}>
          <WarehouseActivityLogCard />
        </div>
      </div>

      <style jsx>{`
        .warehouse-grid {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: 1fr;
          grid-template-areas:
            "stats"
            "inv"
            "cap"
            "pkg"
            "stor"
            "map"
            "act";
        }

        /* Tablet: stats row, inventory row, cap+pkg paired, rest full width */
        @media (min-width: 768px) {
          .warehouse-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-areas:
              "stats stats"
              "inv inv"
              "cap pkg"
              "stor stor"
              "map map"
              "act act";
          }
        }

        /* Desktop: main column (stats+inv, storage, map) + persistent sidebar (cap, pkg, act) */
        @media (min-width: 1024px) {
          .warehouse-grid {
            grid-template-columns: minmax(0, 1fr) minmax(0, 2fr) 340px;
            grid-template-areas:
              "stats inv cap"
              "stor  stor pkg"
              "map   map  act";
          }
        }
      `}</style>
    </div>
  );
}