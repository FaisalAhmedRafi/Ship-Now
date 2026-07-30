import { Badge } from "@/components/ui/Badge";
import { statusTone, type Shipment } from "@/data/shipments";
import { FreightIcon } from "./freightIcon";
import { CompanyLogo } from "./CompanyLogo";
import { MapPin } from "lucide-react";

export function ShipmentCard({ shipment }: { shipment: Shipment }) {
  const s = shipment;

  return (
    <div className="rounded-2xl border border-border p-4">
      {/* Mobile-only: icon left, id+status beside it, company on the right — all one row */}
      <div className="mb-3 flex items-center justify-between border-b border-border pb-3 sm:hidden">
        <div className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface text-ink">
            <FreightIcon freight={s.freight} size={20} />
          </span>
          <div>
            <p className="font-semibold text-ink">#{s.id}</p>
            <Badge tone={statusTone(s.status)} className="mt-1">{s.status}</Badge>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-right">
            <p className="text-sm font-medium text-ink">{s.company}</p>
            <p className="text-xs text-muted">{s.category}</p>
          </div>
          <CompanyLogo company={s.company} />
        </div>
      </div>

      {/* Tablet/Desktop: original two-row layout */}
      <div className="hidden sm:block">
        <div className="mb-3 flex items-start justify-between border-b border-border pb-3">
          <div>
            <p className="font-semibold text-ink">#{s.id}</p>
            <Badge tone={statusTone(s.status)} className="mt-2">{s.status}</Badge>
          </div>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface text-ink">
            <FreightIcon freight={s.freight} size={20} />
          </span>
        </div>

        <div className="mb-3 flex items-center gap-2 pb-3">
          <CompanyLogo company={s.company} />
          <div>
            <p className="text-sm font-medium text-ink">{s.company}</p>
            <p className="text-xs text-muted">{s.category}</p>
          </div>
        </div>
      </div>

      <div className="mb-3 flex gap-4 rounded-xl bg-surface p-3">
        <div className="flex flex-col items-center">
          <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-brand/20">
            <span className="h-3 w-3 rounded-full bg-brand" />
          </span>
          <span className="w-px flex-1 bg-border" />
          <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-brand/20">
            <MapPin className="h-3.5 w-3.5 text-brand" />
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs mb-3 text-muted">Origin</span>
            <div className="text-right">
              <p className="text-[14px] font-semibold text-ink">{s.originCity}</p>
              <p className="text-[11px] text-muted">{s.originDate}</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs mt-8 text-muted">Destination</span>
            <div className="text-right">
              <p className="text-[14px] font-semibold text-ink">{s.destinationCity}</p>
              <p className="text-[11px] text-muted">{s.destinationDate}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs">
        <span className="text-muted">
          Progress <strong className="text-ink">{s.progress}%</strong>
        </span>
        <span className="text-muted">
          Carriers <strong className="text-ink">{s.carrier}</strong>
        </span>
      </div>

      <div className="mt-2 h-1.5 rounded-full bg-surface">
        <div className="h-1.5 rounded-full bg-brand" style={{ width: `${s.progress}%` }} />
      </div>
    </div>
  );
}

export default ShipmentCard;