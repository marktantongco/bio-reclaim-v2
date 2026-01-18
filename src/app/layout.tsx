import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Bio-Reclaim: Free Track Recovery with AI, Analytics & Community",
  description: "Track your recovery journey with AI-powered insights, interactive analytics, and supportive community. Free sobriety counter, mood tracking, and evidence-based tools for lasting change.",
  keywords: ["free recovery tracker", "sobriety counter", "AI recovery app", "addiction recovery tools", "mental health tracker", "recovery analytics"],
  authors: [{ name: "Bio-Reclaim" }],
  openGraph: {
    title: "Bio-Reclaim: Free Track Recovery with AI, Analytics & Community",
    description: "Track your recovery journey with AI-powered insights, interactive analytics, and supportive community.",
    url: "https://bioreclaim.app",
    siteName: "Bio-Reclaim",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bio-Reclaim: Free Track Recovery with AI, Analytics & Community",
    description: "Track your recovery journey with AI-powered insights, interactive analytics, and supportive community.",
    images: ["/twitter-card.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#00f5d4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${plusJakarta.variable} font-sans antialiased bg-slate-950 text-slate-50`}>
        {children}
      </body>
    </html>
  );
}
