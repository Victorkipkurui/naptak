import Image from "next/image";

export default function AboutPage() {
  return (
  <div>
      <section id="about" className="relative w-full h-screen text-white">
        <Image
          src="/image4.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        {/* Content */}
        <div className="relative z-10 flex flex-col pt-16 items-center h-full text-center px-4"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <h1 className="text-5xl font-bold border-b-4 border-orange-500 inline-block mb-6">
            About Us
          </h1>
          <div className="max-w-2xl text-lg md:text-xl leading-8">
            We are dedicated to providing businesses with powerful accounting software and expert support. Our mission is to help businesses of all sizes achieve their financial goals, make informed decisions, and thrive in the ever-evolving digital landscape.
          </div>
        </div>
      </section>
      <section
      id="about-hero"
      className="relative w-full h-screen flex items-center text-white"
    >
      {/* Background image with dim overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{ backgroundImage: 'url("/image5.jpg")' }} // Replace with your image path
      ></div>

      {/* Content box aligned to left */}
      <div className="relative z-10 max-w-lg p-8 md:ml-16 ml-4 rounded-lg"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Simplify Your Accounting
        </h1>
        <div className="w-30 h-1 bg-orange-500 mb-6"></div>
        <div className="text-xl md:text-2xl leading-relaxed">
          Take Control of Your Business with Naptak Africa Consultants
        </div>
      </div>
    </section>
  </div>
  );
}
