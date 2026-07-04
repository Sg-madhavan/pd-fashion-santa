import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pdfashiongifts.example"),
  title: {
    default: "PD Fashion – World of Personalized Gifts",
    template: "%s | PD Fashion Gifts",
  },
  description:
    "Premium personalized gifts for birthdays, anniversaries, weddings, festivals, baby celebrations, corporate events, and Christmas memories.",
  keywords: [
    "PD Fashion",
    "personalized gifts",
    "custom mugs",
    "photo frames",
    "LED lamps",
    "custom cushions",
    "personalized clocks",
    "festival gifts",
    "corporate gifting",
  ],
  authors: [{ name: "PD Fashion" }],
  openGraph: {
    title: "PD Fashion – World of Personalized Gifts",
    description:
      "Cinematic personalized gifting crafted for love, celebration, family, friendship, festivals, and premium memories.",
    type: "website",
    locale: "en_IN",
    siteName: "PD Fashion Gifts",
  },
  twitter: {
    card: "summary_large_image",
    title: "PD Fashion – World of Personalized Gifts",
    description: "Luxury personalized gifts made for unforgettable moments.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#06162f",
  colorScheme: "dark light",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN">
      <body className="overflow-x-hidden bg-[#061124] text-white antialiased">{children}</body>
    </html>
  );
}
