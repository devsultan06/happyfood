import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Happyfoods Treats | Ibadan's Finest Food Delivery & Catering",
  description: "Bespoke Nigerian food delivery, parfaits, small chops, and raw proteins delivered fresh in Ibadan. Explore our rich menu and book your order today!",
  keywords: "Happyfoods Treats, Ibadan food delivery, Ibadan catering, Nigerian home-cooked food, small chops Ibadan, snail platter, parfait delivery, catering service Ibadan",
  openGraph: {
    title: "Happyfoods Treats | Ibadan's Finest Food Delivery",
    description: "Bespoke Nigerian food delivery, parfaits, small chops, and raw proteins delivered fresh in Ibadan.",
    images: ["/images/happyfoods-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full bg-brand-cream text-brand-dark font-sans flex flex-col">
        {children}
      </body>
    </html>
  );
}

