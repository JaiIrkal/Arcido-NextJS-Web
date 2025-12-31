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
      <div className="flex flex-col items-center justify-center text-center -mt-[250px]">
        <Lottie
          animationData={launchingAnimation}
          loop
          className="relative w-72 h-72"
        />

        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-2">
          Launching Soon
        </h1>
      </div>
    </main>
  );
}