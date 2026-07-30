'use client';

import { usePathname } from "next/navigation";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileChrome } from "@/components/layout/MobileChrome";
import { Footer } from "@/components/layout/Footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const mobileTitle = (() => {
    const routeTitles: Record<string, string> = {
      "/dashboard": "Dashboard",
      "/analytics": "Analytics",
      "/calendar": "Calendar",
      "/create-shipment": "Create Shipment",
      "/drivers": "Drivers",
      "/fleets": "Fleets",
      "/invoices": "Invoices",
      "/messages": "Messages",
      "/notifications": "Notifications",
      "/settings": "Settings",
      "/shipments": "Shipments",
      "/tracking": "Tracking",
      "/warehouse": "Warehouse",
    };

    return routeTitles[pathname] ?? "Dashboard";
  })();
  const showBack = pathname === "/create-shipment";
  const hideActions = pathname !== "/shipments";

  return (
    <div className="min-h-screen bg-surface">
      <Sidebar />
      <MobileChrome title={mobileTitle} showBack={showBack} hideActions={hideActions} />
      <div className="pt-16 md:ml-20 md:pt-0 lg:ml-72">
        <main className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {children}
        </main>
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <Footer />
        </div>
      </div>
    </div>
  );
}