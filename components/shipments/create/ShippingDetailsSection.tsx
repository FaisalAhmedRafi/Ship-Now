"use client";

import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { FieldLabel, FieldError } from "@/components/ui/Input";
import { inputClass } from "./utils";
import type { FormErrors, FormState, FreightType } from "./types";
import { ToggleSwitch } from "../../ui/ToggleSwitch";
import { Checkbox } from "@/components/ui/Checkbox";

const FREIGHT_TYPES: FreightType[] = ["Road Freight", "Rail Freight", "Ocean Freight", "Air Freight"];

export function ShippingDetailsSection({
  form,
  errors,
  update,
  shipmentId,
  shipmentDate,
}: {
  form: FormState;
  errors: FormErrors;
  update: <K extends keyof FormState>(key: K, value: FormState[K]) => void;
  shipmentId: string;
  shipmentDate: string;
}) {
  return (
    <div>
      <h3 className="mb-4 font-semibold text-ink">Shipping Details</h3>

      <div className="mb-4">
        <FieldLabel>Freight Type</FieldLabel>
        <div className="flex flex-wrap gap-4">
          {FREIGHT_TYPES.map((f) => (
            <label key={f} className="flex items-center gap-2 text-sm text-ink">
              <input
                type="radio"
                name="freightType"
                checked={form.freightType === f}
                onChange={() => update("freightType", f)}
                className="h-4 w-4 accent-brand"
              />
              {f}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <div>
          <FieldLabel htmlFor="carrier">Carrier</FieldLabel>
          <select id="carrier" className={inputClass(!!errors.carrier)} value={form.carrier} onChange={(e) => update("carrier", e.target.value)}>
            <option value="">Select Carrier</option>
            <option>FedEx</option>
            <option>DHL</option>
            <option>UPS</option>
            <option>USPS</option>
            <option>Aramex</option>
          </select>
          <FieldError>{errors.carrier}</FieldError>
        </div>
        <div>
          <FieldLabel htmlFor="shippingMethod">Shipping Method</FieldLabel>
          <select id="shippingMethod" className={inputClass(!!errors.shippingMethod)} value={form.shippingMethod} onChange={(e) => update("shippingMethod", e.target.value)}>
            <option value="">Select Method</option>
            <option>Standard</option>
            <option>Express</option>
            <option>Overnight</option>
          </select>
          <FieldError>{errors.shippingMethod}</FieldError>
        </div>
        <div>
          <FieldLabel>Shipment ID</FieldLabel>
          <input disabled className={cn(inputClass(false), "text-muted")} value={shipmentId} readOnly />
          <p className="mt-1 text-xs text-muted">Auto-generated</p>
        </div>
        <div>
          <FieldLabel>Shipment Date</FieldLabel>
          <div className="relative">
            <input disabled className={cn(inputClass(false), "pr-9 text-muted")} value={shipmentDate} readOnly />
            <Calendar className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <FieldLabel htmlFor="notes">Notes</FieldLabel>
        <textarea
          id="notes"
          rows={2}
          className={inputClass(false)}
          value={form.notes}
          onChange={(e) => update("notes", e.target.value)}
          placeholder="Add special delivery notes (optional)"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 border-t border-border pt-6 sm:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-medium text-muted">Additional Services</p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            <Checkbox checked={form.insurance} onChange={(v) => update("insurance", v)} label="Insurance Coverage" />
            <Checkbox checked={form.temperatureControl} onChange={(v) => update("temperatureControl", v)} label="Temperature Control" />
            <Checkbox checked={form.signature} onChange={(v) => update("signature", v)} label="Signature on Delivery" />
            <Checkbox checked={form.fragile} onChange={(v) => update("fragile", v)} label="Fragile Item Handling" />
          </div>
        </div>
        <div className="sm:text-right">
          <p className="mb-3 mr-16 text-sm font-medium text-muted">Tracking &amp; Status Updates</p>
          <div className="flex items-center justify-end">
            <ToggleSwitch
              checked={form.notifyRecipient}
              onChange={(v) => update("notifyRecipient", v)}
              label="Notify Recipient via Email/SMS"
            />
          </div>
        </div>
      </div>
    </div>
  );
}