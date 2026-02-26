import type { Metadata, Viewport } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GSAPProvider from "@/components/providers/GSAPProvider";
import NoiseOverlay from "@/components/ui/NoiseOverlay";
import BackToTop from "@/components/ui/BackToTop";

// ── Fonts ──────────────────────────────────────────────
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
  preload: false,
});

// ── Metadata ───────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: "The Tailor — Tailor-Made Digital Experiences",
    template: "%s | The Tailor",
  },
  description:
    "A Greek software house & digital marketing agency crafting bespoke web and digital experiences. Web Design, Development, Custom Apps, META Ads, TikTok Ads, Google Ads.",
  keywords: [
    "web design Greece",
    "digital marketing Greece",
    "web development Athens",
    "custom web apps",
    "mobile app development Greece",
    "META ads",
    "TikTok ads",
    "Google ads",
    "software house Greece",
  ],
  authors: [{ name: "The Tailor" }],
  openGraph: {
    type: "website",
    locale: "el_GR",
    siteName: "The Tailor",
    title: "The Tailor — Tailor-Made Digital Experiences",
    description: "Bespoke digital services from Athens, Greece. Every pixel considered.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Tailor",
    description: "Tailor-Made Digital Experiences",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d4d51",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

// ── Root Layout ────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="el"
      className={`${playfair.variable} ${cormorant.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body>
        <GSAPProvider>
          <NoiseOverlay />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </GSAPProvider>
      </body>
    </html>
  );
}
