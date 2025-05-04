import { FiPhone, FiMail, FiClock, FiMapPin } from 'react-icons/fi';
export default function Contact() {
    return (
      <section id="contact" className="w-full pt-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
  
          {/* Contact Form */}
          <form className="grid gap-4 bg-white p-6 rounded-xl shadow-md">
          <div className="flex flex-wrap gap-4">
              <input
                type="text"
                placeholder="Name"
                className="border p-3 rounded-md flex-1 min-w-[150px]"
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                className="border p-3 rounded-md flex-1 min-w-[150px]"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="border p-3 rounded-md flex-1 min-w-[150px]"
                required
              />
            </div>
            <textarea placeholder="Message" rows={5} className="border p-3 rounded-md w-full" required />
            <button type="submit" className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
  
          <div className="w-full py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">

          {/* Contact Info - Left */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>

            <div className="text-lg text-gray-700 space-y-4">
        <p className="flex items-center space-x-3">
          <FiPhone className="text-2xl text-blue-600" />
          <span>+254 713 732 619</span>
        </p>

        <p className="flex items-center space-x-3">
          <FiMail className="text-2xl text-blue-600" />
          <a href="mailto:naptaktechnology@gmail.com" className="hover:underline">
            naptaktechnology@gmail.com
          </a>
        </p>

        <p className="flex items-center space-x-3">
          <FiClock className="text-2xl text-blue-600" />
          <span>Mon–Fri, 8 AM – 5 PM</span>
        </p>

        <p className="flex items-center space-x-3">
          <FiMapPin className="text-2xl text-blue-600" />
          <span>Ngong Rd, Nairobi, Kenya</span>
        </p>
      </div>
          </div>
          <div className="w-full h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15954.93970333946!2d36.672343!3d-1.335255!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f034cdccc3f45%3A0xbde78b03444307f!2sNgong%20Rd%2C%20Kenya!5e0!3m2!1sen!2sus!4v1746355064817!5m2!1sen!2sus"
              width="100%"
              height="450"
              className="rounded-xl border w-full h-full min-h-[300px]"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

        </div>
</div>

      </div>
      </section>
    );
  }
  