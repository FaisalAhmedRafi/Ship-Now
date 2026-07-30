"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import sortIcon from "@/assets/Button-icon.png";
import { Card, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { shipments, statusTone } from "@/data/shipments";
import { Search, MoreHorizontal, ChevronsUpDown } from "lucide-react";

export function RecentShipmentsTable() {
  const [query, setQuery] = useState("");
  const rows = shipments
    .slice(0, 5)
    .filter((s) => `${s.id} ${s.company}`.toLowerCase().includes(query.toLowerCase()));

  return (
    <Card>
      <CardHeader
        title="Recent Shipments"
        action={
          <div className="flex items-center gap-2">
            <div className="relative hidden sm:block">
              <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search shipment"
                className="w-40 rounded-lg border border-border bg-surface py-1.5 pl-8 pr-2 text-xs focus:outline-none focus:ring-2 focus:ring-brand/30"
              />
            </div>
            <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface">
            <Image
              src={sortIcon}
              alt="Sort"
              width={14}
              height={14}
              className="h-10 w-10 object-contain"
            />
          </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface p-2">
              <MoreHorizontal className="h-3.5 w-3.5 text-muted " />
            </button>
          </div>
        }
      />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="rounded-lg bg-brand-light text-xs border-b">
              <th className="rounded-l-lg px-3 py-3"><input type="checkbox" /></th>
              <th className="px-3 py-3">
                <div className="flex items-center gap-1">
                  <span>Shipping ID</span>
                  <ChevronsUpDown className="h-4 w-4" />
                </div>
              </th>
              <th className="px-3 py-3">
                <div className="flex items-center gap-1">
                  <span>Company</span>
                  <ChevronsUpDown className="h-4 w-4" />
                </div>
              </th>
              <th className="px-3 py-3">
                <div className="flex items-center gap-1">
                  <span>Carriers</span>
                  <ChevronsUpDown className="h-4 w-4" />
                </div>
              </th>
              <th className="px-3 py-3">
                <div className="flex items-center gap-1">
                  <span>Route</span>
                  <ChevronsUpDown className="h-4 w-4" />
                </div>
              </th>
              <th className="px-3 py-3">
                <div className="flex items-center gap-1">
                  <span>Shipping Date</span>
                  <ChevronsUpDown className="h-4 w-4" />
                </div>
              </th>
              <th className="rounded-r-lg px-3 py-3">
                <div className="flex items-center gap-1">
                  <span>Status</span>
                  <ChevronsUpDown className="h-4 w-4" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((s, index) => (
              <tr key={s.id} className={index === rows.length - 1 ? "border-0" : "border-b-2 border-border/80"}>
                <td className="px-3 py-3"><input type="checkbox" /></td>
                <td className="px-3 py-3">
                  <Link href="/shipments" className="font-medium text-brand-dark hover:underline">
                    #{s.id}
                  </Link>
                </td>
                <td className="px-3 py-3">
                  <p className="font-medium text-ink">{s.company}</p>
                  <p className="text-xs text-muted">{s.category}</p>
                </td>
                <td className="px-3 py-3 text-ink">{s.carrier}</td>
                <td className="px-3 py-3 text-muted">
                  {s.originCity} &rarr; {s.destinationCity}
                </td>
                <td className="px-3 py-3 text-muted">{s.originDate.split(" – ")[0]}</td>
                <td className="px-3 py-3">
                  <Badge tone={statusTone(s.status)}>{s.status}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}