import { type ComponentType, type SVGProps } from "react";
import { Card } from "@/components/ui/Card";
import { BadgeCheck, CircleDashed } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import xmonitor from "@/assets/invoiceIcon/ReceiptX.png";
import Clock from "@/assets/invoiceIcon/ClockCountdown.png";

type LucideIconComponent = ComponentType<SVGProps<SVGSVGElement>>;

type SummaryCard = {
  label: string;
  value: string;
  from: number;
  icon: LucideIconComponent | StaticImageData;
  tone: "success" | "brand" | "warning" | "neutral";
};

function isStaticImageData(icon: unknown): icon is StaticImageData {
  return typeof icon === "object" && icon !== null && "src" in icon;
}

const summaryCards: SummaryCard[] = [
  { label: "Paid Invoices", value: "$28,890", from: 350, icon: BadgeCheck, tone: "success" },
  { label: "Unpaid Invoices", value: "$16,700", from: 120, icon: xmonitor, tone: "brand" },
  { label: "Pending Invoices", value: "$8,050", from: 80, icon: CircleDashed, tone: "warning" },
  { label: "Overdue Invoices", value: "$22,110", from: 245, icon: Clock, tone: "neutral" },
];

export function InvoiceSummaryCards() {
  return (
    <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {summaryCards.map((c) => (
        <Card key={c.label} className="flex items-start justify-between gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
            {isStaticImageData(c.icon) ? (
              <Image src={c.icon} alt={c.label} className="h-5 w-5 object-contain" />
            ) : (
              <c.icon className="h-5 w-5" />
            )}
          </span>
          <div>
            <p className="mb-2 text-sm text-muted">{c.label}</p>
            <p className="mb-2 text-2xl font-bold text-ink">{c.value}</p>
            <p className="text-xs text-muted">
              from{" "}
              <span className="rounded-full bg-[#DCFCE7] px-2 py-0.5 font-semibold text-success">
                {c.from}
              </span>{" "}
              Invoices
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}