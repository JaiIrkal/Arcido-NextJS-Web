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
      <Lottie
        animationData={launchingAnimation}
        loop
        className="w-72 h-72 mb-8"
      />

      <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-2">
        Launching Soon
      </h1>

      <p className="text-lg opacity-80">
        Sign Up
      </p>
    </main>
  );
}
