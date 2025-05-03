// app/page.tsx

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full">
      {/* Section 1 */}
      <section
        className="w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url(/image1.jpg)" }}
      >
        <div className="text-center p-4 bg-black bg-opacity-50 rounded-lg max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Site</h1>
          <p className="text-lg md:text-2xl">Your gateway to amazing solutions.</p>
        </div>
      </section>

      {/* Section 2 */}
      <section
        className="w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url(/image4.jpg)" }}
      >
        <div className="text-center p-4 bg-black bg-opacity-50 rounded-lg max-w-xl">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">Our Services</h2>
          <p className="text-lg md:text-2xl">We provide innovative advertising solutions to boost your brand visibility.</p>
        </div>
      </section>

      {/* Section 3 */}
      <section
        className="w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url(/image3.jpg)" }}
      >
        <div className="text-center p-4 bg-black bg-opacity-50 rounded-lg max-w-xl">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg md:text-2xl">Get in touch and let&apos;s work together.</p>
        </div>
      </section>
    </main>
  );
}
