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

import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#030202",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://useonboard360.vercel.app",
  ),
  title: {
    default: "Onboard360: The onboarding system for modern teams and agencies",
    template: "%s | Onboard360",
  },
  description:
    "Turn scattered checklists, PDFs, and Slack threads into one unified onboarding system. Role-based workflow builder, automated document pipeline, and verified AI assistant.",
  keywords: [
    "onboarding software",
    "employee onboarding",
    "HR automation",
    "workflow builder",
    "document pipeline",
    "onboarding checklist",
    "AI onboarding assistant",
    "Qorra AI",
  ],
  authors: [{ name: "Onboard360" }],
  creator: "Eniola Amusu",
  openGraph: {
    title: "Onboard360: The onboarding system for modern teams and agencies",
    description:
      "Turn scattered checklists, PDFs, and Slack threads into one unified onboarding system. Role-based workflow builder, automated document pipeline, and verified AI assistant.",
    url: "https://onboard360.vercel.app",
    siteName: "Onboard360",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Onboard360 | No more scattered checklists",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Onboard360: The onboarding system for modern teams and agencies",
    description:
      "Turn scattered checklists, PDFs, and Slack threads into one unified onboarding system. Role-based workflow builder, automated document pipeline, and verified AI assistant.",
    images: ["/images/hero-onb360.png"],
    creator: "@onboard360",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-text-primary selection:bg-accent/30 selection:text-text-primary">
        {children}
      </body>
    </html>
  );
}