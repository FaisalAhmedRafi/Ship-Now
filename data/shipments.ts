export type ShipmentStatus = "In Transit" | "Out for Delivery" | "Delivered" | "Processing" | "Pending" | "Completed";

export type Shipment = {
  id: string;
  freight: "Air Freight" | "Road Freight" | "Ocean Freight" | "Rail Freight";
  company: string;
  category: string;
  carrier: string;
  weightKg: number;
  originCity: string;
  originDate: string;
  destinationCity: string;
  destinationDate: string;
  progress: number;
  status: ShipmentStatus;
};

const base: Shipment[] = [
  { id: "SH9283746", freight: "Air Freight", company: "TechGear Inc.", category: "Electronics", carrier: "FedEx", weightKg: 1200, originCity: "Los Angeles, CA", originDate: "Mar 20, 2035 – 10:00 AM", destinationCity: "Chicago, IL", destinationDate: "Mar 23, 2035 – 03:00 PM", progress: 60, status: "In Transit" },
  { id: "SH9182635", freight: "Road Freight", company: "StyleHub Co.", category: "Apparel", carrier: "DHL", weightKg: 850, originCity: "New York, NY", originDate: "Mar 19, 2035 – 11:30 AM", destinationCity: "Atlanta, GA", destinationDate: "Mar 22, 2035 – 01:00 PM", progress: 75, status: "Out for Delivery" },
  { id: "SH9037821", freight: "Ocean Freight", company: "FreshNest", category: "Home & Kitchen", carrier: "UPS", weightKg: 1450, originCity: "Dallas, TX", originDate: "Mar 18, 2035 – 09:00 AM", destinationCity: "Miami, FL", destinationDate: "Mar 21, 2035 – 06:00 PM", progress: 100, status: "Delivered" },
  { id: "SH9374652", freight: "Rail Freight", company: "FitPlus Gear", category: "Sports & Outdoors", carrier: "USPS", weightKg: 960, originCity: "Seattle, WA", originDate: "Mar 21, 2035 – 08:45 AM", destinationCity: "Denver, CO", destinationDate: "Mar 25, 2035 – 04:30 PM", progress: 40, status: "Processing" },
  { id: "SH9457830", freight: "Road Freight", company: "AutoParts Pro", category: "Automotive", carrier: "Aramex", weightKg: 1680, originCity: "Detroit, MI", originDate: "Mar 20, 2035 – 07:15 AM", destinationCity: "San Diego, CA", destinationDate: "Mar 26, 2035 – 02:00 PM", progress: 50, status: "In Transit" },
  { id: "SH8821349", freight: "Air Freight", company: "EcoLights", category: "Electronics", carrier: "FedEx", weightKg: 1100, originCity: "Austin, TX", originDate: "Mar 19, 2035 – 12:00 PM", destinationCity: "Phoenix, AZ", destinationDate: "Mar 21, 2035 – 05:00 PM", progress: 90, status: "Out for Delivery" },
  { id: "SH8967432", freight: "Road Freight", company: "GreenHaven", category: "Home & Garden", carrier: "USPS", weightKg: 1250, originCity: "Portland, OR", originDate: "Mar 18, 2035 – 02:45 PM", destinationCity: "Salt Lake City, UT", destinationDate: "Mar 22, 2035 – 11:00 AM", progress: 65, status: "In Transit" },
  { id: "SH8893247", freight: "Road Freight", company: "ModaWear", category: "Apparel", carrier: "DHL", weightKg: 920, originCity: "Boston, MA", originDate: "Mar 20, 2035 – 01:00 PM", destinationCity: "Charlotte, NC", destinationDate: "Mar 23, 2035 – 08:00 AM", progress: 80, status: "Out for Delivery" },
  { id: "SH9018723", freight: "Rail Freight", company: "SunCore Panels", category: "Electronics", carrier: "UPS", weightKg: 1375, originCity: "San Diego, CA", originDate: "Mar 21, 2035 – 09:30 AM", destinationCity: "Reno, NV", destinationDate: "Mar 24, 2035 – 01:30 PM", progress: 30, status: "Processing" },
  { id: "SH9113471", freight: "Road Freight", company: "QuickParts", category: "Automotive", carrier: "Aramex", weightKg: 1040, originCity: "Tampa, FL", originDate: "Mar 20, 2035 – 04:00 PM", destinationCity: "Houston, TX", destinationDate: "Mar 23, 2035 – 12:00 PM", progress: 90, status: "In Transit" },
  { id: "SH8881190", freight: "Road Freight", company: "VitaFresh", category: "Food & Beverage", carrier: "Local Courier", weightKg: 980, originCity: "Nashville, TN", originDate: "Mar 21, 2035 – 06:00 AM", destinationCity: "Jacksonville, FL", destinationDate: "Mar 22, 2035 – 10:00 AM", progress: 85, status: "Out for Delivery" },
  { id: "SH8776103", freight: "Air Freight", company: "StyleDepot", category: "Fashion", carrier: "FedEx", weightKg: 1020, originCity: "Minneapolis, MN", originDate: "Mar 19, 2035 – 10:15 AM", destinationCity: "Kansas City, MO", destinationDate: "Mar 22, 2035 – 03:30 PM", progress: 60, status: "In Transit" },
];

const companies = ["Nimbus Retail", "Coastal Goods", "Orbit Supply", "Harbor & Co", "Crestline", "BrightBox", "Meridian Foods", "Ironclad Parts", "Willow Home", "Pacific Threads"];
const categories = ["Electronics", "Apparel", "Home & Kitchen", "Automotive", "Sports & Outdoors", "Food & Beverage"];
const carriers = ["FedEx", "DHL", "UPS", "USPS", "Aramex", "Local Courier"];
const freights: Shipment["freight"][] = ["Air Freight", "Road Freight", "Ocean Freight", "Rail Freight"];
const statuses: ShipmentStatus[] = ["In Transit", "Out for Delivery", "Delivered", "Processing"];
const cities = ["Los Angeles, CA", "New York, NY", "Chicago, IL", "Miami, FL", "Denver, CO", "Phoenix, AZ", "Atlanta, GA", "Seattle, WA", "Portland, OR", "Austin, TX", "Boston, MA", "Dallas, TX"];

function generated(): Shipment[] {
  const out: Shipment[] = [];
  for (let i = 0; i < 48; i++) {
    const idNum = 9500000 + i * 173;
    out.push({
      id: `SH${idNum}`,
      freight: freights[i % freights.length],
      company: companies[i % companies.length],
      category: categories[i % categories.length],
      carrier: carriers[i % carriers.length],
      weightKg: 700 + ((i * 57) % 1400),
      originCity: cities[i % cities.length],
      originDate: `Mar ${(i % 27) + 1}, 2035 – 09:00 AM`,
      destinationCity: cities[(i + 5) % cities.length],
      destinationDate: `Mar ${((i + 3) % 27) + 1}, 2035 – 05:00 PM`,
      progress: [20, 30, 45, 55, 65, 75, 85, 90, 100][i % 9],
      status: statuses[i % statuses.length],
    });
  }
  return out;
}

export const shipments: Shipment[] = [...base, ...generated()];

export function statusTone(status: ShipmentStatus) {
  switch (status) {
    case "Delivered":
    case "Completed":
      return "success" as const;
    case "Processing":
      return "processing" as const;
    case "Pending":
      return "neutral" as const;
    case "Out for Delivery":
      return "brand" as const;
    default:
      return "neutral" as const;
  }
}
