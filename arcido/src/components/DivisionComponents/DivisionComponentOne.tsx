import { Division } from "@/src/types/types";

export default function DivisionComponentOne({ division }: Readonly<{ division: Division }>) {
    return (
        <div key={division.title} className="flex items-center justify-around py-10 px-10">
            <div className="">
                <img 
                    src={division.image} 
                    alt={division.title} 
                    className="w-[639px] h-[343px] mb-6 rounded-2xl" 
                />
            </div>
            <div className="relative left-10">
                <h2 className="text-white text-3xl font-bold mb-4">{division.title}</h2>
                <p className="text-gray-400 text-lg italic mb-4 text-left">{division.subline}</p>
                <div className="flex gap-4 mb-4">
                    {division.services.map((service) => (
                        <span key={service} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                            {service}
                        </span>
                    ))}
                </div>
                <p className="text-gray-300 text-justify max-w-2xl mb-6">{division.description}</p>
                <a
                    href={division.href}
                    className="text-blue-500 hover:underline"
                >
                    Learn More
                </a>
            </div>
        </div>
    );
}