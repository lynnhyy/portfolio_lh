import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavLinks from './nav-link';
import "./ui/globals.css";
/*shared between all pages*/
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LH - Portfolio",
  description: "Portfolio de Lynn Hayot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="flex flex-row w-48 p-4 bg-black-100">
          <NavLinks/>
        </nav>
        {children}
      </body>
    </html>
  );
}
