
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Download, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_c9ij1jo';
const EMAILJS_TEMPLATE_ID = 'template_gt04ysc';
const EMAILJS_PUBLIC_KEY = 'qYZYleGKyTR2d9coh';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before sending your message.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Sneha Maurya',
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/fd0b5b5a-a51c-4e10-808d-48f4764385f4.png';
    link.download = 'Sneha_Maurya_Resume.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const contactInfo = [
    {
      label: 'Phone',
      value: '7738411240',
      href: 'tel:7738411240',
      icon: '📞'
    },
    {
      label: 'Email',
      value: 'snehamaurya7738@gmail.com',
      href: 'mailto:snehamaurya7738@gmail.com',
      icon: '✉️'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/sneha-maurya-1a645833a',
      href: 'https://linkedin.com/in/sneha-maurya-1a645833a',
      icon: '💼'
    },
    {
      label: 'GitHub',
      value: 'github.com/Sneha-Maurya-lab',
      href: 'https://github.com/Sneha-Maurya-lab',
      icon: '🐙'
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-pastel-lavender/20 to-pastel-pink/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-4 sm:mb-6">
              Let's Work Together
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-pastel-pink mx-auto rounded-full"></div>
            <p className="text-base sm:text-lg text-gray-600 font-poppins mt-4 sm:mt-6 max-w-2xl mx-auto px-4">
              Ready to bring your project to life? Get in touch and let's create something amazing together.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-playfair font-bold text-gray-900 mb-4 sm:mb-6">Get In Touch</h3>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-poppins font-medium mb-2 text-sm sm:text-base">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pastel-mint focus:border-transparent font-poppins text-sm sm:text-base"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-poppins font-medium mb-2 text-sm sm:text-base">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pastel-mint focus:border-transparent font-poppins text-sm sm:text-base"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-poppins font-medium mb-2 text-sm sm:text-base">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      rows={4}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pastel-mint focus:border-transparent font-poppins resize-none text-sm sm:text-base"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gray-900 text-white hover:bg-gray-800 rounded-lg py-2 sm:py-3 font-poppins text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-playfair font-bold text-gray-900 mb-4 sm:mb-6">Download Resume</h3>
                <p className="text-gray-600 font-poppins mb-4 sm:mb-6 text-sm sm:text-base">
                  Get a detailed overview of my experience, skills, and achievements.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Dialog open={isResumeOpen} onOpenChange={setIsResumeOpen}>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-full px-4 sm:px-6 py-2 sm:py-3 font-poppins flex-1 text-sm sm:text-base"
                      >
                        View Resume
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl h-[90vh] p-0 mx-4">
                      <DialogHeader className="p-4 sm:p-6 border-b">
                        <DialogTitle className="font-playfair text-lg sm:text-2xl">Sneha Maurya - Resume</DialogTitle>
                      </DialogHeader>
                      <div className="flex-1 overflow-auto p-4 sm:p-6">
                        <div className="flex justify-center">
                          <img 
                            src="/lovable-uploads/fd0b5b5a-a51c-4e10-808d-48f4764385f4.png" 
                            alt="Sneha Maurya Resume" 
                            className="max-w-full h-auto rounded-lg shadow-lg"
                          />
                        </div>
                      </div>
                      <div className="p-4 sm:p-6 border-t bg-gray-50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                        <p className="text-xs sm:text-sm text-gray-600 font-poppins">
                          Click download to save a copy of the resume
                        </p>
                        <Button
                          onClick={handleDownloadCV}
                          className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-4 sm:px-6 py-2 font-poppins flex items-center gap-2 text-sm sm:text-base w-full sm:w-auto"
                        >
                          <Download size={16} />
                          Download CV
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Button
                    onClick={handleDownloadCV}
                    className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-4 sm:px-6 py-2 sm:py-3 font-poppins flex items-center gap-2 text-sm sm:text-base"
                  >
                    <Download size={16} />
                    Download
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-playfair font-bold text-gray-900 mb-4 sm:mb-6">Contact Information</h3>
                <div className="space-y-3 sm:space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={info.label}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 sm:p-4 bg-pastel-mint/10 rounded-lg hover:bg-pastel-mint/20 transition-colors duration-300"
                    >
                      <span className="text-xl sm:text-2xl mr-3 sm:mr-4 flex-shrink-0">{info.icon}</span>
                      <div className="min-w-0">
                        <p className="font-poppins font-medium text-gray-900 text-sm sm:text-base">{info.label}</p>
                        <p className="font-poppins text-gray-600 text-xs sm:text-sm truncate">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-pastel-mint/30 to-pastel-blue/30 rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-playfair font-bold text-gray-900 mb-3 sm:mb-4">
                  Let's Create Something Amazing
                </h3>
                <p className="text-gray-700 font-poppins leading-relaxed text-sm sm:text-base">
                  Whether you need a stunning website, a complex web application, or want to bring your digital ideas to life, I'm here to help. Let's discuss your project and create something extraordinary together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
