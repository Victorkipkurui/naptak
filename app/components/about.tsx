import Image from "next/image";
import bgImage from "@/public/image4.jpg"

export default function AboutPage() {
  return (
    <section id="about" className="relative w-full h-screen text-white">
      <Image
        src={bgImage}
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <h1 className="text-5xl font-bold border-b-4 border-blue-500 inline-block mb-6">
          About Us
        </h1>
        <div className="max-w-2xl text-lg md:text-xl leading-8">
          We are dedicated to providing businesses with powerful accounting software and expert support. Our mission is to help businesses of all sizes achieve their financial goals, make informed decisions, and thrive in the ever-evolving digital landscape.
        </div>
      </div>
    </section>
  );
}
