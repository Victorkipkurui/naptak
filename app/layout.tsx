import type { Metadata } from "next";
import { Inter } from "next/font/google";  // Import Inter font
import "./globals.css";
import BackToTop from "./components/backTotop";

// Load the Inter font
const inter = Inter({
  variable: "--font-inter", // Define a CSS variable for Inter
  subsets: ["latin"],       // Specify the character subsets you want (e.g., latin)
});

export const metadata: Metadata = {
  title: "Naptak Africa Consultants",
  description: "Your trusted partner in financial management and consulting.",
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
        <BackToTop />
      </body>
    </html>
  );
}