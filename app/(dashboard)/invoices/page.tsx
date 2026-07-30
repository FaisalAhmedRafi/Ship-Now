"use client";

import { useState } from "react";
import Link from "next/link";
import { invoices } from "@/data/invoices";
import { InvoiceSummaryCards } from "@/components/invoices/InvoiceSummaryCards";
import { InvoiceTable } from "@/components/invoices/InvoiceTable";
import { InvoiceDetailsPanel } from "@/components/invoices/InvoiceDetailsPanel";

export default function InvoicesPage() {
  const [selectedId, setSelectedId] = useState(invoices[7].id);
  const selected = invoices.find((i) => i.id === selectedId) ?? invoices[0];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-ink sm:text-3xl">Invoices &amp; Billing</h1>
        <p className="text-sm text-muted">
          <Link href="/dashboard" className="text-brand-dark hover:underline">
            Dashboard
          </Link>
          {" / Invoices & Billing"}
        </p>
      </div>

      <InvoiceSummaryCards />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_480px]">
        <InvoiceTable invoices={invoices} selectedId={selectedId} onSelect={setSelectedId} />
        <InvoiceDetailsPanel invoice={selected} />
      </div>
    </div>
  );
}