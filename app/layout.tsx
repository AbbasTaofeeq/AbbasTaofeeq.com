import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

const SITE_URL = "https://abbastaofeeq.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Abbas Taofeeq | Frontend Engineer for AI-Powered Web Applications",
  description:
    "Portfolio of Abbas Taofeeq, a Frontend Engineer building intelligent, AI-powered web applications for organizations and modern businesses — not just functional websites.",
  keywords: [
    "Abbas Taofeeq",
    "Frontend Engineer",
    "AI Integration",
    "Next.js Developer",
    "React Developer",
    "Remote Frontend Developer",
    "Azure AI Engineer"
  ],
  authors: [{ name: "Abbas Taofeeq" }],
  creator: "Abbas Taofeeq",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Abbas Taofeeq | Frontend Engineer",
    description:
      "Intelligent, AI-powered web applications built with modern frontend engineering.",
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Abbas Taofeeq Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Abbas Taofeeq | Frontend Engineer",
    description:
      "Frontend Engineer building intelligent, AI-powered web applications — not just functional websites."
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
