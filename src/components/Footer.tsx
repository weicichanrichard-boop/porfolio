import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200 group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
          </button>
          
          {/* Name and title */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Richard Chan</h3>
            <p className="text-blue-300 text-lg">Graduate Aerospace Engineer</p>
          </div>
          
          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-6 text-gray-300">
            {['About', 'Education', 'Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const element = document.getElementById(item.toLowerCase());
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="hover:text-blue-400 transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>
          
          {/* Contact info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-gray-400 text-sm">
            <span>weicichanrichard@gmail.com</span>
            <span className="hidden sm:block">•</span>
            <span>07579039263</span>
            <span className="hidden sm:block">•</span>
            <span>Telford, UK</span>
          </div>
          
          {/* Divider */}
          <div className="w-full h-px bg-gray-700"></div>
          
          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            <p className="flex items-center justify-center gap-2">
              © {new Date().getFullYear()} Richard Chan. Built with
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              and passion for engineering.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;