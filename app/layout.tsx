import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shaik Rasheed Baba | Data Scientist & ML Developer",
  description:
    "Portfolio of Shaik Rasheed Baba — Data Science student, Data Analyst, and AI/ML Engineer.",
  keywords: [
    "Data Science",
    "Machine Learning",
    "Data Analyst",
    "Python",
    "Power BI",
    "Streamlit",
    "Hyderabad",
  ],
  authors: [{ name: "Shaik Rasheed Baba" }],
  openGraph: {
    title: "Shaik Rasheed Baba | Portfolio",
    description:
      "Switch between Data Science, Data Analyst, and AI/ML Engineer views.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Outfit:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
