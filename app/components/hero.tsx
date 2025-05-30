import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen text-white">

      {/* Background Image */}
      <Image
        src="/image2.jpeg"
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Empower Your Business
        </h1>

        <div className="w-24 h-1 bg-orange-500 mb-4"></div>

        <div className="text-lg md:text-2xl max-w-xl">
          Unlock Your Financial Potential
        </div>
      </div>
    </section>
  );
}
