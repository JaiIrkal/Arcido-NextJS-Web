"use client";

import dynamic from "next/dynamic";
import launchingAnimation from "@/public/lottie/space boy developer.json";

// Disable SSR for Lottie
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-transparent text-white text-center px-4">
      <h1 className="relative text-4xl bottom-20">404 Page Not Found</h1>
    </main>
  );
}
