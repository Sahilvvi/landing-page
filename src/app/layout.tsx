import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Couponbaazi — Swap. Sell. Save.",
  description:
    "India's first peer-to-peer coupon exchange platform. Get reminders before coupons expire and get discounted products from small businesses & individuals.",
  openGraph: {
    title: "Couponbaazi — Turn Your Earned Vouchers into Discounts You Actually Need",
    description:
      "Trade unused coupons with real users, track expiry automatically, and win ₹100 Amazon Gift Cards daily in Clappy Birds.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
