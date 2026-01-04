
const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-pastel-cream/30 to-pastel-pink/10 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-4 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-pastel-mint/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-4 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 bg-pastel-blue/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 sm:w-20 sm:h-20 bg-pastel-lavender/15 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 sm:w-28 sm:h-28 bg-pastel-pink/10 rounded-full blur-2xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Header Section */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/20 mb-6 sm:mb-8">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-pastel-mint rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-poppins text-xs sm:text-sm font-medium">Get to know me better</span>
                <div className="text-base sm:text-lg">✨</div>
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-playfair font-bold text-gray-900 mb-4 sm:mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-pastel-pink to-pastel-lavender italic">Me</span>
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-pastel-mint to-pastel-blue mx-auto rounded-full"></div>
            <p className="text-lg sm:text-xl text-gray-600 font-poppins max-w-2xl mx-auto mt-4 sm:mt-6 leading-relaxed px-4">
              Passionate developer crafting digital experiences with creativity and precision
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              {/* Enhanced Profile Image Section */}
              <div className="flex justify-center lg:justify-start mb-8 sm:mb-12">
                <div className="relative group">
                  <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl bg-gradient-to-br from-pastel-pink/40 via-pastel-mint/30 to-pastel-lavender/40 flex items-center justify-center shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                    <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-2xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-inner">
                      <img 
                        src="https://i.postimg.cc/9MSRGn82/Snehamm.jpg" 
                        alt="Sneha Maurya - About" 
                        className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-xl object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg animate-bounce delay-300">
                    <span className="text-lg sm:text-2xl">👋</span>
                  </div>
                  <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-10 h-10 sm:w-14 sm:h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg animate-bounce delay-700">
                    <span className="text-base sm:text-xl">💻</span>
                  </div>
                  
                  {/* Decorative Background */}
                  <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-pastel-mint/40 to-pastel-blue/40 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-pastel-pink/40 to-pastel-lavender/40 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                </div>
              </div>
              
              {/* Enhanced Text Content */}
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-white/20">
                  <h3 className="text-xl sm:text-2xl font-playfair font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                    <span className="text-xl sm:text-2xl">🚀</span>
                    My Journey
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 font-poppins leading-relaxed">
                    My name is Sneha Maurya. I recently completed my Bachelor of Science in Computer Science from Mulund College of Commerce, Mumbai University, with a CGPA of 7.23. During my academic journey, I developed a strong interest in web development and built several projects, including a Nail Art Customization Platform using React.js and Node.js, and an e-commerce toy store website using PHP and JavaScript.
                  </p>
                </div>
                
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-white/20">
                  <h3 className="text-xl sm:text-2xl font-playfair font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                    <span className="text-xl sm:text-2xl">💡</span>
                    My Passion
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 font-poppins leading-relaxed">
                    I'm passionate about creating beautiful, functional web experiences that solve real-world problems. My expertise spans both frontend and backend development, with a particular love for modern JavaScript frameworks and clean, responsive design.
                  </p>
                </div>
                
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-white/20">
                  <h3 className="text-xl sm:text-2xl font-playfair font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                    <span className="text-xl sm:text-2xl">🌟</span>
                    Beyond Code
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 font-poppins leading-relaxed">
                    When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and staying up-to-date with the latest web development trends.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Enhanced Education & Skills Section */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <div className="bg-gradient-to-br from-pastel-lavender/30 to-pastel-pink/30 rounded-3xl p-6 sm:p-8 backdrop-blur-sm border border-white/20 shadow-xl">
                <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-gray-900 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                  <span className="text-2xl sm:text-3xl">🎓</span>
                  Education
                </h3>
                
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <h4 className="text-lg sm:text-xl font-poppins font-semibold text-gray-900 mb-2 sm:mb-3">
                    Bachelor of Science in Computer Science
                  </h4>
                  <p className="text-gray-700 font-poppins mb-2 sm:mb-3 text-base sm:text-lg">
                    Mulund College of Commerce, Mumbai University
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="text-gray-600 font-poppins text-sm sm:text-base">2022 – 2025</span>
                    <div className="flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-2 bg-pastel-mint/20 rounded-full w-fit">
                      <span className="text-base sm:text-lg">📊</span>
                      <span className="font-semibold text-gray-800 text-sm sm:text-base">CGPA: 7.23</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Fun Facts Section */}
              <div className="bg-gradient-to-br from-pastel-blue/20 to-pastel-mint/30 rounded-3xl p-6 sm:p-8 backdrop-blur-sm border border-white/20 shadow-xl">
                <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-gray-900 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                  <span className="text-2xl sm:text-3xl">⚡</span>
                  Quick Facts
                </h3>
                
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <div className="text-2xl sm:text-3xl font-playfair font-bold text-gray-900 mb-1 sm:mb-2">4+</div>
                    <div className="text-xs sm:text-sm text-gray-600 font-poppins">Projects Built</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <div className="text-2xl sm:text-3xl font-playfair font-bold text-gray-900 mb-1 sm:mb-2">2+</div>
                    <div className="text-xs sm:text-sm text-gray-600 font-poppins">Years Learning</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <div className="text-2xl sm:text-3xl font-playfair font-bold text-gray-900 mb-1 sm:mb-2">5+</div>
                    <div className="text-xs sm:text-sm text-gray-600 font-poppins">Technologies</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <div className="text-2xl sm:text-3xl font-playfair font-bold text-gray-900 mb-1 sm:mb-2">∞</div>
                    <div className="text-xs sm:text-sm text-gray-600 font-poppins">Ideas & Dreams</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
