import DivisionComponentOne from "../components/DivisionComponents/DivisionComponentOne";
import DivisionComponentTwo from "../components/DivisionComponents/DivisionComponentTwo";
import { why_arcido } from "../types/static-data";
import { Division } from "../types/types";

export default function Home() {

  const ourDivisions: Division[] = [
    {
      id: 1,
      title: "Arcido Tech",
      image: "images/divisions-assets/arcido-tech-img.jpg",
      subline: "Build Tomorrow's Digital Experiences Today.",
      services: ["3D", "Cloud", "Website", "Apps", "Hosting"],
      description: "We engineer robust, scalable web and mobile applications that fuel business growth. From pixel-oerfect design to secure cloud hosting and seamless integrations. We turn digital visions tinto reality with cutting-edge technologies.",
      href: "/arcido-tech"
    },
    {
      id: 2,
      title: "Arcido Studio",
      image: "images/divisions-assets/arcido-studio-img.jpg",
      subline: "Craft a Visual Identity That Captivtes and Converts.",
      services: ["3D", "Photography", "Videography", "Branding"],
      description: "We shape compelling brand stories through stunning photography, high-impact videos, and world-class design. Whether you need a bold new logo, packaging design, we bring creativity and strategy to leave a lasting impression.",
      href: "/arcido-studio"
    },
    {
      id: 3,
      title: "Arcido Flow",
      image: "images/divisions-assets/arcido-flow-img.jpg",
      subline: "Deliver experiences. Not Just Products.",
      services: ["Custom Packaging", "Real-time Tracking"],
      description: "Arcido Flow streamlines your packaging and logistics, ensuring your brand's journey continues even after checkout. From custom-designed packaging to real-time tracking integraations, we help e-commerce and D2C brands deliver delight with every shipment.",
      href: "/arcido-flow"
    },
    {
      id: 4,
      title: "Arcido Digital",
      image: "images/divisions-assets/arcido-digital-img.jpg",
      subline: "Turn Visibility Into Velocity with Data-Driven Marketing.",
      services: ["SCO", "SEO", "PPF", "Analytics", "Social Media Marketing"],
      description: "At Arcido Digital, we amplify your brand presence with strategic marketing campaigns that drive results. Through SEO, paid ads, influencer collaborations, and deep analytics, we don't just market - we fuel sustainable growth.",
      href: "/arcido-digital"
    }
  ];

  return (
    <main className="w-full flex flex-col">

      {/* ================= HERO ================= */}
      <section className="relative py-40 text-center">
        <h1 className="text-white text-[150px] font-bold">Arcido</h1>
        <p className="relative tracking-[6px] -mt-5 text-white ml-80">
          DIGITAL DONE RIGHT.
        </p>
      </section>

      {/* ================= OUR AIM ================= */}
      <section className="relative px-36 py-32">
        <img
          src="images/home-assets/bulb-asset.png"
          className="absolute right-40 top-0 w-[141px] animate-float"
          alt="Bulb"
        />

        <h2 className="text-white text-[20px] mb-6">OUR AIM</h2>

        <p className="text-[57px]">
          Arcido is a <span className="text-[#72B6FF]">one-stop</span> digital solution provider
          <br />
          built to <span className="text-[#72B6FF]">launch or scale</span> startups,
          <br />
          SMEs, influencers, and e-commerce brands.
        </p>

        <div className="flex justify-between mt-20">
          <img
            src="images/home-assets/cursor-asset.png"
            className="w-[217px] animate-float rotate-[-20deg]"
            alt="Cursor"
          />
          <img
            src="images/home-assets/rocket-asset.png"
            className="w-[275px] animate-float rotate-[260deg]"
            alt="Rocket"
          />
        </div>
      </section>

      {/* ================= OUR DIVISIONS ================= */}
      <section className="bg-black px-36 py-32">
        <h2 className="text-white text-[20px] mb-12">OUR DIVISIONS</h2>

        {ourDivisions.map((division) =>
          division.id % 2 !== 0 ? (
            <DivisionComponentOne key={division.id} division={division} />
          ) : (
            <DivisionComponentTwo key={division.id} division={division} />
          )
        )}
      </section>

      {/* ================= WHY ARCIDO ================= */}
      <section className="bg-black px-36 py-32 text-center">
        <h2 className="text-white text-3xl mb-4">Why Arcido?</h2>
        <p className="text-gray-400">
          We work with world-class technologies to keep you ahead.
        </p>

        <div className="flex justify-around mt-16">
          {why_arcido.map((item) => (
            <div key={item.id} className="w-[320px] flex flex-col items-center gap-4">
              <img
                src={item.img}
                className="w-[341px] h-[341px]"
                alt={item.title}
              />
              <h3 className="text-white text-xl font-bold">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-black px-36 py-0 pt-40">
        <div className="flex flex-col items-center text-center">
          <p className="text-[57px]">
            The future of your
            <br />
            industry <span className="text-[#72B6FF]">starts here.</span>
          </p>

          <button className="mt-6 bg-white text-black px-6 py-2 rounded-lg">
            Book a Demo
          </button>
        </div>

        <div className="flex justify-between mt-20">
          <img
            src="images/home-assets/asterisk-asset.png"
            className="w-[217px] animate-float rotate-[-20deg] relative bottom-45"
            alt="Asterisk"
          />
          <img
            src="images/home-assets/cursor-bottom-asset.png"
            className="w-[275px] animate-float rotate-[315deg] bottom-90 relative"
            alt="Rocket"
          />
        </div>
      </section>
    </main>
  );
}
