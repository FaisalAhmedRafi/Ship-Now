"use client";

import type { FormState } from "@/components/shipments/create/types";

export function AdditionalServicesSection({
  form,
  update,
}: {
  form: FormState;
  update: <K extends keyof FormState>(key: K, value: FormState[K]) => void;
}) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-6 border-t border-border pt-6 sm:grid-cols-2">
      <div>
        <p className="mb-3 text-sm font-medium text-ink">Additional Services</p>
        <div className="space-y-2 text-sm text-ink">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={form.insurance} onChange={(e) => update("insurance", e.target.checked)} className="h-4 w-4 accent-brand" /> Insurance Coverage
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={form.temperatureControl} onChange={(e) => update("temperatureControl", e.target.checked)} className="h-4 w-4 accent-brand" /> Temperature Control
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={form.signature} onChange={(e) => update("signature", e.target.checked)} className="h-4 w-4 accent-brand" /> Signature on Delivery
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={form.fragile} onChange={(e) => update("fragile", e.target.checked)} className="h-4 w-4 accent-brand" /> Fragile Item Handling
          </label>
        </div>
      </div>
      <div className="sm:text-right">
        <p className="mb-3 text-sm font-medium text-ink">Tracking &amp; Status Updates</p>
        <label className="inline-flex items-center gap-2 text-sm text-ink">
          <input type="checkbox" checked={form.notifyRecipient} onChange={(e) => update("notifyRecipient", e.target.checked)} className="h-5 w-9 accent-brand" />
          Notify Recipient via Email/SMS
        </label>
      </div>
    </div>
  );
}