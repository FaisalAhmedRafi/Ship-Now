import type { StaticImageData } from "next/image";

import dashboard from "@/assets/nav/dashboard.png";
import analytics from "@/assets/nav/analytics.png";
import calendar from "@/assets/nav/calendar.png";
import shipment from "@/assets/nav/shipment.png";
import tracking from "@/assets/nav/tracking.png";
import warehouse from "@/assets/nav/warehouse.png";
import fleets from "@/assets/nav/fleets.png";
import driver from "@/assets/nav/driver.png";
import invoice from "@/assets/nav/invoice.png";
import message from "@/assets/nav/message.png";
import notification from "@/assets/nav/notification.png";
import setting from "@/assets/nav/setting.png";

export type NavItem = {
  label: string;
  href: string;
  icon: StaticImageData;
  badge?: number;
  implemented: boolean;
};

export const primaryNav: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: dashboard, implemented: true },
  { label: "Analytics", href: "/analytics", icon: analytics, implemented: false },
  { label: "Calendar", href: "/calendar", icon: calendar, implemented: false },
  { label: "Shipments", href: "/shipments", icon: shipment, implemented: true },
  { label: "Tracking", href: "/tracking", icon: tracking, implemented: false },
  { label: "Warehouse", href: "/warehouse", icon: warehouse, implemented: true },
  { label: "Fleets", href: "/fleets", icon: fleets, implemented: false },
  { label: "Drivers", href: "/drivers", icon: driver, implemented: false },
  {
    label: "Invoices & Billing",
    href: "/invoices",
    icon: invoice,
    implemented: true,
  },
];

export const secondaryNav: NavItem[] = [
  { label: "Message", href: "/messages", icon: message, badge: 19, implemented: false },
  { label: "Notification", href: "/notifications", icon: notification, badge: 5, implemented: false },
  { label: "Settings", href: "/settings", icon: setting, implemented: false },
];