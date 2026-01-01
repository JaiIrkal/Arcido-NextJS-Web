import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import StarCanvas from "../components/StarCanvas/StarCanvas";
import Footer from "../components/Footer/Footer";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arcido - Digital Done Right.",
  description: "The Future of your Brand Starts Here.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta
          name="description"
          content="The Future of your Brand Starts Here."
        />
      <body className="relative min-h-screen">
        <StarCanvas />

        <div className="relative flex min-h-screen flex-col">
          <Navbar />

          {/* Main page content */}
          <main className="flex-1">
            {children}
            <Analytics />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}

