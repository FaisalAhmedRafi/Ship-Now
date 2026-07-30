"use client";

import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function ShipmentSubmittedCard({
  shipmentId,
  recipientCompany,
  onEditAgain,
}: {
  shipmentId: string;
  recipientCompany: string;
  onEditAgain: () => void;
}) {
  const router = useRouter();

  return (
    <div className="mx-auto max-w-lg py-20 text-center">
      <Card>
        <h1 className="mb-2 text-xl font-bold text-ink">Shipment Submitted</h1>
        <p className="mb-6 text-sm text-muted">
          Shipment {shipmentId} has been created for {recipientCompany}. This is a simulated
          submission — no backend is connected in this assignment build.
        </p>
        <div className="flex justify-center gap-3">
          <Button variant="outline" onClick={onEditAgain}>Edit again</Button>
          <Button onClick={() => router.push("/shipments")}>Go to Shipments</Button>
        </div>
      </Card>
    </div>
  );
}