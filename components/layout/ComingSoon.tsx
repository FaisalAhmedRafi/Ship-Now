import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Construction } from "lucide-react";

export function ComingSoon({ title, crumb }: { title: string; crumb?: string }) {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-ink sm:text-3xl">{title}</h1>
        <p className="text-sm text-muted">
          <Link href="/dashboard" className="text-brand-dark hover:underline">Dashboard</Link>
          {" / "}
          {crumb ?? title}
        </p>
      </div>
      <Card className="flex flex-col items-center justify-center gap-3 py-20 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-light text-brand-dark">
          <Construction className="h-6 w-6" />
        </span>
        <p className="text-base font-semibold text-ink">This screen isn&apos;t implemented yet</p>
        <p className="max-w-sm text-sm text-muted">
          {title} is part of the ShipNow design system and navigation, but its screen wasn&apos;t
          in this assignment&apos;s scope, so it currently renders this placeholder.
        </p>
      </Card>
    </div>
  );
}
