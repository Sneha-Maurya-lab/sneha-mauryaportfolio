
import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles, Code, Palette } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pastel-cream via-pastel-pink/20 to-pastel-lavender/30 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-4 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-pastel-mint/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-4 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 bg-pastel-blue/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 sm:w-20 sm:h-20 bg-pastel-pink/25 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 sm:w-28 sm:h-28 bg-pastel-lavender/20 rounded-full blur-2xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8 animate-fade-in order-2 lg:order-1">
            {/* Status Badge */}
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/20 text-center w-full sm:w-auto">
              <div className="flex items-center gap-2 sm:gap-3 mx-auto">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full absolute top-0 animate-ping"></div>
                </div>
                <span className="text-gray-700 font-poppins text-xs sm:text-sm font-medium">Available for opportunities</span>
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-pastel-mint" />
              </div>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold text-gray-900 leading-tight">
                  Hey, <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-pastel-pink to-pastel-lavender">there</span>
                </h1>
                
                <div className="space-y-1 sm:space-y-2">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-gray-800">
                    I AM
                  </h2>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-pastel-mint to-pastel-blue">
                    SNEHA
                  </h2>
                </div>
              </div>
              
              {/* Role & Skills */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                  <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-pastel-mint/20 rounded-full">
                    <Code className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700" />
                    <span className="text-sm sm:text-lg font-poppins font-semibold text-gray-800">FULL STACK</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-pastel-blue/20 rounded-full">
                    <Palette className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700" />
                    <span className="text-sm sm:text-lg font-poppins font-semibold text-gray-800">WEB DEVELOPER</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <div className="space-y-4 text-center lg:text-left">
              <p className="text-lg sm:text-xl font-poppins max-w-lg mx-auto lg:mx-0 leading-relaxed text-slate-500">
                Building <span className="font-semibold text-gray-800">Beautiful & Functional</span> Web Experiences with passion for frontend development and modern web technologies.
              </p>
              
              {/* Stats */}
              <div className="flex gap-6 sm:gap-8 pt-4 justify-center lg:justify-start">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-playfair font-bold text-gray-900">4+</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-poppins">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-playfair font-bold text-gray-900">2+</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-poppins">Years Learning</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-playfair font-bold text-gray-900">5+</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-poppins">Technologies</div>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 w-full">
              <Button 
                onClick={() => scrollToSection('projects')} 
                className="bg-gradient-to-r from-gray-900 to-gray-700 text-white hover:from-gray-800 hover:to-gray-600 rounded-full px-6 sm:px-8 py-3 sm:py-4 font-poppins text-base sm:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                View My Work
                <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')} 
                variant="outline" 
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-full px-6 sm:px-8 py-3 sm:py-4 font-poppins text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-sm w-full sm:w-auto"
              >
                Contact Me
              </Button>
            </div>
          </div>
          
          {/* Profile Image Section */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative">
                <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-pastel-pink/40 via-pastel-mint/30 to-pastel-lavender/40 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500 shadow-2xl">
                  <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-88 lg:h-88 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-inner">
                    <img 
                      src="https://i.postimg.cc/9MSRGn82/Snehamm.jpg" 
                      alt="Sneha Maurya - Full Stack Developer" 
                      className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>
                </div>
                
                {/* Floating Icons */}
                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg animate-bounce delay-300">
                  <Code className="w-5 h-5 sm:w-8 sm:h-8 text-gray-700" />
                </div>
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-10 h-10 sm:w-14 sm:h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg animate-bounce delay-700">
                  <Palette className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700" />
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-pastel-mint/40 to-pastel-blue/40 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-pastel-pink/40 to-pastel-lavender/40 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              
              {/* Orbit Elements */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-pastel-mint rounded-full"></div>
                </div>
              </div>
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pastel-pink rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-1 sm:gap-2 text-gray-600">
          <span className="text-xs sm:text-sm font-poppins">Scroll Down</span>
          <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
