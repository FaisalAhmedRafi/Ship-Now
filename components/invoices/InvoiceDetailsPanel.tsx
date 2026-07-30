import { Card, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Invoice, invoiceStatusTone, invoiceTotals } from "@/data/invoices";
import { formatCurrency } from "@/lib/utils";
import { ChevronsUpDown } from "lucide-react";

type InvoiceDetailsPanelProps = {
  invoice: Invoice;
};

export function InvoiceDetailsPanel({ invoice }: InvoiceDetailsPanelProps) {
  const totals = invoiceTotals(invoice);
  const invoiceTone = invoiceStatusTone(invoice.status);
  const invoiceIdTextClass =
    invoiceTone === "success"
      ? "text-success"
      : invoiceTone === "brand"
      ? "text-brand-dark"
      : invoiceTone === "neutral"
      ? "text-neutralpill"
      : "text-ink";

  return (
    <Card>
      <CardHeader
        title="Invoice Details"
        action={
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="bg-surface flex-1 sm:flex-none">Edit</Button>
            <Button variant="outline" size="sm" className="bg-surface flex-1 sm:flex-none">Hold</Button>
            <Button size="sm" className="flex-1 sm:flex-none">Send Invoice</Button>
          </div>
        }
      />
      <div className="rounded-xl border border-border p-4">
        <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
          <div>
            <p className="text-sm font-semibold ">Invoice <span className={`${invoiceIdTextClass}`}>#{invoice.id}</span></p>
            <Badge tone={invoiceStatusTone(invoice.status)} className="mt-1">
              {invoice.status}
            </Badge>
          </div>
          <div className="text-right text-xs text-muted">
            <p>
              Issue Date <span className="font-medium text-ink">{invoice.issueDate}</span>
            </p>
            <p>
              Due Date <span className="font-medium text-ink">{invoice.dueDate}</span>
            </p>
          </div>
        </div>

        <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 text-xs bg-surface rounded-lg p-4">
          <div>
            <p className="mb-1 font-medium text-muted">Bill From</p>
            <p className="font-semibold text-base">{invoice.billFrom.name}</p>
            <p className="text-muted">{invoice.billFrom.email}</p>
            <p className="text-muted">{invoice.billFrom.address}</p>
            <p className="text-muted">{invoice.billFrom.phone}</p>
          </div>
          <div className="sm:text-right">
            <p className="mb-1 font-medium text-muted">Bill To</p>
            <p className="font-semibold text-base">{invoice.billTo.name}</p>
            <p className="text-muted">{invoice.billTo.email}</p>
            <p className="text-muted">{invoice.billTo.address}</p>
            <p className="text-muted">{invoice.billTo.phone}</p>
          </div>
        </div>

        <p className="mb-2 text-sm font-semibold text-ink">Package Summary</p>
        <div className="mb-3 border border-border rounded-lg text-[10px] overflow-x-auto">
          <table className="w-full min-w-[320px] text-left">
            <thead className="bg-surface">
              <tr className="border-b border-border text-muted">
                <th className="py-2 pr-2 pl-2 font-medium">
                  <div className="inline-flex items-center gap-1 whitespace-nowrap">
                    <span>Description</span>
                    <span className="flex h-6 w-6 items-center justify-begin rounded text-muted hover:text-ink">
                      <ChevronsUpDown className="w-3 h-3" />
                    </span>
                  </div>
                </th>
                <th className="py-2 pr-2 font-medium">
                  <div className="inline-flex items-center gap-1 whitespace-nowrap">
                    <span>Shipment Type</span>
                    <span className="flex h-6 w-6 items-center justify-begin rounded text-muted hover:text-ink">
                      <ChevronsUpDown className="w-3 h-3" />
                    </span>
                  </div>
                </th>
                <th className="py-2 pr-2 font-medium hidden sm:table-cell">
                  <div className="inline-flex items-center gap-1 whitespace-nowrap">
                    <span>Price</span>
                    <span className="flex h-6 w-6 items-center justify-begin rounded text-muted hover:text-ink">
                      <ChevronsUpDown className="w-3 h-3" />
                    </span>
                  </div>
                </th>
                <th className="py-2 pr-2 font-medium hidden sm:table-cell">
                  <div className="inline-flex items-center gap-1 whitespace-nowrap">
                    <span>Qty</span>
                    <span className="flex h-6 w-6 items-center justify-begin rounded text-muted hover:text-ink">
                      <ChevronsUpDown className="w-3 h-3" />
                    </span>
                  </div>
                </th>
                <th className="py-2 pr-2 font-medium">
                  <div className="inline-flex items-center gap-1 whitespace-nowrap">
                    <span>Amount</span>
                    <span className="flex h-6 w-6 items-center justify-begin rounded text-muted hover:text-ink">
                      <ChevronsUpDown className="w-3 h-3" />
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {invoice.lineItems.map((li) => (
                <tr key={li.id} className="border-b border-border/60">
                  <td className="py-2 pr-2 pl-2 text-ink pb-3">
                    {li.description}
                    {/* Price x Qty folds under description on mobile where those columns are hidden */}
                    <p className="text-muted sm:hidden">
                      {formatCurrency(li.price)} x {li.qty}
                    </p>
                  </td>
                  <td className="py-2 pr-2 text-muted pb-3">{li.shipmentType}</td>
                  <td className="py-2 pr-2 text-muted pb-3 hidden sm:table-cell">{formatCurrency(li.price)}</td>
                  <td className="py-2 pr-2 text-muted pb-3 hidden sm:table-cell">{li.qty}</td>
                  <td className="py-2 pr-2 text-right font-medium text-ink pb-3">
                    {formatCurrency(li.price * li.qty)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        

            <div className="ml-auto mr-2 max-w-full sm:max-w-[220px] space-y-1 text-xs px-2 sm:px-0">
            <div className="flex justify-between pt-3 pb-3">
                <span className="text-muted">Sub Total</span>
                <span className="text-ink">{formatCurrency(totals.subTotal)}</span>
            </div>
            <div className="flex justify-between pb-3">
                <span className="text-muted">Tax ({Math.round(invoice.taxRate * 100)}%)</span>
                <span className="text-ink">{formatCurrency(totals.tax)}</span>
            </div>
            <div className="flex justify-between pb-3">
                <span className="text-muted">Fee</span>
                <span className="text-ink">{formatCurrency(invoice.fee)}</span>
            </div>
            <div className="flex justify-between border-t border-border pt-3 pb-3 font-semibold text-sm">
                <span>Total</span>
                <span>{formatCurrency(totals.total)}</span>
            </div>
            </div>
        </div>
        <div className="mt-4 pt-3 text-xs text-muted">
          <p className="mb-1 font-medium text-ink">Note</p>
          <p>{invoice.note}</p>
        </div>
      </div>
    </Card>
  );
}