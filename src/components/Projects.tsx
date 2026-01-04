
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Kid's Toys Store Website",
      description: "E-commerce platform with image upload functionality and responsive design for a seamless shopping experience.",
      tech: ['PHP', 'JavaScript', 'HTML/CSS'],
      period: 'June 2024 – Sept 2024',
      features: ['E-commerce Platform', 'Image Upload', 'Responsive Design', 'Payment Integration'],
      color: 'from-pastel-pink/30 to-pastel-lavender/30'
    },
    {
      title: "Nail Art Customization Platform",
      description: "Full-stack web application with user authentication, product customization, and order management system.",
      tech: ['React.js', 'Node.js', 'MongoDB'],
      period: 'Feb 2025 – May 2025',
      features: ['User Authentication', 'Product Customization', 'Order Management', 'Real-time Updates'],
      color: 'from-pastel-mint/30 to-pastel-blue/30'
    },
    {
      title: "PAW PROPHET – Dog Breed Prediction",
      description: "AI-based application that predicts dog breeds from uploaded images using machine learning algorithms.",
      tech: ['Python', 'Streamlit', 'Machine Learning'],
      period: 'Nov 2024 – Feb 2025',
      features: ['AI Predictions', 'Image Processing', 'Interactive UI', 'Breed Database'],
      color: 'from-pastel-peach/30 to-pastel-pink/30'
    },
    {
      title: "Art Gallery Website",
      description: "Interactive gallery showcasing artworks with categorized previews and smooth navigation.",
      tech: ['React.js', 'CSS3', 'JavaScript'],
      period: 'Oct 2024 – Nov 2024',
      features: ['Interactive Gallery', 'Category Filters', 'Smooth Animations', 'Responsive Layout'],
      color: 'from-pastel-lavender/30 to-pastel-mint/30'
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-pastel-cream to-pastel-blue/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-4 sm:mb-6">
              Featured Projects
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-pastel-mint mx-auto rounded-full"></div>
            <p className="text-base sm:text-lg text-gray-600 font-poppins mt-4 sm:mt-6 max-w-2xl mx-auto px-4">
              A showcase of my recent work and the technologies I've mastered.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`bg-gradient-to-br ${project.color} rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-playfair font-bold text-gray-900 mb-2 sm:mb-3">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-poppins mb-3 sm:mb-4">
                    {project.period}
                  </p>
                  <p className="text-gray-700 font-poppins leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                    {project.description}
                  </p>
                </div>
                
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-base sm:text-lg font-poppins font-semibold text-gray-900 mb-2 sm:mb-3">
                    Key Features:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={feature} className="flex items-center text-gray-600 font-poppins text-xs sm:text-sm">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pastel-mint rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-1 bg-white/80 text-gray-700 rounded-full text-xs sm:text-sm font-poppins"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
