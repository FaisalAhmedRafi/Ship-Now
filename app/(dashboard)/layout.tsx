import { Sidebar } from "@/components/layout/Sidebar";
import { MobileChrome } from "@/components/layout/MobileChrome";
import { Footer } from "@/components/layout/Footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface">
      <Sidebar />
      <MobileChrome />
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
