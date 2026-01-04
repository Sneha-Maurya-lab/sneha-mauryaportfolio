
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'services', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-xl py-3 sm:py-4' 
        : 'bg-transparent py-4 sm:py-6'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <div 
            className="font-playfair text-xl sm:text-2xl font-bold text-gray-900 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:bg-clip-text"
            onClick={() => scrollToSection('home')}
          >
            Sneha.
          </div>
          
          {/* Desktop Navigation with Enhanced Styling */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative font-poppins text-sm lg:text-base font-semibold transition-all duration-300 py-2 px-1 group ${
                  activeSection === item.id 
                    ? 'text-purple-600' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {item.label}
                {/* Animated underline */}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'w-full' 
                    : 'w-0 group-hover:w-full'
                }`}></span>
                {/* Hover glow effect */}
                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-100 to-pink-100 opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></span>
              </button>
            ))}
            
            {/* Enhanced Contact Button */}
            <Button
              onClick={() => scrollToSection('contact')}
              className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 rounded-full px-6 lg:px-8 py-2.5 font-poppins text-sm lg:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform overflow-hidden group"
            >
              <span className="relative z-10">Contact</span>
              {/* Animated background overlay */}
              <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              {/* Shine effect */}
              <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-[shine_0.8s_ease-in-out] group-hover:left-full transition-all duration-800"></span>
            </Button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-3 rounded-xl transition-all duration-300 transform hover:scale-110 ${
              isMobileMenuOpen 
                ? 'bg-purple-100 text-purple-600 rotate-90' 
                : 'hover:bg-gray-100 text-gray-900'
            }`}
          >
            <div className="relative w-6 h-6">
              {/* Animated hamburger lines */}
              <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 transform ${
                isMobileMenuOpen ? 'rotate-45 top-3' : 'top-1'
              }`}></span>
              <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 top-3 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 transform ${
                isMobileMenuOpen ? '-rotate-45 top-3' : 'top-5'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Navigation Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 mt-6 pb-6' 
            : 'max-h-0 opacity-0 mt-0 pb-0'
        }`}>
          <div className="border-t border-gradient-to-r from-purple-200 to-pink-200 pt-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-left py-3 px-6 rounded-xl font-poppins font-semibold transition-all duration-300 transform hover:scale-105 group ${
                    activeSection === item.id 
                      ? 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 shadow-md' 
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animation: isMobileMenuOpen ? 'slideInLeft 0.6s ease-out forwards' : 'none'
                  }}
                >
                  <span className="relative z-10">{item.label}</span>
                  {/* Animated background for mobile items */}
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
                </button>
              ))}
              
              {/* Enhanced Mobile Contact Button */}
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 rounded-xl px-6 py-4 font-poppins font-semibold mx-2 mt-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform relative overflow-hidden group"
                style={{ 
                  animationDelay: `${navItems.length * 100}ms`,
                  animation: isMobileMenuOpen ? 'slideInLeft 0.6s ease-out forwards' : 'none'
                }}
              >
                <span className="relative z-10">Contact Me</span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
