export default function Technologies() {
    const tools = ["QuickBooks Online Software", "Zoho Books", "Xero", "SAGE", "PASTEL"];
  
    return (
      <section id="technologies" className="w-full py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Our Technologies</h2>
          <ul className="grid gap-6 md:grid-cols-3 text-lg">
            {tools.map((tool, index) => (
              <li key={index} className="bg-gray-100 shadow-inner p-6 rounded-xl hover:shadow-md transition">
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
  