import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackToTop from "./components/backTotop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],      
});

export const metadata: Metadata = {
  title: "Naptak Africa Consultants",
  description: "Your trusted partner in financial management and consulting."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <BackToTop/>
      </body>
    </html>
  );
}
