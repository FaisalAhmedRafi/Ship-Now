"use client";

import { cn } from "@/lib/utils";
import { FieldLabel, FieldError } from "@/components/ui/Input";
import { PhoneField } from "./PhoneFeild";
import { inputClass } from "./utils";
import type { Country, FormErrors, FormState } from "./types";

export function SenderRecipientSection({
  title,
  companyKey,
  emailKey,
  phoneKey,
  addressKey,
  addressLabel,
  addressPlaceholder,
  form,
  errors,
  update,
  country,
  onCountryChange,
}: {
  title: string;
  companyKey: "senderCompany" | "recipientCompany";
  emailKey: "senderEmail" | "recipientEmail";
  phoneKey: "senderPhone" | "recipientPhone";
  addressKey: "pickupAddress" | "deliveryAddress";
  addressLabel: string;
  addressPlaceholder: string;
  form: FormState;
  errors: FormErrors;
  update: <K extends keyof FormState>(key: K, value: FormState[K]) => void;
  country: Country;
  onCountryChange: (c: Country) => void;
}) {
  return (
    <div className="border-r border-border pr-4 last:border-r-0 lg:pr-6">
      <h3 className="mb-4 font-semibold text-ink">{title}</h3>
      <div className="mb-4">
        <FieldLabel htmlFor={companyKey}>Company</FieldLabel>
        <input
          id={companyKey}
          className={cn(inputClass(!!errors[companyKey]), "bg-white")}
          value={form[companyKey]}
          onChange={(e) => update(companyKey, e.target.value)}
          placeholder="Company name"
        />
        <FieldError>{errors[companyKey]}</FieldError>
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor={emailKey}>Email</FieldLabel>
          <input
            id={emailKey}
            type="email"
            className={cn(inputClass(!!errors[emailKey]), "bg-white")}
            value={form[emailKey]}
            onChange={(e) => update(emailKey, e.target.value)}
            placeholder="name@company.com"
          />
          <FieldError>{errors[emailKey]}</FieldError>
        </div>
        <div>
          <FieldLabel htmlFor={phoneKey}>Phone Number</FieldLabel>
          <PhoneField
            id={phoneKey}
            value={form[phoneKey]}
            onChange={(v) => update(phoneKey, v)}
            country={country}
            onCountryChange={onCountryChange}
            hasError={!!errors[phoneKey]}
          />
          <FieldError>{errors[phoneKey]}</FieldError>
        </div>
      </div>
      <div>
        <FieldLabel htmlFor={addressKey}>{addressLabel}</FieldLabel>
        <input
          id={addressKey}
          className={cn(inputClass(!!errors[addressKey]), "bg-white")}
          value={form[addressKey]}
          onChange={(e) => update(addressKey, e.target.value)}
          placeholder={addressPlaceholder}
        />
        <FieldError>{errors[addressKey]}</FieldError>
      </div>
    </div>
  );
}