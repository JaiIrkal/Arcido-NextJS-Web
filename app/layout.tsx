import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
// import StarCanvas from "../components/StarCanvas/StarCanvas";
import Footer from "../components/Footer/Footer";
import { Analytics } from "@vercel/analytics/next"

const StarCanvas = dynamic(() => import('../components/StarCanvas/StarCanvas'))


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
      <body className="relative">
        <div id="page-wrapper" className="relative min-h-screen">
          <StarCanvas />

          <div className="relative z-10 flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      </body>

    </html>
  );
}

