'use client';
import { useState, useEffect } from 'react';
import { FiPhone, FiMail, FiClock, FiMapPin } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (status === "success" || status === "error") {
      setShowToast(true);
      const timer = setTimeout(() => {
        setShowToast(false);
        if (status === "success") {
          setStatus("idle");
        }
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");
      
      setStatus("success");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="w-full py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">Contact Us</h2>

        {/* Toast Notification */}
        {showToast && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
            <div className={`px-6 py-3 rounded-lg shadow-lg ${
              status === "success" ? "bg-green-100 border border-green-400" : "bg-red-100 border border-red-400"
            }`}>
              <p className={`text-center font-medium ${
                status === "success" ? "text-green-700" : "text-red-700"
              }`}>
                {status === "success" 
                  ? "Message sent successfully! We'll get back to you soon."
                  : "Failed to send message. Please try again."}
              </p>
            </div>
          </div>
        )}

        {/* Contact Info + Map Section */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Contact Info - Left */}
          <div className="space-y-6 h-full flex flex-col justify-center bg-white p-6 rounded-xl shadow-md">
            <div className="text-base md:text-lg text-gray-700 space-y-4">
              <p className="flex items-center space-x-3">
                <FiPhone className="text-2xl text-orange-600" />
                <span className="text-gray-800">+254 713 732 619</span>
              </p>

              <p className="flex items-center space-x-3">
                <FiMail className="text-2xl text-orange-600" />
                <a href="mailto:naptaktechnology@gmail.com" className="text-gray-800 hover:text-orange-600 hover:underline break-words">
                  naptaktechnology@gmail.com
                </a>
              </p>

              <p className="flex items-center space-x-3">
                <FiClock className="text-2xl text-orange-600" />
                <span className="text-gray-800">Mon–Fri, 8 AM – 5 PM</span>
              </p>

              <p className="flex items-center space-x-3">
                <FiMapPin className="text-2xl text-orange-600" />
                <span className="text-gray-800">Ngong Rd, Nairobi, Kenya</span>
              </p>
            </div>
          </div>

          {/* Map - Right */}
          <div className="h-[300px] md:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15954.93970333946!2d36.672343!3d-1.335255!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f034cdccc3f45%3A0xbde78b03444307f!2sNgong%20Rd%2C%20Kenya!5e0!3m2!1sen!2sus!4v1746355064817!5m2!1sen!2sus"
              className="rounded-xl border w-full h-full"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-8 md:mt-12">
          <form onSubmit={handleSubmit} className="grid gap-4 bg-white p-4 md:p-6 rounded-xl shadow-md">
            <div className="grid grid-cols-1 md:flex md:flex-wrap gap-4">
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-300 p-3 rounded-md w-full md:flex-1 md:min-w-[150px] disabled:opacity-50 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={status === "loading"}
              />
              <input
                type="tel"
                placeholder="Phone"
                className="border border-gray-300 p-3 rounded-md w-full md:flex-1 md:min-w-[150px] disabled:opacity-50 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                disabled={status === "loading"}
              />
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-md w-full md:flex-1 md:min-w-[150px] disabled:opacity-50 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
                disabled={status === "loading"}
              />
            </div>
            <textarea 
              placeholder="Message" 
              id='message'
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4} 
              className="border border-gray-300 p-3 rounded-md w-full disabled:opacity-50 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" 
              required 
              disabled={status === "loading"}
            />
            <button 
              type="submit" 
              disabled={status === "loading"}
              className="bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-medium text-base"
            >
              {status === "loading" ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
