export type FreightType = "Road Freight" | "Rail Freight" | "Ocean Freight" | "Air Freight";

export type Country = { code: string; dial: string; flag: string; name: string };

export type FormState = {
  senderCompany: string;
  senderEmail: string;
  senderPhone: string;
  pickupAddress: string;
  recipientCompany: string;
  recipientEmail: string;
  recipientPhone: string;
  deliveryAddress: string;
  itemDescription: string;
  quantity: string;
  value: string;
  weight: string;
  weightUnit: string;
  length: string;
  width: string;
  height: string;
  freightType: FreightType;
  carrier: string;
  shippingMethod: string;
  notes: string;
  insurance: boolean;
  temperatureControl: boolean;
  signature: boolean;
  fragile: boolean;
  notifyRecipient: boolean;
};

export type FormErrors = Partial<Record<keyof FormState, string>>;

export const initialFormState: FormState = {
  senderCompany: "",
  senderEmail: "",
  senderPhone: "",
  pickupAddress: "",
  recipientCompany: "",
  recipientEmail: "",
  recipientPhone: "",
  deliveryAddress: "",
  itemDescription: "",
  quantity: "",
  value: "",
  weight: "",
  weightUnit: "Kg",
  length: "",
  width: "",
  height: "",
  freightType: "Road Freight",
  carrier: "",
  shippingMethod: "",
  notes: "",
  insurance: true,
  temperatureControl: false,
  signature: true,
  fragile: false,
  notifyRecipient: true,
};

export const COUNTRIES: Country[] = [
  { code: "US", dial: "+1", flag: "🇺🇸", name: "United States" },
  { code: "CA", dial: "+1", flag: "🇨🇦", name: "Canada" },
  { code: "GB", dial: "+44", flag: "🇬🇧", name: "United Kingdom" },
  { code: "AU", dial: "+61", flag: "🇦🇺", name: "Australia" },
  { code: "DE", dial: "+49", flag: "🇩🇪", name: "Germany" },
  { code: "FR", dial: "+33", flag: "🇫🇷", name: "France" },
  { code: "AE", dial: "+971", flag: "🇦🇪", name: "United Arab Emirates" },
  { code: "IN", dial: "+91", flag: "🇮🇳", name: "India" },
  { code: "BD", dial: "+880", flag: "🇧🇩", name: "Bangladesh" },
  { code: "SG", dial: "+65", flag: "🇸🇬", name: "Singapore" },
];

export function validateForm(form: FormState): FormErrors {
  const e: FormErrors = {};
  if (!form.senderCompany.trim()) e.senderCompany = "Sender company is required.";
  if (!form.senderEmail.trim()) e.senderEmail = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.senderEmail)) e.senderEmail = "Enter a valid email address.";
  if (!form.senderPhone.trim()) e.senderPhone = "Phone number is required.";
  if (!form.pickupAddress.trim()) e.pickupAddress = "Pickup address is required.";

  if (!form.recipientCompany.trim()) e.recipientCompany = "Recipient company is required.";
  if (!form.recipientEmail.trim()) e.recipientEmail = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.recipientEmail)) e.recipientEmail = "Enter a valid email address.";
  if (!form.recipientPhone.trim()) e.recipientPhone = "Phone number is required.";
  if (!form.deliveryAddress.trim()) e.deliveryAddress = "Address is required.";

  if (!form.itemDescription.trim()) e.itemDescription = "Item description is required.";
  if (!form.quantity || Number(form.quantity) <= 0) e.quantity = "Enter a valid quantity.";
  if (!form.value || Number(form.value) <= 0) e.value = "Enter a valid value.";
  if (!form.weight || Number(form.weight) <= 0) e.weight = "Enter a valid weight.";
  if (!form.length || Number(form.length) <= 0) e.length = "Length is required.";
  if (!form.width || Number(form.width) <= 0) e.width = "Width is required.";

  if (!form.carrier.trim()) e.carrier = "Carrier is required.";
  if (!form.shippingMethod.trim()) e.shippingMethod = "Shipping method is required.";

  return e;
}