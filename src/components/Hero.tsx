import React from 'react';
import { ChevronDown, Mail, FileDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    // In a real implementation, this would download the actual CV
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Richard_Chan_CV.pdf';
    link.click();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Richard Chan
          </h1>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-blue-300 font-light">
            Graduate Aerospace Engineer
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            "Passionate about engineering, problem-solving, and building technologies that shape the future."
          </p>
          
          <div className="text-lg sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            <p>
              MEng General Engineering (Aerospace) student at the University of Sheffield, on track for First Class Honours. 
              Hands-on experience in automotive repair, property restoration, and aerospace testing. Actively seeking 
              graduate opportunities in the aerospace, automotive and mechanical industry.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={downloadCV}
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <FileDown className="w-5 h-5 mr-3" />
              View My CV
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-300 text-lg font-medium rounded-lg hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-200"
            >
              <Mail className="w-5 h-5 mr-3" />
              Contact Me
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="text-white/70 hover:text-white transition-colors duration-200"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-2000"></div>
    </section>
  )
};

export default Hero;