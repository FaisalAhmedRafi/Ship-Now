import { Badge } from "@/components/ui/Badge";
import { statusTone, type Shipment } from "@/data/shipments";
import { FreightIcon } from "./freightIcon";
import { CompanyLogo } from "./CompanyLogo";

export function ShipmentRow({
  shipment,
  selected,
  onToggle,
}: {
  shipment: Shipment;
  selected: boolean;
  onToggle: (id: string) => void;
}) {
  const s = shipment;

  return (
    <tr className="border-b border-border/60 last:border-0">
      <td className="py-3 pr-3">
        <input type="checkbox" checked={selected} onChange={() => onToggle(s.id)} />
      </td>
      <td className="py-3 pr-3">
        <p className="font-medium text-brand-dark">#{s.id}</p>
        <p className="flex items-center gap-1 text-xs text-muted">
          <FreightIcon freight={s.freight} size={16} className="text-muted" /> {s.freight}
        </p>
      </td>
      <td className="py-3 pr-3">
        <div className="flex items-center gap-2">
          <CompanyLogo company={s.company} />
          <div>
            <p className="font-medium text-ink">{s.company}</p>
            <p className="text-xs text-muted">{s.category}</p>
          </div>
        </div>
      </td>
      <td className="py-3 pr-3 text-ink">{s.carrier}</td>
      <td className="py-3 pr-3 text-ink">{s.category}</td>
      <td className="py-3 pr-3 text-ink">{s.weightKg.toLocaleString()} kg</td>
      <td className="py-3 pr-3">
        <p className="text-ink">
          {s.originCity} <span className="text-xs text-muted">(Origin)</span>
        </p>
        <p className="text-brand-dark">
          {s.destinationCity} <span className="text-xs text-muted">(Destination)</span>
        </p>
      </td>
      <td className="py-3 pr-3">
        <p className="text-ink">
          {s.originDate} <span className="text-xs text-muted">(ATD)</span>
        </p>
        <p className="text-brand-dark">
          {s.destinationDate} <span className="text-xs text-muted">(ETA)</span>
        </p>
      </td>
      <td className="py-3 pr-3">
        <div className="flex w-28 items-center gap-2">
          <div className="h-1.5 flex-1 rounded-full bg-surface">
            <div className="h-1.5 rounded-full bg-brand" style={{ width: `${s.progress}%` }} />
          </div>
          <span className="text-xs text-muted">{s.progress}%</span>
        </div>
      </td>
      <td className="py-3 pr-3">
        <Badge tone={statusTone(s.status)} dot>
          {s.status}
        </Badge>
      </td>
    </tr>
  );
}

export default ShipmentRow;