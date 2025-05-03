import Image from "next/image";
import bgImage from "@/public/image4.jpg";

export default function AboutPage() {
  return (
    <section className="relative w-full h-screen text-white">

      {/* Background image */}
      <Image
        src={bgImage}
        alt="About background"
        fill
        className="object-cover"
      />

      {/* Overlay (optional dark tint for readability) */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <h1 className="text-5xl font-bold border-b-4 border-blue-500 inline-block mb-6">
          About
        </h1>

        <p className="max-w-2xl text-lg md:text-xl leading-8">
          We are dedicated to providing businesses with powerful accounting software and expert support. Our mission is to help businesses of all sizes achieve their financial goals, make informed decisions, and thrive in the ever-evolving digital landscape.
        </p>
      </div>
    </section>
  );
}
