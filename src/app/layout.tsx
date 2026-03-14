import type { Metadata } from "next";
import "./globals.css";
import "katex/dist/katex.min.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "BACStudy — 2BAC Exam Preparation Platform",
  description:
    "Interactive study platform for Moroccan 2BAC Physical Science students. Master Math, Physics & Chemistry, SVT, Philosophy, and English for the National Exam.",
  keywords: [
    "bac maroc",
    "2bac",
    "physical science",
    "math",
    "physics",
    "chemistry",
    "national exam",
    "morocco",
    "study",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f8fafc" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL@20..48,100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
