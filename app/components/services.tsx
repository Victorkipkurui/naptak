export default function Services() {
    const services = [
      "Streamlined Bookkeeping",
      "Advanced Financial Reporting",
      "Taxes & Statutory Payments",
    ];
  
    return (
      <section id="services" className="w-full py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Our Services</h2>
          <ul className="grid gap-6 md:grid-cols-3 text-lg">
            {services.map((service, index) => (
              <li key={index} className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition">
                {service}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
  