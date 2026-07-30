import { clsx, type ClassValue } from "clsx";


export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatCurrency(value: number) {
  return `$${value.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })}`;
}

export function formatCurrencyCompact(value: number) {
  return `$${value.toLocaleString("en-US")}`;
}
