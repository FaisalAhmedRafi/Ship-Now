export const shipmentStatistic = [
  { month: "Jan", value: 1400 },
  { month: "Feb", value: 1550 },
  { month: "Mar", value: 1300 },
  { month: "Apr", value: 1750 },
  { month: "May", value: 3124  },
  { month: "Jun", value: 2050 },
  { month: "Jul", value: 2400 },
  { month: "Aug", value: 3450 },
];

export const profitSummary = [
  { month: "Jan", revenue: 62000, cost: 41000 },
  { month: "Feb", revenue: 58000, cost: 39000 },
  { month: "Mar", revenue: 71000, cost: 46000 },
  { month: "Apr", revenue: 95000, cost: 52000 },
  { month: "May", revenue: 87524, cost: 45680 },
  { month: "Jun", revenue: 60000, cost: 42000 },
  { month: "Jul", revenue: 90000, cost: 50000 },
  { month: "Aug", revenue: 68000, cost: 47000 },
];

export const shipmentType = [
  { label: "Road Freight", value: 1150, percent: 46, color: "#856DF3" },
  { label: "Ocean Freight", value: 425, percent: 17, color: "#757575" },
  { label: "Air Freight", value: 700, percent: 28, color: "#292929" },
  { label: "Rail Freight", value: 225, percent: 9, color: "#E0E0E0" },
];

export const productCategories = [
  { label: "Electronics", products: 240, percent: 24, color: "#6C5DD3" },
  { label: "Home & Kitchen", products: 200, percent: 20, color: "#D8D2F7" },
  { label: "Apparel", products: 180, percent: 18, color: "#1A1A1E" },
  { label: "Beauty & Health", products: 140, percent: 14, color: "#8B8B93" },
  { label: "Sports & Outdoors", products: 120, percent: 12, color: "#C4C4CB" },
  { label: "Automotive", products: 120, percent: 12, color: "#E7E7EB" },
];

export const shipmentAlerts = [
  { title: "Customs Clearance Delay", id: "SH8743921", freight: "Ocean Freight", date: "Mar 20", icon: "customs" as const },
  { title: "Incorrect Address Provided", id: "SH8725810", freight: "Road Freight", date: "Mar 20", icon: "address" as const },
  { title: "Weather-Related Hold", id: "SH8790043", freight: "Air Freight", date: "Mar 19", icon: "weather" as const },
  { title: "Incorrect Address Provided", id: "SH8716654", freight: "Rail Freight", date: "Mar 18", icon: "address" as const },
];

export const recentActivity = [
  { user: "@TechGuru99", action: "submitted a bulk shipment request", time: "12:00 PM", who: "User", icon: "file" as const },
  { user: "@SupportKen", action: "added a priority tag to Order ID 77889JKL", time: "11:30 AM", who: "Customer Support", icon: "tag" as const },
  { user: "@SallyMae88", action: "initiated a return process for Order ID 44556GHI", time: "11:00 AM", who: "User", icon: "return" as const },
  { user: "@AdminLisa", action: "resolved a delivery issue for Order ID 12345XYZ", time: "10:15 AM", who: "Administrator", icon: "check" as const },
];

export const liveTracking = {
  id: "SH8743921",
  courier: "Daniel Cooper",
  carrier: "SkyLogix Express",
  status: "In Transit",
  onSchedule: true,
  originCity: "San Francisco, CA, USA",
  originDate: "Mar 19, 2035 – 10:30 AM",
  destinationCity: "New York, NY, USA",
  destinationDate: "Mar 23, 2035 – 03:00 PM (estimated)",
  progress: 42,
};
