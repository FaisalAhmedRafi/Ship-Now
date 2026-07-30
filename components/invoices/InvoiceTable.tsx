"use client";

import { useMemo, useState } from "react";
import { Card, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Invoice, invoiceStatusTone, invoiceTotals } from "@/data/invoices";
import { formatCurrency } from "@/lib/utils";
import { Search, SlidersHorizontal, ArrowUpDown, FileX, ChevronsUpDown, Plus } from "lucide-react";
import { CompanyLogo } from "@/components/shipments/CompanyLogo";
type SortKey = "id" | "company" | "shippingId" | "date" | "amount" | "status";

const columns: [SortKey, string][] = [
  ["id", "Invoice ID"],
  ["company", "Company"],
  ["shippingId", "Shipping ID"],
  ["date", "Date"],
  ["amount", "Amount"],
  ["status", "Status"],
];

type InvoiceTableProps = {
  invoices: Invoice[];
  selectedId: string;
  onSelect: (id: string) => void;
};

export function InvoiceTable({ invoices, selectedId, onSelect }: InvoiceTableProps) {
  const [query, setQuery] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("id");
  const [sortAsc, setSortAsc] = useState(true);

  const rows = useMemo(() => {
    const filtered = invoices.filter((inv) =>
      `${inv.id} ${inv.company} ${inv.shippingId}`.toLowerCase().includes(query.toLowerCase())
    );
    const sorted = [...filtered].sort((a, b) => {
      let cmp = 0;
      if (sortKey === "id") cmp = a.id.localeCompare(b.id);
      if (sortKey === "company") cmp = a.company.localeCompare(b.company);
      if (sortKey === "shippingId") cmp = a.shippingId.localeCompare(b.shippingId);
      if (sortKey === "date") cmp = a.issueDate.localeCompare(b.issueDate);
      if (sortKey === "status") cmp = a.status.localeCompare(b.status);
      if (sortKey === "amount") cmp = invoiceTotals(a).total - invoiceTotals(b).total;
      return sortAsc ? cmp : -cmp;
    });
    return sorted;
  }, [invoices, query, sortKey, sortAsc]);

  function toggleSort(key: SortKey) {
    if (sortKey === key) setSortAsc((v) => !v);
    else {
      setSortKey(key);
      setSortAsc(true);
    }
  }

  return (
    <Card>
      <CardHeader
        title="Invoices"
        action={
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative flex-1 sm:flex-none">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search invoices"
                className="bg-surface w-full rounded-xl border border-border bg-white py-2 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 sm:w-40 md:w-52"
              />
            </div>
            <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border">
              <SlidersHorizontal className="h-4 w-4 text-muted bg-surface" />
            </button>
            {/* Icon-only on mobile, full label from sm up */}
            <Button size="sm" className="hidden sm:inline-flex shrink-0">
              New Invoice
            </Button>
            <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-ink text-white sm:hidden">
              <Plus className="h-4 w-4" />
            </button>
          </div>
        }
      />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[420px] md:min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-border text-xs text-muted">
              <th className="py-2 pr-3">
                <input type="checkbox" />
              </th>
              {columns.map(([key, label]) => (
                <th
                  key={key}
                  className={`py-2 pr-3 font-medium ${
                    key === "shippingId" || key === "amount" || key === "status" ? "hidden md:table-cell" : ""
                  }`}
                >
                  <button onClick={() => toggleSort(key)} className="flex items-center gap-1 hover:text-ink">
                    {label} <ChevronsUpDown className="h-3 w-3" />
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((inv) => {
              const t = invoiceTotals(inv);
              const active = inv.id === selectedId;
              return (
                <tr
                  key={inv.id}
                  onClick={() => onSelect(inv.id)}
                  className={`cursor-pointer border-b border-border/60 last:border-0 text-xs ${
                    active ? "bg-brand-light" : "hover:bg-surface"
                  }`}
                >
                  <td className="py-3 pr-3">
                    <input type="checkbox" checked={active} readOnly />
                  </td>
                  <td className="py-3 pr-3">
                    <span className="inline-flex items-center gap-1.5 font-medium">
                        <span className="text-brand-dark">
                        {inv.id} 
                        </span>
                        <FileX className="h-3.5 w-3.5" />
                    </span>
                  </td>
                  <td className="py-3 pr-3">
                    <div className="flex items-center gap-3">
                      <CompanyLogo company={inv.company} className="h-5 w-5" />
                      <div>
                        <p className="font-medium text-ink">{inv.company}</p>
                        {/* Shipping ID folds under company on mobile, hidden once its own column shows */}
                        <p className="text-[11px] text-muted md:hidden">#{inv.shippingId}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 pr-3 text-muted hidden md:table-cell">#{inv.shippingId}</td>
                  <td className="py-3 pr-3 text-muted">
                    <span className="font-bold mr-1">{inv.issueDate}</span> 
                    <span className="text-xs">(Issued)</span>
                    <br />
                    <span className="font-bold mr-1">{inv.dueDate}</span>
                    <span className="text-xs">(Due)</span>
                  </td>
                  <td className="py-3 pr-3 font-semibold text-ink hidden md:table-cell">{formatCurrency(t.total)}</td>
                  <td className="py-3 pr-3 hidden md:table-cell">
                    <Badge tone={invoiceStatusTone(inv.status)}>{inv.status}</Badge>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
}