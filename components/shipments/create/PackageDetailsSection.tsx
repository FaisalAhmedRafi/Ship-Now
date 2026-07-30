"use client";

import { cn } from "@/lib/utils";
import { FieldLabel, FieldError } from "@/components/ui/Input";
import { StepperButtons } from "../../ui/StepperButtons";
import { inputClass } from "./utils";
import type { FormErrors, FormState } from "@/components/shipments/create/types";

export function PackageDetailsSection({
  form,
  errors,
  update,
  onStepQuantity,
  onStepValue,
  onStepWeight,
  onStepLength,
  onStepWidth,
  onStepHeight,
}: {
  form: FormState;
  errors: FormErrors;
  update: <K extends keyof FormState>(key: K, value: FormState[K]) => void;
  onStepQuantity: (delta: number) => void;
  onStepValue: (delta: number) => void;
  onStepWeight: (delta: number) => void;
  onStepLength: (delta: number) => void;
  onStepWidth: (delta: number) => void;
  onStepHeight: (delta: number) => void;
}) {
  return (
    <div>
      <h3 className="mb-4 font-semibold text-ink">Package Details</h3>
      <div className="mb-4">
        <FieldLabel htmlFor="itemDescription">Item Description</FieldLabel>
        <input
          id="itemDescription"
          className={inputClass(!!errors.itemDescription)}
          value={form.itemDescription}
          onChange={(e) => update("itemDescription", e.target.value)}
          placeholder="e.g. Premium Garden Tool Set"
        />
        <FieldError>{errors.itemDescription}</FieldError>
      </div>

      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <FieldLabel htmlFor="quantity">Quantity</FieldLabel>
          <div className="relative group">
            <input
              id="quantity"
              type="number"
              min={1}
              className={cn(inputClass(!!errors.quantity), "pr-8 appearance-none no-spinner")}
              value={form.quantity}
              onChange={(e) => update("quantity", e.target.value)}
              placeholder="1"
            />
            <StepperButtons
              onIncrement={() => onStepQuantity(1)}
              onDecrement={() => onStepQuantity(-1)}
              incrementLabel="Increase quantity"
              decrementLabel="Decrease quantity"
            />
          </div>
          <FieldError>{errors.quantity}</FieldError>
        </div>
        <div>
          <FieldLabel htmlFor="value">Value</FieldLabel>
          <div className="relative group">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-muted">$</span>
            <input
              id="value"
              type="number"
              min={0}
              className={cn(inputClass(!!errors.value), "pl-7 pr-8 appearance-none no-spinner")}
              value={form.value}
              onChange={(e) => update("value", e.target.value)}
              placeholder="0"
            />
            <StepperButtons
              onIncrement={() => onStepValue(1)}
              onDecrement={() => onStepValue(-1)}
              incrementLabel="Increase value"
              decrementLabel="Decrease value"
            />
          </div>
          <FieldError>{errors.value}</FieldError>
        </div>
      </div>

      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <FieldLabel htmlFor="weight">Weight</FieldLabel>
          <div className="relative group">
            <input
              id="weight"
              type="number"
              min={0}
              className={cn(inputClass(!!errors.weight), "pr-8 appearance-none no-spinner")}
              value={form.weight}
              onChange={(e) => update("weight", e.target.value)}
              placeholder="0"
            />
            <StepperButtons
              onIncrement={() => onStepWeight(1)}
              onDecrement={() => onStepWeight(-1)}
              incrementLabel="Increase weight"
              decrementLabel="Decrease weight"
            />
          </div>
          <FieldError>{errors.weight}</FieldError>
        </div>
        <div>
          <FieldLabel htmlFor="weightUnit">Units</FieldLabel>
          <select id="weightUnit" className={cn("w-6/12", inputClass(false))} value={form.weightUnit} onChange={(e) => update("weightUnit", e.target.value)}>
            <option>Kg</option>
            <option>Lb</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        
        <div>
          <div className="relative group">
            <input
              id="length"
              type="number"
              min={0}
              className={cn(inputClass(!!errors.length), "pr-16 appearance-none no-spinner")}
              value={form.length}
              onChange={(e) => update("length", e.target.value)}
              placeholder="80"
            />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted">cm</span>
            <StepperButtons
              className="right-10"
              onIncrement={() => onStepLength(1)}
              onDecrement={() => onStepLength(-1)}
              incrementLabel="Increase length"
              decrementLabel="Decrease length"
            />
          </div>
          <p className="mt-1 text-xs text-muted">Length</p>
          <FieldError>{errors.length}</FieldError>
        </div>
        <div>
          <div className="relative group">
            <input
              id="width"
              type="number"
              min={0}
              className={cn(inputClass(!!errors.width), "pr-16 appearance-none no-spinner")}
              value={form.width}
              onChange={(e) => update("width", e.target.value)}
              placeholder="60"
            />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted">cm</span>
            <StepperButtons
              className="right-10"
              onIncrement={() => onStepWidth(1)}
              onDecrement={() => onStepWidth(-1)}
              incrementLabel="Increase width"
              decrementLabel="Decrease width"
            />
          </div>
          <p className="mt-1 text-xs text-muted">Width</p>
          <FieldError>{errors.width}</FieldError>
        </div>
        <div>
          <div className="relative group">
            <input
              id="height"
              type="number"
              min={0}
              className={cn(inputClass(false), "pr-16 appearance-none no-spinner")}
              value={form.height}
              onChange={(e) => update("height", e.target.value)}
              placeholder="ex. 20"
            />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted">cm</span>
            <StepperButtons
              className="right-10"
              onIncrement={() => onStepHeight(1)}
              onDecrement={() => onStepHeight(-1)}
              incrementLabel="Increase height"
              decrementLabel="Decrease height"
            />
          </div>
          <p className="mt-1 text-xs text-muted">Height</p>
          <FieldError>{errors.height}</FieldError>
        </div>
      </div>
    </div>
  );
}