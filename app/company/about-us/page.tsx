"use client";

import dynamic from "next/dynamic";

// Disable SSR for Lottie
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-transparent text-white px-4">
      <section className="relative px-6 sm:px-12 lg:px-36 py-20 sm:py-24 lg:py-32">

        {/* Bulb */}
        <img
          src="../images/home-assets/bulb-asset.png"
          className="absolute right-4 sm:right-20 lg:right-40 top-0 
               w-[80px] sm:w-[110px] lg:w-[141px] 
               animate-float"
          alt="Bulb"
        />

        {/* Heading */}
        <h2 className="text-white text-sm sm:text-base lg:text-[20px] mb-4 sm:mb-6">
          About Us
        </h2>

        {/* Main Text */}
        <p
          className="text-white 
      text-2xl sm:text-4xl lg:text-[37px] 
      leading-snug sm:leading-tight lg:leading-[1.2]"
        >
          At Arcido, we help businesses build, grow and scale their{" "}<span className="text-[#72B6FF]">digital presence</span> 
          {" "}end to end. In a fragmented digital world, companies often juggle multiple{" "}
          vendors for<span className="text-[#72B6FF]">{" "}websites, marketing, content, and operations</span>.
          <br/>Arcido was founded to change that. We bring everything under one roof, offering a seamless, integrated approach to digital growth.
        </p>

        {/* Bottom Icons */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-10 mt-12 sm:mt-16 lg:mt-20">

          <img
            src="../images/home-assets/cursor-asset.png"
            className="hidden sm:block 
             w-[140px] sm:w-[140px] lg:w-[217px]
             animate-float rotate-[-20deg]"
            alt="Cursor"
          />


          <img
            src="../images/home-assets/rocket-asset.png"
            className="w-[170px] sm:w-[180px] lg:w-[275px] 
                 animate-float rotate-[260deg]"
            alt="Rocket"
          />
        </div>
      </section>
    </main>
  );
}
