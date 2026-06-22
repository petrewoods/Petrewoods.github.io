import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { SiteHeader, SiteFooter } from "@/components/ui";
import "./globals.css";

const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-jb",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://petrewoods.github.io"),
  title: {
    default: "Dr Peter Woods",
    template: "%s · Dr Peter Woods",
  },
  description:
    "Physician, researcher and digital-health builder — acute medicine, academic research and applied AI across the UK and New Zealand. MRCP. Oxford & Warwick.",
  openGraph: {
    title: "Dr Peter Woods",
    description:
      "Physician, researcher and builder. Selected work in interactive media, applied AI and clinical software.",
    type: "website",
    url: "https://petrewoods.github.io",
    locale: "en_GB",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Dr Peter Woods — physician, researcher and builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr Peter Woods",
    description:
      "Physician, researcher and builder. Selected work in interactive media, applied AI and clinical software.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-GB"
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="min-h-dvh bg-paper font-sans text-ink antialiased selection:bg-ink selection:text-paper">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
