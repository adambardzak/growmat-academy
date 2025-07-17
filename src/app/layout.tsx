import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ClarityInit from "@/components/ClarityInit";
import StructuredData from "@/components/StructuredData";
import CookieBanner from "@/components/CookieBanner";

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
  description: "Nauč se organicky růst na Instagramu a proměňovat sledující na zákazníky s naším prověřeným systémem. Bez reklam, bez dlouhého editování. Pouze 30 minut denně pro maximální výsledky.",
  keywords: ["Instagram růst", "organický růst", "Instagram marketing", "sociální média", "podnikání", "online kurz", "Instagram strategie", "prodej na Instagramu", "virální obsah"],
  authors: [{ name: "GrowMat Academy" }],
  creator: "GrowMat Academy",
  publisher: "GrowMat Academy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://growmatacademy.cz'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "GrowMat Academy - Raketový růst na Instagramu",
    description: "Nauč se organicky růst na Instagramu a proměňovat sledující na zákazníky. Bez reklam, pouze 30 minut denně.",
    url: 'https://growmatacademy.cz',
    siteName: 'GrowMat Academy',
    images: [
      {
        url: '/api/og?title=Raketový%20růst%20na%20Instagramu&description=Nauč%20se%20organicky%20růst%20za%2030%20minut%20denně',
        width: 1200,
        height: 630,
        alt: 'GrowMat Academy - Instagram růst kurz',
      },
    ],
    locale: 'cs_CZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GrowMat Academy - Raketový růst na Instagramu',
    description: 'Nauč se organicky růst na Instagramu a proměňovat sledující na zákazníky. Bez reklam, pouze 30 minut denně.',
    images: ['/api/og?title=Raketový%20růst%20na%20Instagramu&description=Nauč%20se%20organicky%20růst%20za%2030%20minut%20denně'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#10b981" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClarityInit />
        <StructuredData />
        <Navbar />
        <main className="pt-16">{children}</main>
        <CookieBanner />
      </body>
    </html>
  );
}
