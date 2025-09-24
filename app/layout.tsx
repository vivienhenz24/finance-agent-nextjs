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
  title: {
    default: "Next.js 15 App",
    template: "%s | Next.js 15 App",
  },
  description: "Production-ready Next.js 15 application with React 19 and TypeScript",
  keywords: ["Next.js", "React", "TypeScript", "App Router"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Next.js 15 App",
    description: "Production-ready Next.js 15 application with React 19 and TypeScript",
    siteName: "Next.js 15 App",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js 15 App",
    description: "Production-ready Next.js 15 application with React 19 and TypeScript",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
