import type { Metadata } from "next";
import "./globals.css";
import "katex/dist/katex.min.css";

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
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0a0f" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
