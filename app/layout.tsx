import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Mono, Inter, Space_Grotesk } from "next/font/google";
import { getProfile } from "../data/profile";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const copy = getProfile("en");
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://ramazan-akhmet.vercel.app"; // Temporary placeholder until the production domain is set.

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: copy.seo.title,
    template: `%s | ${copy.hero.name}`,
  },
  description: copy.seo.description,
  keywords: copy.seo.keywords,
  authors: [{ name: copy.hero.name }],
  creator: copy.hero.name,
  publisher: copy.hero.name,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: copy.seo.title,
    description: copy.seo.description,
    type: "website",
    locale: "en_US",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: copy.seo.title,
    description: copy.seo.description,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
