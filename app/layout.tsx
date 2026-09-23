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
  title: "Onboard360 - Onboarding, built like software",
  description:
    "Onboard360 turns scattered checklists, PDFs, and Slack threads into one system. Workflow builder, document pipeline, and AI assistant grounded in company documents.",
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
