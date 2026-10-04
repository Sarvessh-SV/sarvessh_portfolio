import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Sarvessh S V | Full-Stack Developer & Cybersecurity Enthusiast",
  description: "Explore the portfolio of Sarvessh S V, a full-stack developer and cybersecurity enthusiast from Chennai, India. Discover development projects, technical skills, internships, and freelance services.",
  keywords: [
    "Sarvessh S V",
    "Full-Stack Developer",
    "Cybersecurity Enthusiast",
    "Chennai Institute of Technology",
    "Freelance Web Developer",
    "Next.js Developer",
    "React Developer",
    "CarePoint",
    "KeyShield"
  ],
  authors: [{ name: "Sarvessh S V" }],
  creator: "Sarvessh S V",
  openGraph: {
    title: "Sarvessh S V | Full-Stack Developer & Cybersecurity Enthusiast",
    description: "Explore the portfolio of Sarvessh S V, a full-stack developer and cybersecurity enthusiast from Chennai, India.",
    type: "website",
    locale: "en_US",
    siteName: "Sarvessh S V Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarvessh S V | Full-Stack Developer & Cybersecurity Enthusiast",
    description: "Full-stack web applications, cybersecurity projects, and freelance developer services.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
