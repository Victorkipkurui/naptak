import Image from "next/image";

export default function Services() {
    const services = [
      {
        title: "Streamlined Bookkeeping",
        description: "Efficiently manage your financial records and transactions with our automated bookkeeping service, saving you time and reducing errors.",
        image: "/image1.jpg",
      },
      {
        title: "Advanced Financial Reporting",
        description: "Gain valuable insights into your business's financial performance with our comprehensive reporting tools and analytics capabilities.",
        image: "/image2.jpeg",
      },
      {
        title: "Taxes & Statutory Payments",
        description: "We process Monthly VAT, NSSF, NHIF, NITA, and Housing Levy for our clients. Payroll management for our clients",
        image: "/image3.jpg",
      },
    ];
    return (
    <section id="services" className="w-full py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">Services</h2>
        <ul className="grid gap-8 md:grid-cols-3 text-lg">
          {services.map((service, index) => (
            <li
              key={index}
              className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition flex flex-col items-center text-center"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={100}
                height={100}
                className="rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-base">{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
    );
  }
  