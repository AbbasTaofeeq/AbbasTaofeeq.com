import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Abbas Taofeeq | Frontend Engineer for AI-Powered Web Applications",
  description:
    "Portfolio of Abbas Taofeeq, a Frontend Engineer specializing in AI-powered, high-conversion web applications for remote teams and modern businesses.",
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
      "AI-powered, high-conversion web applications built with modern frontend engineering.",
    type: "website",
    locale: "en_US",
    url: "https://example.com",
    siteName: "Abbas Taofeeq Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Abbas Taofeeq | Frontend Engineer",
    description:
      "Frontend Engineer specializing in AI-powered, high-conversion web applications."
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
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
