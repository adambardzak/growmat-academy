import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./animations.css";
import Navbar from "@/components/Navbar";
import ClarityInit from "@/components/ClarityInit";
import StructuredData from "@/components/StructuredData";
import CookieBanner from "@/components/CookieBanner";
import Aurora from "@/components/Aurora";
import GlobalAnimationProvider from "@/components/animations/GlobalAnimationProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GrowMat Academy - Raketový růst na Instagramu za 30 minut denně",
  description:
    "Nauč se organicky růst na Instagramu a proměňovat sledující na zákazníky s naším prověřeným systémem. Bez reklam, bez dlouhého editování. Pouze 30 minut denně pro maximální výsledky.",
  keywords: [
    "Instagram růst",
    "organický růst",
    "Instagram marketing",
    "sociální média",
    "podnikání",
    "online kurz",
    "Instagram strategie",
    "prodej na Instagramu",
    "virální obsah",
  ],
  authors: [{ name: "GrowMat Academy" }],
  creator: "GrowMat Academy",
  publisher: "GrowMat Academy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://growmatacademy.cz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GrowMat Academy - Raketový růst na Instagramu",
    description:
      "Nauč se organicky růst na Instagramu a proměňovat sledující na zákazníky. Bez reklam, pouze 30 minut denně.",
    url: "https://growmatacademy.cz",
    siteName: "GrowMat Academy",
    images: [
      {
        url: "/api/og?title=Raketový%20růst%20na%20Instagramu&description=Nauč%20se%20organicky%20růst%20za%2030%20minut%20denně",
        width: 1200,
        height: 630,
        alt: "GrowMat Academy - Instagram růst kurz",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowMat Academy - Raketový růst na Instagramu",
    description:
      "Nauč se organicky růst na Instagramu a proměňovat sledující na zákazníky. Bez reklam, pouze 30 minut denně.",
    images: [
      "/api/og?title=Raketový%20růst%20na%20Instagramu&description=Nauč%20se%20organicky%20růst%20za%2030%20minut%20denně",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <head>
        {/* Basic favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        
        {/* Standard favicons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        
        {/* Web App Manifest */}
        <link rel="manifest" href="/favicon/site.webmanifest" />
        
        {/* Microsoft Tile */}
        <meta name="msapplication-TileColor" content="#4ade80" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#4ade80" />
        
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClarityInit />
        <StructuredData />
        <GlobalAnimationProvider>
          <Navbar />
          <main className="">{children}</main>
          <CookieBanner />
        </GlobalAnimationProvider>
      </body>
    </html>
  );
}
