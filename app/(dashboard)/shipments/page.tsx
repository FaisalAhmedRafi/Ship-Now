"use client";

import { Suspense, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Pagination } from "@/components/ui/Pagination";
import { LogoMark } from "@/components/ui/Logo";
import { shipments, type ShipmentStatus } from "@/data/shipments";
import { MetricCard } from "@/components/shipments/MetricCard";
import { ShipmentRow } from "@/components/shipments/ShipmentRow";
import { ShipmentCard } from "@/components/shipments/ShipmentCard";
import Image from "next/image";
import truck from "@/assets/ShipmentIcon/truck.png";
import van from "@/assets/ShipmentIcon/van.png";
import clock from "@/assets/ShipmentIcon/clock.png";
import check from "@/assets/ShipmentIcon/check.png";
import {
  Search,
  Filter,
  Calendar,
  ChevronDown,
  Plus,
  ArrowUpDown,
  Table2,
  LayoutGrid,
} from "lucide-react";

const TABS: Array<ShipmentStatus | "All"> = ["All", "In Transit", "Out for Delivery", "Delivered", "Processing"];

const SORT_COLUMNS: { key: SortKey; label: string }[] = [
  { key: "id", label: "Shipping ID" },
  { key: "company", label: "Company" },
  { key: "carrier", label: "Carriers" },
  { key: "category", label: "Product Category" },
  { key: "weight", label: "Weight" },
  { key: "route", label: "Route" },
  { key: "date", label: "Date" },
  { key: "progress", label: "Progress" },
  { key: "status", label: "Status" },
];

const METRIC_CARDS = [
  { image: truck, iconBg: "bg-brand/10 text-brand", label: "Total Shipments", value: "1,284", trend: "up" as const, percent: "4.6%", deltaText: "Up by" },
  { image: clock, iconBg: "bg-violet-100 text-violet-600", label: "Pending", value: "285", trend: "up" as const, percent: "8.7%", deltaText: "Up by" },
  { image: van, iconBg: "bg-brand/10 text-brand", label: "Delivery", value: "594", trend: "down" as const, percent: "4.2%", deltaText: "Down" },
  { image: check, iconBg: "bg-violet-100 text-violet-600", label: "Completed", value: "405", trend: "up" as const, percent: "3.9%", deltaText: "Up by" },
];

type SortKey = "id" | "company" | "carrier" | "category" | "weight" | "route" | "date" | "progress" | "status" | "none";

function sortShipments(list: typeof shipments, key: SortKey, asc: boolean) {
  if (key === "none") return list;

  const compare: Record<Exclude<SortKey, "none">, (a: (typeof shipments)[number], b: (typeof shipments)[number]) => number> = {
    id: (a, b) => a.id.localeCompare(b.id),
    company: (a, b) => a.company.localeCompare(b.company),
    carrier: (a, b) => a.carrier.localeCompare(b.carrier),
    category: (a, b) => a.category.localeCompare(b.category),
    weight: (a, b) => a.weightKg - b.weightKg,
    route: (a, b) => a.originCity.localeCompare(b.originCity),
    date: (a, b) => a.originDate.localeCompare(b.originDate),
    progress: (a, b) => a.progress - b.progress,
    status: (a, b) => a.status.localeCompare(b.status),
  };

  return [...list].sort((a, b) => (asc ? compare[key](a, b) : -compare[key](a, b)));
}

function ShipmentsPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const view = searchParams.get("view") === "grid" ? "grid" : "table";

  const [status, setStatus] = useState<(typeof TABS)[number]>("All");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [sortKey, setSortKey] = useState<SortKey>("none");
  const [sortAsc, setSortAsc] = useState(true);
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [selected, setSelected] = useState<Set<string>>(new Set());

  function setView(next: "table" | "grid") {
    const params = new URLSearchParams(searchParams.toString());
    params.set("view", next);
    router.replace(`/shipments?${params.toString()}`, { scroll: false });
    setPage(1);
  }

  function selectStatus(next: (typeof TABS)[number]) {
    setStatus(next);
    setPage(1);
  }

  function updateQuery(next: string) {
    setQuery(next);
    setPage(1);
  }

  function toggleSort(key: SortKey) {
    if (sortKey === key) setSortAsc((v) => !v);
    else {
      setSortKey(key);
      setSortAsc(true);
    }
  }

  function toggleRow(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    const list = shipments.filter((s) => {
      const matchesStatus = status === "All" || s.status === status;
      const matchesQuery = !q || `${s.id} ${s.company} ${s.category}`.toLowerCase().includes(q);
      return matchesStatus && matchesQuery;
    });

    if (view === "grid") {
      const ordered = [...list];
      return sortOrder === "oldest" ? ordered.reverse() : ordered;
    }

    return sortShipments(list, sortKey, sortAsc);
  }, [status, query, sortKey, sortAsc, view, sortOrder]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageSafe = Math.min(page, totalPages);
  const pageRows = filtered.slice((pageSafe - 1) * pageSize, pageSafe * pageSize);

  return (
    <div className="flex flex-col gap-6 bg-[#F0F0F0]">
      <div className="flex flex-col gap-6">
        {/* ---------- TABLET / DESKTOP HEADER (hidden on mobile) ---------- */}
        <div className="hidden md:block">
          <PageHeader view={view} onViewChange={setView} />
        </div>

        {view === "table" && (
          <div className="mb-6 grid grid-cols-2 gap-6 xl:grid-cols-4">
            {METRIC_CARDS.map((c) => (
              <MetricCard key={c.label} {...c} />
            ))}
          </div>
        )}

        {/* ---------- MOBILE-ONLY utility row + status tabs ---------- */}
        <div className="flex flex-col gap-3 md:hidden">
          <MobileUtilityRow query={query} onQueryChange={updateQuery} />
          <StatusTabs status={status} onChange={selectStatus} />
        </div>

        {view === "grid" && (
          <div className="hidden md:block">
            <CardHeader
              title={<StatusTabs status={status} onChange={selectStatus} />}
              action={
                <SearchAndFilter
                  query={query}
                  onQueryChange={updateQuery}
                  view={view}
                  sortOrder={sortOrder}
                  onSortOrderChange={setSortOrder}
                />
              }
            />
          </div>
        )}

        <Card>
          {view === "table" && (
            <div className="hidden md:block">
              <CardHeader
                title={<StatusTabs status={status} onChange={selectStatus} />}
                action={
                  <SearchAndFilter
                    query={query}
                    onQueryChange={updateQuery}
                    view={view}
                    sortOrder={sortOrder}
                    onSortOrderChange={setSortOrder}
                  />
                }
              />
            </div>
          )}

          {view === "table" ? (
            <ShipmentsTable
              rows={pageRows}
              selected={selected}
              onToggleRow={toggleRow}
              sortKey={sortKey}
              onToggleSort={toggleSort}
            />
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {pageRows.map((s) => (
                <ShipmentCard key={s.id} shipment={s} />
              ))}
            </div>
          )}

          <Pagination
            page={pageSafe}
            pageSize={pageSize}
            total={filtered.length}
            onPageChange={setPage}
            onPageSizeChange={(n) => { setPageSize(n); setPage(1); }}
          />
        </Card>
      </div>
    </div>
  );
}

/** Mobile-only row: full search bar + filter icon + add icon. */
function MobileUtilityRow({
  query,
  onQueryChange,
}: {
  query: string;
  onQueryChange: (q: string) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <div className="relative flex-1">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
        <input
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search id, company, etc"
          className="w-full rounded-xl border border-border bg-white py-2.5 pl-10 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30"
        />
      </div>
      <button
        aria-label="Filter"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border text-ink"
      >
        <Filter className="h-4 w-4" />
      </button>
      <Link
        href="/create-shipment"
        aria-label="New Shipment"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink text-white"
      >
        <Plus className="h-5 w-5" />
      </Link>
    </div>
  );
}

function PageHeader({ view, onViewChange }: { view: "table" | "grid"; onViewChange: (v: "table" | "grid") => void }) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-ink sm:text-3xl">Shipments</h1>
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
          <Link href="/dashboard" className="text-brand-dark hover:underline">Dashboard</Link>
          <span>/ Shipments</span>
          <div className="ml-2 flex items-center rounded-xl border border-border bg-white p-1">
            <button
              onClick={() => onViewChange("table")}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium ${
                view === "table" ? "bg-ink text-white" : "text-ink hover:bg-surface"
              }`}
            >
              <Table2 className="h-3.5 w-3.5" /> Table
            </button>
            <button
              onClick={() => onViewChange("grid")}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium ${
                view === "grid" ? "bg-ink text-white" : "text-ink hover:bg-surface"
              }`}
            >
              <LayoutGrid className="h-3.5 w-3.5" /> Grid
            </button>
          </div>
        </div>
      </div>
      <Link href="/create-shipment">
        <Button className="w-fit">
          <Plus className="h-4 w-4" /> New Shipment
        </Button>
      </Link>
    </div>
  );
}

function StatusTabs({ status, onChange }: { status: (typeof TABS)[number]; onChange: (t: (typeof TABS)[number]) => void }) {
  return (
    <div className="flex flex-wrap gap-1 rounded-xl bg-surface p-1">
      {TABS.map((t) => (
        <button
          key={t}
          onClick={() => onChange(t)}
          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
            status === t ? "bg-ink text-white" : "text-ink/70 hover:bg-white"
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}

/** Tablet/Desktop-only: icon-only search (click to expand) + icon-only filter + text dropdown. */
function SearchAndFilter({
  query,
  onQueryChange,
  view,
  sortOrder,
  onSortOrderChange,
}: {
  query: string;
  onQueryChange: (q: string) => void;
  view: "table" | "grid";
  sortOrder: "newest" | "oldest";
  onSortOrderChange: (order: "newest" | "oldest") => void;
}) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-2">
      {searchOpen ? (
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            autoFocus
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            onBlur={() => !query && setSearchOpen(false)}
            placeholder="Search id, company, etc"
            className="w-48 rounded-xl border border-border bg-white py-2 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30"
          />
        </div>
      ) : (
        <button
          aria-label="Search"
          onClick={() => setSearchOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-ink"
        >
          <Search className="h-4 w-4" />
        </button>
      )}

      <button
        aria-label="Filter"
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-ink"
      >
        <Filter className="h-4 w-4" />
      </button>

      {view === "table" ? (
        <button className="flex items-center gap-1.5 rounded-xl border border-border px-3 py-2 text-sm text-ink">
          <Calendar className="h-4 w-4" /> This Month <ChevronDown className="h-3.5 w-3.5" />
        </button>
      ) : (
        <div className="relative flex items-center gap-2">
          <label className="text-xs text-ink">Sort By :</label>
          <select
            value={sortOrder}
            onChange={(e) => onSortOrderChange(e.target.value as "newest" | "oldest")}
            className="appearance-none rounded-xl border border-border bg-white py-2 pl-3 pr-8 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brand/30"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted" />
        </div>
      )}
    </div>
  );
}

function ShipmentsTable({
  rows,
  selected,
  onToggleRow,
  sortKey,
  onToggleSort,
}: {
  rows: typeof shipments;
  selected: Set<string>;
  onToggleRow: (id: string) => void;
  sortKey: SortKey;
  onToggleSort: (key: SortKey) => void;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[1100px] text-left text-sm">
        <thead>
          <tr className="border-b border-border text-xs text-muted">
            <th className="py-2 pr-3"><input type="checkbox" /></th>
            {SORT_COLUMNS.map(({ key, label }) => (
              <th key={key} className="py-2 pr-3 font-medium">
                <button onClick={() => onToggleSort(key)} className="flex items-center gap-1 hover:text-ink">
                  {label} <ArrowUpDown className="h-3 w-3" />
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((s) => (
            <ShipmentRow key={s.id} shipment={s} selected={selected.has(s.id)} onToggle={onToggleRow} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ShipmentsPage() {
  return (
    <Suspense fallback={null}>
      <ShipmentsPageInner />
    </Suspense>
  );
}