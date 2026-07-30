"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

// ── Static imports for your company logos ───────────────────────────────────
import TechGearLogo from "@/assets/CompanyLogo/TechGear.png";
import StyleHubLogo from "@/assets/CompanyLogo/StyleHub.png";
import FreshNestLogo from "@/assets/CompanyLogo/FreshNest.png";
import FitPlusLogo from "@/assets/CompanyLogo/FitPlus.png";
import EcoLightsLogo from "@/assets/CompanyLogo/EcoLights.png";
import AutoPartsProLogo from "@/assets/CompanyLogo/AutoParts.png";
import GreenHavenLogo from "@/assets/CompanyLogo/GreenHaven.png";
import ModaWearLogo from "@/assets/CompanyLogo/ModaWear.png";
import SunCorePanelsLogo from "@/assets/CompanyLogo/SunCore.png";
import QuickPartsLogo from "@/assets/CompanyLogo/QuickParts.png";
import VitaFreshLogo from "@/assets/CompanyLogo/VitaFresh.png";
import StyleDepotLogo from "@/assets/CompanyLogo/StyleDepot.png";

const logoByCompany: Record<string, typeof TechGearLogo> = {
  "TechGear Inc.": TechGearLogo,
  "StyleHub Co.": StyleHubLogo,
  "FreshNest": FreshNestLogo,
  "FitPlus Gear": FitPlusLogo,
  "EcoLights": EcoLightsLogo,
  "AutoParts Pro": AutoPartsProLogo,
  "GreenHaven": GreenHavenLogo,
  "ModaWear": ModaWearLogo,
  "SunCore Panels": SunCorePanelsLogo,
  "QuickParts": QuickPartsLogo,
  "VitaFresh": VitaFreshLogo,
  "StyleDepot": StyleDepotLogo,
};

export function CompanyLogo({
  company,
  className = "h-9 w-9",
}: {
  company: string;
  className?: string;
}) {
  const logo = logoByCompany[company];

  if (!logo) {
    return (
      <span className={cn("inline-flex shrink-0 items-center justify-center rounded-lg bg-surface text-xs font-medium text-ink", className)}>
        {company.charAt(0)}
      </span>
    );
  }

  return (
    <span className={cn("inline-flex shrink-0 items-center justify-center overflow-hidden rounded-lg bg-surface", className)}>
      <Image src={logo} alt={company} className="h-full w-full object-contain" />
    </span>
  );
}

export default CompanyLogo;