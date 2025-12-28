export default function DivisionComponentOne({ division }: { division: Division }) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-around py-10 px-4 sm:px-8 lg:px-10 gap-8 lg:gap-0">
      
      <img
        src={division.image}
        alt={division.title}
        className="w-full max-w-[639px] h-auto lg:w-[639px] lg:h-[343px] rounded-2xl"
      />

      <div className="lg:relative lg:left-10 text-center lg:text-left">
        <h2 className="text-white text-2xl lg:text-3xl font-bold mb-4">
          {division.title}
        </h2>

        <p className="text-gray-400 text-base lg:text-lg italic mb-4">
          {division.subline}
        </p>

        <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-4">
          {division.services.map((service) => (
            <span
              key={service}
              className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
            >
              {service}
            </span>
          ))}
        </div>

        <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl mb-6">
          {division.description}
        </p>

        <a href={division.href} className="text-blue-500 hover:underline">
          Learn More
        </a>
      </div>
    </div>
  );
}
