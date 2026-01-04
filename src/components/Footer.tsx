
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="sm:col-span-2 md:col-span-1">
              <h3 className="text-xl sm:text-2xl font-playfair font-bold mb-3 sm:mb-4">Sneha Maurya</h3>
              <p className="text-gray-400 font-poppins text-sm sm:text-base leading-relaxed">
                Full Stack Web Developer passionate about creating beautiful and functional web experiences.
              </p>
            </div>
            
            <div>
              <h4 className="text-base sm:text-lg font-poppins font-semibold mb-3 sm:mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white font-poppins transition-colors text-sm sm:text-base">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white font-poppins transition-colors text-sm sm:text-base">About</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-white font-poppins transition-colors text-sm sm:text-base">Projects</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white font-poppins transition-colors text-sm sm:text-base">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-base sm:text-lg font-poppins font-semibold mb-3 sm:mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="https://linkedin.com/in/sneha-maurya-1a645833a" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white font-poppins transition-colors text-sm sm:text-base">LinkedIn</a></li>
                <li><a href="https://github.com/Sneha-Maurya-lab" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white font-poppins transition-colors text-sm sm:text-base">GitHub</a></li>
                <li><a href="mailto:snehamaurya7738@gmail.com" className="text-gray-400 hover:text-white font-poppins transition-colors text-sm sm:text-base">Email</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <p className="text-gray-400 font-poppins text-sm sm:text-base">
              © 2025 Sneha Maurya. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
