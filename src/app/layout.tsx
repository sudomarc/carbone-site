import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const siteUrl = "https://carbone.group";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CARBONE — Collectif technologique ouvert",
    template: "%s | CARBONE",
  },
  description: "CARBONE est un collectif ouvert dont le terrain d'action est la technologie. Nous développons nos propres projets et participons à des collaborations externes.",
  keywords: ["collectif technologique", "open source", "développement logiciel", "projets tech", "collaboration"],
  authors: [{ name: "CARBONE" }],
  creator: "CARBONE",
  publisher: "CARBONE",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "CARBONE",
    title: "CARBONE — Collectif technologique ouvert",
    description: "CARBONE est un collectif ouvert dont le terrain d'action est la technologie.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CARBONE — Collectif technologique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CARBONE — Collectif technologique ouvert",
    description: "CARBONE est un collectif ouvert dont le terrain d'action est la technologie.",
    images: ["/og-image.png"],
  },
  verification: {
    other: {
      "github:repository": "carbonegroup",
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#0a0a0a] dark:bg-[#0a0a0a] dark:text-white">
        {children}
      </body>
    </html>
  );
}