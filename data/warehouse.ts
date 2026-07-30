export const freightTabs = ["Road Freight", "Rail Freight", "Ocean Freight", "Air Freight"] as const;

export const warehouseStats = {
  totalSku: { value: 285, delta: 2.58 },
  quantityOnHand: { value: 12450, delta: 4.37 },
  capacityUsage: { value: 62.5, delta: 1.54 },
};

export const inventoryByCategory = [
  { label: "Electronics", percent: 25, units: 2500 },
  { label: "Apparel", percent: 20, units: 2000 },
  { label: "Home & Kitchen", percent: 18, units: 1800 },
  { label: "Beauty & Health", percent: 15, units: 1500 },
  { label: "Automotive Parts", percent: 12, units: 1200 },
  { label: "Sports Equipment", percent: 10, units: 1000 },
];

export const capacityUsage = { loadedShelves: 40, emptyShelves: 24 };

export const warehouseStorage = [
  { floor: 1, section: "A1 – A10", category: "Electronics", percent: 80, available: 20 },
  { floor: 2, section: "B1 – B10", category: "Apparel", percent: 60, available: 40 },
  { floor: 1, section: "C1 – C10", category: "Home & Kitchen", percent: 90, available: 10 },
  { floor: 3, section: "D1 – D10", category: "Automotive Parts", percent: 50, available: 50 },
  { floor: 2, section: "E1 – E10", category: "Beauty & Health", percent: 70, available: 30 },
];

export const packageStatus = [
  { id: "PKG-HK77420", date: "March 20, 2035 – 05:30 PM", status: "Sent" as const },
  { id: "PKG-A50812", date: "March 21, 2035 – 01:45 PM", status: "Received" as const },
  { id: "PKG-E10293", date: "March 22, 2035 – 09:00 AM", status: "Expected" as const },
];

export const warehouseFloors = {
  1: [
    {
      name: "Electronics",
      bins: [
        { id: "A1", status: "available" as const },
        { id: "A2", status: "full" as const },
        { id: "A3", status: "available" as const },
      ],
      available: 20,
    },
    {
      name: "Home & Kitchen",
      bins: [
        { id: "C1", status: "available" as const },
        { id: "C2", status: "full" as const },
        { id: "C3", status: "full" as const },
      ],
      available: 10,
    },
    {
      name: "Automotive Parts",
      bins: [
        { id: "D1", status: "available" as const },
        { id: "D2", status: "available" as const },
        { id: "D3", status: "available" as const },
      ],
      available: 50,
    },
    {
      name: "Sports Equipment",
      bins: [
        { id: "F1", status: "available" as const },
        { id: "F2", status: "available" as const },
        { id: "F3", status: "full" as const },
      ],
      available: 45,
    },
    {
      name: "Apparel",
      bins: [
        { id: "B1", status: "available" as const },
        { id: "B2", status: "full" as const },
        { id: "B3", status: "full" as const },
        { id: "B4", status: "available" as const },
        { id: "B5", status: "available" as const },
        { id: "B6", status: "full" as const },
        { id: "B7", status: "full" as const },
        { id: "B8", status: "available" as const },
        { id: "B9", status: "full" as const },
        { id: "B10", status: "available" as const },
      ],
      available: 20,
    },
    {
      name: "Beauty & Health",
      bins: [
        { id: "E1", status: "available" as const },
        { id: "E2", status: "full" as const },
        { id: "E3", status: "available" as const },
        { id: "E4", status: "available" as const },
      ],
      available: 30,
    },
  ],
  2: [
    { name: "Apparel", bins: [/* same shape */], available: 20 },
    { name: "Beauty & Health", bins: [/* same shape */], available: 30 },
  ],
  3: [
    { name: "Automotive Parts", bins: [/* same shape */], available: 35 },
  ],
};

export const warehouseActivityLog = [
  { user: "Leo Fernandez", action: "confirmed receipt of 40 units of Winter Jacket Series in Section B3 (Apparel)", time: "01:45 PM", icon: "check" as const },
  { user: "Ava Martinez", action: "added 25 units of Smart Router Kit to Section A1 (Electronics)", time: "09:15 AM", icon: "add" as const },
  { user: "Oscar Liem", action: "dispatched 18 units of Stainless Steel Cookware Set from Section C5 (Home & Kitchen)", time: "05:30 PM", icon: "dispatch" as const },
  { user: "Dina Choi", action: "created a shipment entry for Brake Pad Sets in Section D2 (Automotive Parts)", time: "04:10 PM", icon: "file" as const },
];
