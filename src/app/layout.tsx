import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ContactChooser, SmoothScroll } from "./motion-layer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inkindi decor Kigali | Event Design & Production in Rwanda",
  description:
    "Inkindi decor Kigali is a Kigali-based event design and production company crafting refined weddings, corporate galas, and private celebrations across Rwanda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>
          {children}
          <ContactChooser />
        </SmoothScroll>
      </body>
    </html>
  );
}
