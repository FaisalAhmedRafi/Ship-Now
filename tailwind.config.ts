import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#856DF3",
          light: "#E3DDFF",
          dark: "#5847C7",
        },
        ink: "#1A1A1E",
        surface: "#F3F3F5",
        card: "#FFFFFF",
        border: "#E7E7EB",
        muted: "#6B7280",
        success: { DEFAULT: "#16A34A", bg: "#DCFCE7" },
        warning: { DEFAULT: "#CA8A04", bg: "#FEF9C3" },
        danger: { DEFAULT: "#DC2626", bg: "#FEE2E2" },
        neutralpill: { DEFAULT: "#4B5563", bg: "#EEEEF1" },
        processing: { DEFAULT: "#2563EB", bg: "#DBEAFE" },
      },
      fontFamily: {
        sans: [
          "var(--font-nunito-sans)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Inter",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(16, 16, 20, 0.04), 0 1px 1px rgba(16,16,20,0.03)",
      },
    },
  },
  plugins: [],
};
export default config;
