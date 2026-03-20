// src/app/layout.tsx
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Amiri } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
// 1. Import the new footer
import SiteFooter from "../components/ServiceFooter"; 

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: '--font-montserrat',
  weight: ['300', '400', '600', '700']
});

const amiri = Amiri({ 
  subsets: ["latin"], 
  variable: '--font-amiri',
  weight: ['400', '700']
});

export const metadata: Metadata = {
  title: "Brightness of Hope Counseling | Northern Colorado",
  description: "Acceptance and Commitment Therapy (ACT) in Northern Colorado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${amiri.variable} font-montserrat`}>
        <Navbar />
        {/* The main page content renders here */}
        {children}
        
        {/* 2. Add the footer here, so it shows on every page */}
        {/* <SiteFooter /> */}
      </body>
    </html>
  );
} 