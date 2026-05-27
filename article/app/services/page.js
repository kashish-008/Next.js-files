import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      id: "tech-writing",
      title: "Technical Writing",
      description: "Professional technical articles and documentation for your products.",
      icon: "✍️"
    },
    {
       id: "code-tutorials",
      title: "Code Tutorials",
      description: "Step-by-step programming tutorials with practical examples.",
      icon: "💻"
    },
    {
      id: "content-strategy",
      title: "Content Strategy",
      description: "Strategic content planning for tech blogs and publications.",
      icon: "📊"
    },
    {
      id: "seo-optimization",
      title: "SEO Optimization",
      description: "Optimize your content for better search engine visibility.",
      icon: "🔍"
    }
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
        <p className="text-xl text-gray-600">
          What we offer to help you grow
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={service.id} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-gray-600 mb-6">
          Contact us today to discuss how we can help with your content needs.
        </p>
        <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Contact Us
        </Link>
      </div>
    </div>
  );
}