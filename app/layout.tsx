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
  title: "AI for Good | AI Singapore",
  description:
    "Scaling Inclusive AI from Singapore to the World. AI Singapore advances AI for Good by turning AI education into scalable social impact across Southeast Asia and beyond.",
  metadataBase: new URL("https://aiforgood.aisingapore.org"),
  openGraph: {
    title: "AI for Good | AI Singapore",
    description:
      "Scaling Inclusive AI from Singapore to the World. AI Singapore advances AI for Good by turning AI education into scalable social impact across Southeast Asia and beyond.",
    url: "https://aiforgood.aisingapore.org",
    siteName: "AI for Good | AI Singapore",
    locale: "en_SG",
    type: "website",
    images: [
      {
        url: "https://aiforgood.aisingapore.org/og-image.png",
        width: 464,
        height: 306,
        alt: "AI for Good Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Good | AI Singapore",
    description:
      "Scaling Inclusive AI from Singapore to the World. AI Singapore advances AI for Good by turning AI education into scalable social impact across Southeast Asia and beyond.",
    images: ["https://aiforgood.aisingapore.org/og-image.png"],
  },
  icons: {
    icon: [
      { url: "https://aiforgood.aisingapore.org/og-image.png", type: "image/png" },
    ],
    apple: [
      { url: "https://aiforgood.aisingapore.org/og-image.png", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
