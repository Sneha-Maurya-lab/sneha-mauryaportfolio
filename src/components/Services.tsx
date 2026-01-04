
const Services = () => {
  const services = [
    {
      title: 'Custom Website Design',
      description: 'Beautiful, responsive websites tailored to your brand and business needs.',
      icon: '🎨',
      features: ['Responsive Design', 'Modern UI/UX', 'Cross-browser Compatible']
    },
    {
      title: 'UI Development',
      description: 'Converting designs into pixel-perfect, interactive user interfaces.',
      icon: '💻',
      features: ['React Components', 'Interactive Elements', 'Performance Optimized']
    },
    {
      title: 'Mobile-Responsive Layouts',
      description: 'Ensuring your website looks great on all devices and screen sizes.',
      icon: '📱',
      features: ['Mobile-First Approach', 'Touch-Friendly', 'Fast Loading']
    },
    {
      title: 'Clean & Optimized Code',
      description: 'Well-structured, maintainable code following industry best practices.',
      icon: '⚙️',
      features: ['Clean Architecture', 'SEO Optimized', 'Maintainable Codebase']
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-4 sm:mb-6">
              Services
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-pastel-blue mx-auto rounded-full"></div>
            <p className="text-base sm:text-lg text-gray-600 font-poppins mt-4 sm:mt-6 max-w-2xl mx-auto px-4">
              I offer comprehensive web development services to help bring your digital vision to life.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-gradient-to-br from-pastel-lavender/20 to-pastel-pink/20 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-3xl sm:text-4xl mb-4 sm:mb-6">{service.icon}</div>
                <h3 className="text-xl sm:text-2xl font-playfair font-bold text-gray-900 mb-3 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 font-poppins mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={feature} className="flex items-center text-gray-600 font-poppins text-sm sm:text-base">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pastel-mint rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
