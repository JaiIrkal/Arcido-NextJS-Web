import DivisionComponentOne from "../components/DivisionComponents/DivisionComponentOne";
import DivisionComponentTwo from "../components/DivisionComponents/DivisionComponentTwo";
import { why_arcido } from "../types/static-data";
import { Division } from "../types/types";

export default function Home() {

  const ourDivisions: Division[] = [
    {
      id: 1,
      title: "Arcido Tech",
      image: "images/subsidary-icons/landscape/arcido-tech-logo.png",
      subline: "Build Tomorrow's Digital Experiences Today.",
      services: ["3D", "Cloud", "Website", "Apps", "Hosting"],
      description: "We engineer robust, scalable web and mobile applications that fuel business growth. From pixel-perfect design to secure cloud hosting and seamless integrations. We turn digital visions into reality with cutting-edge technologies.",
      href: "/arcido-tech"
    },
    {
      id: 2,
      title: "Arcido Studios",
      image: "images/subsidary-icons/landscape/arcido-studios-logo.png",
      subline: "Craft a Visual Identity That Captivates and Converts.",
      services: ["3D", "Photography", "Videography", "Branding"],
      description: "We shape compelling brand stories through stunning photography, high-impact videos, and world-class design. Whether you need a bold new logo, packaging design, we bring creativity and strategy to leave a lasting impression.",
      href: "/arcido-studio"
    },
    {
      id: 3,
      title: "Arcido Flow",
      image: "images/subsidary-icons/landscape/arcido-flow-logo.png",
      subline: "Deliver experiences. Not Just Products.",
      services: ["Custom Packaging", "Real-time Tracking"],
      description: "Arcido Flow streamlines your packaging and logistics, ensuring your brand's journey continues even after checkout. From custom-designed packaging to real-time tracking integrations, we help e-commerce and D2C brands deliver delight with every shipment.",
      href: "/arcido-flow"
    },
    {
      id: 4,
      title: "Arcido Digital",
      image: "images/subsidary-icons/landscape/arcido-digital-logo.png",
      subline: "Turn Visibility Into Velocity with Data-Driven Marketing.",
      services: ["SCO", "SEO", "PPF", "Analytics", "Social Media Marketing"],
      description: "At Arcido Digital, we amplify your brand presence with strategic marketing campaigns that drive results. Through SEO, paid ads, influencer collaborations, and deep analytics, we don't just market - we fuel sustainable growth.",
      href: "/arcido-digital"
    }
  ];

  return (
    <main className="w-full flex flex-col">

      {/* ================= HERO ================= */}
      <section className="relative py-24 sm:py-32 md:py-40 text-center px-4">
        <h1 className="mb-4 text-white font-bold text-6xl sm:text-7xl md:text-8xl lg:text-[150px]">
          Arcido
        </h1>

        <p className="relative mt-4 sm:-mt-2 md:-mt-5 
               text-white tracking-[4px] sm:tracking-[6px] 
               text-xs sm:text-sm md:text-base
               lg:ml-6">
          DIGITAL DONE RIGHT.
        </p>

      </section>


      {/* ================= OUR AIM ================= */}
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
        <h2 className="text-white text-sm sm:text-base lg:text-[20px] mb-4 sm:mb-6">
          OUR AIM
        </h2>

        {/* Main Text */}
        <p
          className="text-white 
      text-2xl sm:text-4xl lg:text-[57px] 
      leading-snug sm:leading-tight lg:leading-[1.2]"
        >
          Arcido is a <span className="text-[#72B6FF]">one-stop</span> digital solution{" "}
          <br className="hidden sm:block" />
          provider built to <span className="text-[#72B6FF]">launch or scale</span> startups,
          <br className="hidden sm:block" />
          SMEs, influencers, and e-commerce brands.
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


      {/* ================= OUR DIVISIONS ================= */}
      <section className="bg-black px-6 sm:px-12 lg:px-36 py-20 sm:py-24 lg:py-20">
        <h2 className="text-white text-sm sm:text-base lg:text-[20px] mb-8 lg:mb-12">
          OUR DIVISIONS
        </h2>

        {ourDivisions.map((division) =>
          division.id % 2 !== 0 ? (
            <DivisionComponentOne key={division.id} division={division} />
          ) : (
            <DivisionComponentTwo key={division.id} division={division} />
          )
        )}
      </section>


      {/* ================= WHY ARCIDO ================= */}
      <section className="bg-black px-6 sm:px-12 lg:px-36 py-20 sm:py-20 lg:py-32 text-center">
        <h2 className="text-white text-2xl sm:text-3xl mb-4">
          Why Arcido?
        </h2>

        <p className="text-gray-400 text-sm sm:text-base">
          We work with world-class technologies to keep you ahead.
        </p>

        <div className="flex flex-col lg:flex-row justify-around items-center gap-12 mt-12 lg:mt-16">
          {why_arcido.map((item) => (
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


      {/* ================= CTA ================= */}
      <section className="bg-black px-6 sm:px-12 lg:px-36 py-0 pt-24 sm:pt-32 lg:pt-30">

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
