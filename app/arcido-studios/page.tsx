"use client";

import dynamic from "next/dynamic";
import { arcido_studio_services } from "@/types/static-data";

// Disable SSR for Lottie
// const Lottie = dynamic(() => import("lottie-react"), {
//   ssr: false,
// });

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-transparent text-white text-center">
      <section className="mt-8">
        <img src="/images/subsidary-icons/landscape/arcido-studios-logo.png"
          alt="Arcido Studio Logo"
          className="
      w-0 h-0
      sm:w-[608px] sm:h-[608px]
      sm:-mb-20 sm:-mt-18
    "
        />
        <img src="/images/subsidary-icons/arcido-studios-logo.png"
          alt="Arcido Studio Logo"
          className="
      w-[296px] h-[296px]
      sm:0 sm:h-0
      mb-8 mt-8
    "
        />
      </section>

      {/* Our Aim */}
      <section className="relative px-6 sm:px-12 lg:px-36 py-20 sm:py-24 lg:py-32">

        {/* Bulb */}
        <img
          src="images/home-assets/bulb-asset.png"
          className="absolute right-4 sm:right-20 lg:right-40 top-0 
               w-[80px] sm:w-[110px] lg:w-[141px] 
               animate-float"
          alt="Bulb"
        />
        
        {/* Heading */}
        <h2 className="text-white text-sm sm:text-base lg:text-[20px] mb-4 sm:mb-6
               text-center lg:text-left">
          OUR AIM
        </h2>

        {/* Main Text */}
        <p
          className="text-white
    text-2xl sm:text-4xl lg:text-[57px]
    leading-snug sm:leading-tight lg:leading-[1.2]
    text-center lg:text-left"
        >
          Shape a compelling visual identity through{" "}
          <span className="text-[#72B6FF]">photography, videography, UI/UX, </span> and{" "}
          <span className="text-[#72B6FF]">design elements.</span>
        </p>


        {/* Bottom Icons */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-10 mt-12 sm:mt-16 lg:mt-20">

          <img
            src="images/home-assets/cursor-asset.png"
            className="hidden sm:block 
             w-[140px] sm:w-[140px] lg:w-[217px]
             animate-float rotate-[-20deg]"
            alt="Cursor"
          />


          <img
            src="images/home-assets/rocket-asset.png"
            className="w-[170px] sm:w-[180px] lg:w-[275px] 
                 animate-float rotate-[260deg]"
            alt="Rocket"
          />
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-black sm:px-12 py-20 sm:py-24 lg:py-32 text-center w-full">
        <h2 className="text-white text-2xl sm:text-3xl mb-4">
          Our Services
        </h2>

        <p className="text-gray-400 text-sm sm:text-base">
          We work with world-class technologies to keep you ahead.
        </p>

        <div className="flex flex-col lg:flex-row justify-around items-center gap-12 mt-12 lg:mt-16">
          {arcido_studio_services.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-[320px] flex flex-col items-center gap-4"
            >
              <img
                src={item.img}
                className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[341px] lg:h-[341px]"
                alt={item.title}
              />
              <h3 className="text-white text-lg sm:text-xl font-bold">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-black px-6 sm:px-12 lg:px-36 py-0 pt-24 sm:pt-32 lg:pt-40">

        {/* Text + CTA */}
        <div className="flex flex-col items-center text-center">
          <p
            className="text-white 
        text-2xl sm:text-4xl lg:text-[57px]
        leading-tight sm:leading-snug"
          >
            The future of your
            <br className="sm:block" />
            industry <span className="text-[#72B6FF]">starts here.</span>
          </p>

          <a href="mailto:support@arcido.in?subject=Demo%20Request&body=Hi%20Arcido%20Team,">
            <button className="mt-6 bg-white text-black px-6 py-2 rounded-lg text-sm sm:text-base">
              Contact Us
            </button>
          </a>
        </div>

        {/* Floating Assets */}
        <div className="flex justify-between items-center mt-12 sm:mt-16 lg:mt-20">

          <img
            src="images/home-assets/asterisk-asset.png"
            className="w-[120px] sm:w-[170px] lg:w-[217px] 
                 animate-float rotate-[-20deg]
                 relative sm:bottom-20 lg:bottom-45"
            alt="Asterisk"
          />

          <img
            src="images/home-assets/cursor-bottom-asset.png"
            className="w-[150px] sm:w-[220px] lg:w-[275px] 
                 animate-float rotate-[315deg]
                 relative sm:bottom-28 lg:bottom-90"
            alt="Cursor"
          />
        </div>
      </section>
    </main>
  );
}
