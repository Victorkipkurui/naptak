import Image from "next/image";

export default function Technologies() {
    const services = [
      {
        title: "QuickBooks Online Software",
        description: "Streamline your accounting processes with QuickBooks Online Software. This cloud-based solution offers a wide range of features to help you manage your business finances efficiently. From invoicing and expense tracking to bank reconciliation and tax preparation, QuickBooks Online Software simplifies your accounting tasks. With its user-friendly interface and real-time access to your financial data, you can make informed decisions and stay in control of your business finances with ease.",
        image: "/image1.jpg",
      },
      {
        title: "Zoho Books",
        description: "Zoho Books is a user-friendly accounting software designed for small businesses and self-employed professionals. It offers a wide range of features, including invoice creation, expense tracking, and financial reporting. With Zoho Books, you can easily manage your cash flow, streamline your financial processes, and make informed business decisions.",
        image: "/image2.jpeg",
      },
      {
        title: "Xero",
        description: "Xero is the perfect solution for small businesses and startups that need a reliable and efficient accounting software. With Xero, you can effortlessly manage your finances, track expenses, and generate insightful reports. The software is cloud-based, meaning you can access your financial data anytime, anywhere. Stay in control of your business's finances with Xero.",
        image: "/image3.jpg",
      },
      {
        title: "SAGE & PASTEL",
        description: "SAGE & PASTEL is a sophisticated financial management solution designed to help businesses of all sizes effectively manage their finances. This service integrates SAGE accounting software with PASTEL payroll software, providing a powerful platform for handling invoicing, expense tracking, payroll management, and financial reporting. With SAGE & PASTEL, businesses can save time and reduce errors by automating key financial processes. The user-friendly interface makes it easy for anyone to navigate and use the service, ensuring a smooth experience for both novices and experts.",
        image: "/image3.jpg",
      },
    ];
    return (
    <section id="technologies" className="w-full py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Technologies</h2>
        <ul className="grid gap-8 md:grid-cols-4 text-lg">
          {services.map((service, index) => (
            <li
              key={index}
              className="bg-white shadow-md p-6 rounded-xl transition transform hover:shadow-2xl hover:-translate-y-2 flex flex-col items-center text-center"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={100}
                height={100}
                className="w-24 h-24 mb-4 rounded-full overflow-hidden transition-transform duration-300 hover:scale-110"
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
  