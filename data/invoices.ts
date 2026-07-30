export type InvoiceStatus = "Paid" | "Unpaid" | "Overdue";

export type InvoiceLineItem = {
  id: string;
  description: string;
  shipmentType: string;
  price: number;
  qty: number;
};

export type Invoice = {
  id: string;
  company: string;
  shippingId: string;
  issueDate: string;
  dueDate: string;
  status: InvoiceStatus;
  billFrom: { name: string; email: string; address: string; phone: string };
  billTo: { name: string; email: string; address: string; phone: string };
  lineItems: InvoiceLineItem[];
  taxRate: number;
  fee: number;
  note: string;
};

const billTo = {
  name: "ShipNow Logistics",
  email: "accounts@shipnow.com",
  address: "901 Distribution Ave, Charlotte, NC 28217, USA",
  phone: "+1 704-555-9911",
};

export const invoices: Invoice[] = [
  {
    id: "INV-1001",
    company: "TechGear Inc.",
    shippingId: "SH9283746",
    issueDate: "Mar 15, 2035",
    dueDate: "Mar 22, 2035",
    status: "Paid",
    billFrom: { name: "TechGear Inc.", email: "billing@techgear.com", address: "12 Innovation Way, Austin, TX 73301, USA", phone: "+1 512-555-1120" },
    billTo,
    lineItems: [
      { id: "1", description: "Wireless Router Kit", shipmentType: "Air Freight Express", price: 210, qty: 4 },
      { id: "2", description: "Smart Hub Bundle", shipmentType: "Air Freight Standard", price: 95, qty: 3 },
    ],
    taxRate: 0.08,
    fee: 12,
    note: "Please process payment by the due date to avoid delivery disruption. Late fees may apply after 3 business days past due.",
  },
  {
    id: "INV-1002",
    company: "StyleHub Co.",
    shippingId: "SH9182635",
    issueDate: "Mar 16, 2035",
    dueDate: "Mar 23, 2035",
    status: "Unpaid",
    billFrom: { name: "StyleHub Co.", email: "billing@stylehub.com", address: "44 Fashion Ave, New York, NY 10018, USA", phone: "+1 212-555-3390" },
    billTo,
    lineItems: [
      { id: "1", description: "Denim Jacket Pack", shipmentType: "Road Freight Standard", price: 140, qty: 5 },
      { id: "2", description: "Summer Dress Set", shipmentType: "Road Freight Express", price: 60, qty: 3 },
    ],
    taxRate: 0.08,
    fee: 10,
    note: "Please process payment by the due date to avoid delivery disruption. Late fees may apply after 3 business days past due.",
  },
  {
    id: "INV-1003",
    company: "FreshNest",
    shippingId: "SH9037821",
    issueDate: "Mar 14, 2035",
    dueDate: "Mar 21, 2035",
    status: "Paid",
    billFrom: { name: "FreshNest", email: "billing@freshnest.com", address: "89 Franklin St, Boston, MA 02110, USA", phone: "+1 617-555-2290" },
    billTo,
    lineItems: [
      { id: "1", description: "Kitchen Appliance Bundle", shipmentType: "Ocean Freight Standard", price: 220, qty: 5 },
      { id: "2", description: "Cookware Set", shipmentType: "Ocean Freight Standard", price: 55, qty: 4 },
    ],
    taxRate: 0.08,
    fee: 15,
    note: "Please process payment by the due date to avoid delivery disruption. Late fees may apply after 3 business days past due.",
  },
  {
    id: "INV-1004",
    company: "FitPlus Gear",
    shippingId: "SH9374652",
    issueDate: "Mar 17, 2035",
    dueDate: "Mar 24, 2035",
    status: "Unpaid",
    billFrom: { name: "FitPlus Gear", email: "billing@fitplusgear.com", address: "77 Trail Rd, Seattle, WA 98101, USA", phone: "+1 206-555-4471" },
    billTo,
    lineItems: [
      { id: "1", description: "Resistance Band Set", shipmentType: "Rail Freight Standard", price: 45, qty: 10 },
      { id: "2", description: "Yoga Mat Bundle", shipmentType: "Rail Freight Standard", price: 30, qty: 8 },
    ],
    taxRate: 0.08,
    fee: 8,
    note: "Please process payment by the due date to avoid delivery disruption. Late fees may apply after 3 business days past due.",
  },
  {
    id: "INV-1005",
    company: "AutoParts Pro",
    shippingId: "SH9457830",
    issueDate: "Mar 15, 2035",
    dueDate: "Mar 22, 2035",
    status: "Overdue",
    billFrom: { name: "AutoParts Pro", email: "billing@autopartspro.com", address: "5 Gearhead Blvd, Detroit, MI 48201, USA", phone: "+1 313-555-7742" },
    billTo,
    lineItems: [
      { id: "1", description: "Brake Pad Set", shipmentType: "Road Freight Standard", price: 90, qty: 6 },
      { id: "2", description: "Engine Filter Pack", shipmentType: "Road Freight Standard", price: 40, qty: 10 },
    ],
    taxRate: 0.08,
    fee: 14,
    note: "Please process payment by the due date to avoid delivery disruption. Late fees may apply after 3 business days past due.",
  },
  {
    id: "INV-1006",
    company: "EcoLights",
    shippingId: "SH8821349",
    issueDate: "Mar 13, 2035",
    dueDate: "Mar 20, 2035",
    status: "Paid",
    billFrom: { name: "EcoLights", email: "billing@ecolights.com", address: "23 Solar Way, Austin, TX 73301, USA", phone: "+1 512-555-8820" },
    billTo,
    lineItems: [{ id: "1", description: "LED Panel Kit", shipmentType: "Air Freight Express", price: 130, qty: 6 }],
    taxRate: 0.08,
    fee: 9,
    note: "Please process payment by the due date to avoid delivery disruption. Late fees may apply after 3 business days past due.",
  },
  {
    id: "INV-1007",
    company: "GreenHaven",
    shippingId: "SH8967432",
    issueDate: "Mar 14, 2035",
    dueDate: "Mar 21, 2035",
    status: "Paid",
    billFrom: { name: "GreenHaven", email: "logistics@greenhaven.com", address: "1120 Birch Street, Portland, OR 97205, USA", phone: "+1 408-555-7210" },
    billTo,
    lineItems: [{ id: "1", description: "Garden Tool Set", shipmentType: "Road Freight Standard", price: 80, qty: 11 }],
    taxRate: 0.08,
    fee: 15,
    note: "Please process payment by the due date to avoid delivery disruption. Late fees may apply after 3 business days past due.",
  },
  {
    id: "INV-1008",
    company: "ModaWear",
    shippingId: "SH8893247",
    issueDate: "Mar 16, 2035",
    dueDate: "Mar 23, 2035",
    status: "Unpaid",
    billFrom: { name: "ModaWear", email: "billing@modawear.com", address: "89 Franklin St, Boston, MA 02110, USA", phone: "+1 617-555-2290" },
    billTo,
    lineItems: [
      { id: "1", description: "Lightweight Hoodie Pack", shipmentType: "Road Freight Express", price: 120, qty: 3 },
      { id: "2", description: "Autumn Jacket Set", shipmentType: "Road Freight Standard", price: 180, qty: 2 },
      { id: "3", description: "Lightweight Hoodie Pack", shipmentType: "Road Freight Express", price: 95, qty: 2 },
    ],
    taxRate: 0.08,
    fee: 10,
    note: "Please process payment by the due date to avoid delivery disruption. Late fees may apply after 3 business days past due.",
  },
  {
    id: "INV-1009",
    company: "SunCore Panels",
    shippingId: "SH9018723",
    issueDate: "Mar 17, 2035",
    dueDate: "Mar 24, 2035",
    status: "Unpaid",
    billFrom: { name: "SunCore Panels", email: "billing@suncorepanels.com", address: "6 Solar Grid Rd, San Diego, CA 92101, USA", phone: "+1 619-555-6631" },
    billTo,
    lineItems: [{ id: "1", description: "Solar Panel Unit", shipmentType: "Rail Freight Standard", price: 400, qty: 4 }],
    taxRate: 0.08,
    fee: 20,
    note: "Please process payment by the due date to avoid delivery disruption. Late fees may apply after 3 business days past due.",
  },
  {
    id: "INV-1010",
    company: "VitaFresh",
    shippingId: "SH8881190",
    issueDate: "Mar 15, 2035",
    dueDate: "Mar 22, 2035",
    status: "Overdue",
    billFrom: { name: "VitaFresh", email: "billing@vitafresh.com", address: "302 Harvest Ln, Nashville, TN 37201, USA", phone: "+1 615-555-9012" },
    billTo,
    lineItems: [{ id: "1", description: "Perishable Cold-Pack Case", shipmentType: "Road Freight Standard", price: 70, qty: 16 }],
    taxRate: 0.08,
    fee: 18,
    note: "Please process payment by the due date to avoid delivery disruption. Late fees may apply after 3 business days past due.",
  },
  {
    id: "INV-1011",
    company: "SmartAppliance",
    shippingId: "SH8923752",
    issueDate: "Mar 18, 2035",
    dueDate: "Mar 25, 2035",
    status: "Paid",
    billFrom: { name: "SmartAppliance", email: "billing@smartappliance.com", address: "410 Circuit Dr, San Jose, CA 95112, USA", phone: "+1 408-555-2298" },
    billTo,
    lineItems: [{ id: "1", description: "Smart Thermostat Case", shipmentType: "Air Freight Standard", price: 105, qty: 10 }],
    taxRate: 0.08,
    fee: 12,
    note: "Please process payment by the due date to avoid delivery disruption. Late fees may apply after 3 business days past due.",
  },
];

export function invoiceStatusTone(status: InvoiceStatus) {
  switch (status) {
    case "Paid":
      return "success" as const;
    case "Unpaid":
      return "brand" as const;
    case "Overdue":
    default:
      return "neutral" as const;
  }
}

export function invoiceTotals(invoice: Invoice) {
  const subTotal = invoice.lineItems.reduce((sum, li) => sum + li.price * li.qty, 0);
  const tax = subTotal * invoice.taxRate;
  const total = subTotal + tax + invoice.fee;
  return { subTotal, tax, total };
}
