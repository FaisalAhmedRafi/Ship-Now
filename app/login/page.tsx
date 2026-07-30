"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { LogoLockup, LogoMark } from "@/components/ui/Logo";
import { FieldLabel, FieldError } from "@/components/ui/Input";
import { HeroIllustration } from "@/components/login/HeroIllustration";
import { cn } from "@/lib/utils";

type Errors = { email?: string; password?: string };

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  function validate(): Errors {
    const next: Errors = {};
    if (!email.trim()) {
      next.email = "Email address is required.";
    } else if (!isValidEmail(email)) {
      next.email = "Enter a valid email address.";
    }
    if (!password) {
      next.password = "Password is required.";
    } else if (password.length < 8) {
      next.password = "Password must be at least 8 characters.";
    }
    return next;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSubmitting(true);
    // No backend: simulate a session for this assignment.
    if (typeof window !== "undefined") {
      window.localStorage.setItem(
        "shipnow-session",
        JSON.stringify({ email, remember, loggedInAt: Date.now() })
      );
    }
    router.push("/dashboard");
  }

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <div className="flex flex-col justify-between bg-brand px-8 py-10 text-white lg:w-1/2 lg:px-16 lg:py-14">
        <LogoLockup className="flex items-center justify-center" markClassName="h-8 w-8" textClassName="text-white" loc="login" />
        <div className="my-5 lg:my-0 flex items-center justify-center">
          <HeroIllustration />
        </div>
        <div className="flex flex-col align-center justify-center">
          <h2 className="flex justify-center mb-2 text-3xl font-extrabold sm:text-4xl">Welcome to ShipNow</h2>
          <p className="flex justify-center text-sm text-white/80 sm:text-base">
            Manage your shipments, fleet, and warehouse in one smart dashboard.
          </p>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center px-6 py-12 sm:px-10 lg:w-1/2">
        <form onSubmit={handleSubmit} noValidate className="w-full max-w-sm">
          <div className="mb-8 flex justify-center">
            <LogoMark className="h-9 w-9" />
          </div>
          <h1 className="mb-1 text-center text-2xl font-bold text-ink">Welcome Back</h1>
          <p className="mb-8 text-center text-sm text-muted">
            Log in to continue managing your logistics with ShipNow
          </p>

          <div className="mb-5">
            <FieldLabel htmlFor="email">Email Address</FieldLabel>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter a valid email address"
              className={cn(
                "w-full rounded-xl border bg-surface px-4 py-3 text-sm text-ink placeholder:text-muted",
                "focus:outline-none focus:ring-2 focus:ring-brand/40",
                errors.email ? "border-danger" : "border-transparent"
              )}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && <p id="email-error"><FieldError>{errors.email}</FieldError></p>}
          </div>

          <div className="mb-5">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a strong password"
                className={cn(
                  "w-full rounded-xl border bg-surface px-4 py-3 pr-11 text-sm text-ink placeholder:text-muted",
                  "focus:outline-none focus:ring-2 focus:ring-brand/40",
                  errors.password ? "border-danger" : "border-transparent"
                )}
                aria-invalid={!!errors.password}
                aria-describedby={errors.password ? "password-error" : undefined}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-ink"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {errors.password && <p id="password-error"><FieldError>{errors.password}</FieldError></p>}
          </div>

          <div className="mb-6 flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-ink">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="h-4 w-4 rounded border-border accent-brand"
              />
              Remember Me
            </label>
            <Link href="#" className="font-medium text-brand hover:underline">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-xl bg-ink py-3 text-sm font-semibold text-white hover:bg-black disabled:opacity-60"
          >
            {submitting ? "Logging in..." : "Login"}
          </button>

          <p className="mt-6 text-center text-sm text-muted">
            Don&apos;t have an account?{" "}
            <Link href="#" className="font-semibold text-brand hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
