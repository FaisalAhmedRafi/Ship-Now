"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

import { SenderRecipientSection } from "@/components/shipments/create/SenderRecipientSection";
import { PackageDetailsSection } from "@/components/shipments/create/PackageDetailsSection";
import { ShippingDetailsSection } from "@/components/shipments/create/ShippingDetailsSection";
import { AdditionalServicesSection } from "@/components/shipments/create/AdditionalServicesSection";
import { ShipmentSubmittedCard } from "@/components/shipments/create/ShipmentSubmittedCard";
import { generateShipmentId, formatToday } from "@/components/shipments/create/utils";
import { COUNTRIES, initialFormState, validateForm, type Country, type FormState } from "@/components/shipments/create/types";

const shipmentId = generateShipmentId();
const shipmentDate = formatToday();

export default function CreateShipmentPage() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState(validateForm(initialFormState) && {});
  const [submitted, setSubmitted] = useState(false);
  const [senderCountry, setSenderCountry] = useState<Country>(COUNTRIES[0]);
  const [recipientCountry, setRecipientCountry] = useState<Country>(COUNTRIES[0]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function stepQuantity(delta: number) {
    const next = Math.max(0, Number(form.quantity || 0) + delta);
    update("quantity", String(next));
  }

  function stepValue(delta: number) {
    const next = Math.max(0, Number(form.value || 0) + delta);
    update("value", String(next));
  }

  function stepWeight(delta: number) {
    const next = Math.max(0, Number(form.weight || 0) + delta);
    update("weight", String(next));
  }

  function stepLength(delta: number) {
    const next = Math.max(0, Number(form.length || 0) + delta);
    update("length", String(next));
  }

  function stepWidth(delta: number) {
    const next = Math.max(0, Number(form.width || 0) + delta);
    update("width", String(next));
  }

  function stepHeight(delta: number) {
    const next = Math.max(0, Number(form.height || 0) + delta);
    update("height", String(next));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next = validateForm(form);
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setSubmitted(false);
      const firstKey = Object.keys(next)[0];
      document.getElementById(firstKey)?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setSubmitted(true);
  }

  function handleDelete() {
    setForm(initialFormState);
    setErrors({});
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <ShipmentSubmittedCard
        shipmentId={shipmentId}
        recipientCompany={form.recipientCompany}
        onEditAgain={() => setSubmitted(false)}
      />
    );
  }

  return (
    <div>
      <div className="mb-6 hidden items-center gap-3 md:flex">
        <button onClick={() => router.back()} className="flex h-9 w-9 items-center justify-center rounded-xl border border-border">
          <ArrowLeft className="h-4 w-4" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-ink sm:text-3xl">Create New Shipment</h1>
          <p className="text-sm text-muted">
            <Link href="/dashboard" className="text-brand-dark hover:underline">Dashboard</Link>
            {" / "}
            <Link href="/shipments" className="text-brand-dark hover:underline">Shipments</Link>
            {" / Create New Shipment"}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <Card className="mb-6">
          <h2 className="mb-4 text-base font-semibold text-ink">Shipment Form</h2>

          <div className="mb-6 grid grid-cols-1 gap-6 rounded-xl bg-surface p-4 lg:grid-cols-2">
            <SenderRecipientSection
              title="Sender Info"
              companyKey="senderCompany"
              emailKey="senderEmail"
              phoneKey="senderPhone"
              addressKey="pickupAddress"
              addressLabel="Pickup Address"
              addressPlaceholder="Street address, city, state/province, ZIP code"
              form={form}
              errors={errors}
              update={update}
              country={senderCountry}
              onCountryChange={setSenderCountry}
            />
            <SenderRecipientSection
              title="Recipient Info"
              companyKey="recipientCompany"
              emailKey="recipientEmail"
              phoneKey="recipientPhone"
              addressKey="deliveryAddress"
              addressLabel="Delivery Address"
              addressPlaceholder="Street address, city, state/province, ZIP code"
              form={form}
              errors={errors}
              update={update}
              country={recipientCountry}
              onCountryChange={setRecipientCountry}
            />
          </div>

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-5">
            <div className="xl:col-span-2">
              <PackageDetailsSection
                form={form}
                errors={errors}
                update={update}
                onStepQuantity={stepQuantity}
                onStepValue={stepValue}
                onStepWeight={stepWeight}
                onStepLength={stepLength}
                onStepWidth={stepWidth}
                onStepHeight={stepHeight}
              />
            </div>
            <div className="xl:col-span-3">
              <ShippingDetailsSection form={form} errors={errors} update={update} shipmentId={shipmentId} shipmentDate={shipmentDate} />
            </div>
          </div>
        </Card>

        <div className="flex justify-end gap-3">
          <Button type="button" variant="outline" onClick={handleDelete} className="bg-gray-200">Delete Form</Button>
          <Button type="submit">Submit Shipment</Button>
        </div>
      </form>
    </div>
  );
}