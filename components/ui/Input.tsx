import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & { error?: string }
>(({ className, error, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-xl border bg-surface px-4 py-3 text-sm text-ink placeholder:text-muted",
        "focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand",
        error ? "border-brand" : "border-transparent",
        className
      )}
      aria-invalid={!!error}
      {...props}
    />
  );
});
Input.displayName = "Input";

export function FieldLabel({
  htmlFor,
  children,
}: {
  htmlFor?: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-ink">
      {children}
    </label>
  );
}

export function FieldError({ children }: { children?: string }) {
  if (!children) return null;
  return <p className="mt-1.5 text-xs font-medium text-brand-dark">{children}</p>;
}
