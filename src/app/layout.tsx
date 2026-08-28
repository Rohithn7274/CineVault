import type { Metadata, Viewport } from "next";
import { Inter, Cinzel, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "CineVault — Your Movies. Your Memories. Your Interpretations.",
    template: "%s | CineVault",
  },
  description:
    "A social movie diary and discussion platform for film lovers. Don't just tell us whether a movie is good. Show us what you noticed, felt, remembered, or interpreted.",
  keywords: [
    "movies",
    "film",
    "diary",
    "reviews",
    "discussion",
    "cinephile",
    "letterboxd alternative",
    "movie tracking",
    "film community",
  ],
  authors: [{ name: "CineVault" }],
  creator: "CineVault",
  publisher: "CineVault",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://cinevault.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cinevault.app",
    siteName: "CineVault",
    title: "CineVault — Your Movies. Your Memories. Your Interpretations.",
    description:
      "A social movie diary and discussion platform for film lovers. Don't just tell us whether a movie is good. Show us what you noticed, felt, remembered, or interpreted.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CineVault - Social Movie Diary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CineVault — Your Movies. Your Memories. Your Interpretations.",
    description:
      "A social movie diary and discussion platform for film lovers. Don't just tell us whether a movie is good. Show us what you noticed, felt, remembered, or interpreted.",
    images: ["/og-image.png"],
    creator: "@cinevault",
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
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable} ${jetbrainsMono.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">{children}</body>
    </html>
  );
}