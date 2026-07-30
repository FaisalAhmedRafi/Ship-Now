"use client";

import { useState } from "react";
import { Card, CardHeader } from "@/components/ui/Card";
import { packageStatus } from "@/data/warehouse";
import { MoreHorizontal, PackageCheck } from "lucide-react";
import Image from "next/image";
import packageIcon from "@/assets/WarehouseIcon/Package.png";

const packageTabs = ["All", "Expected", "Received", "Sent"] as const;

const statusStyles: Record<string, string> = {
  Sent: "bg-brand-light text-brand-dark",
  Received: "bg-success/10 text-success",
  Expected: "bg-surface text-muted",
};

export function PackageStatusCard() {
  const [packageTab, setPackageTab] = useState<(typeof packageTabs)[number]>("All");

  const filteredPackages = packageStatus.filter((p) => packageTab === "All" || p.status === packageTab);

  return (
    <Card>
      <CardHeader title="Package Status" action={<MoreHorizontal className="h-4 w-4 text-muted" />} />
      <div className="mb-4 flex gap-1 rounded-xl bg-surface p-1">
        {packageTabs.map((t) => (
          <button
            key={t}
            onClick={() => setPackageTab(t)}
            className={`flex-1 rounded-lg px-2 py-1.5 text-xs font-medium ${
              packageTab === t ? "bg-ink text-white" : "text-ink/70"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <ul className="space-y-3">
        {filteredPackages.map((p) => (
          <li key={p.id} className="flex items-center justify-between gap-2 rounded-xl p-3">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-light text-brand-dark">
                <Image src={packageIcon} alt="Package" className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">{p.id}</p>
                <p className="text-xs text-muted">{p.date}</p>
              </div>
            </div>
            <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[p.status] ?? "bg-surface text-muted"}`}>
              {p.status}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}