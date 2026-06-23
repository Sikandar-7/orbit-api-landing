import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orbit API - WhatsApp Business App",
  description: "Orbit API - Modern WhatsApp CRM App for your business with real-time sync, auto-replies, and campaign management.",
  icons: {
    icon: '/logo_orbit.jpeg',
  },
  openGraph: {
    title: "Orbit API - WhatsApp Business App",
    description: "Orbit API - Modern WhatsApp CRM App for your business with real-time sync, auto-replies, and campaign management.",
    url: "https://orbit-api-landing.vercel.app/",
    siteName: "Orbit API",
    images: [
      {
        url: "/logo_orbit.jpeg",
        width: 512,
        height: 512,
        alt: "Orbit API Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
