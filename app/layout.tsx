import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
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

export const metadata: Metadata = {
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
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Abbas Taofeeq | Frontend Engineer",
    description:
      "Intelligent, AI-powered web applications built with modern frontend engineering.",
    type: "website",
    locale: "en_US",
    url: "https://example.com",
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
    <html lang="en" className="scroll-smooth">
      <body className={`${plusJakartaSans.variable} ${fraunces.variable}`}>
        {children}
      </body>
    </html>
  );
}
