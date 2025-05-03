export default function Contact() {
    return (
      <section id="contact" className="w-full py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
  
          {/* Contact Form */}
          <form className="grid gap-4 bg-white p-6 rounded-xl shadow-md">
            <input type="text" placeholder="Name" className="border p-3 rounded-md w-full" required />
            <input type="tel" placeholder="Phone" className="border p-3 rounded-md w-full" required />
            <input type="email" placeholder="Email" className="border p-3 rounded-md w-full" required />
            <textarea placeholder="Message" rows={5} className="border p-3 rounded-md w-full" required />
            <button type="submit" className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
  
          {/* Map */}
          <div className="mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18..."
              width="100%"
              height="300"
              className="rounded-xl border"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    );
  }
  