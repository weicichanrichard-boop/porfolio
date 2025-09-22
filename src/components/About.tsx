import React from 'react';
import { User, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="flex-shrink-0">
                <User className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Motivated Engineer</h3>
                <p className="text-gray-600 leading-relaxed">
                  I am a motivated and curious engineer with a passion for solving complex problems and building practical solutions.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="flex-shrink-0">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Hands-On Experience</h3>
                <p className="text-gray-600 leading-relaxed">
                  Over the past five years, I've combined academic excellence with hands-on experience in automotive repair, 
                  property renovation, and aerospace test engineering.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="flex-shrink-0">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Personal Interests</h3>
                <p className="text-gray-600 leading-relaxed">
                  Outside of engineering, I enjoy playing the guitar and piano, as well as staying active through 
                  badminton and competitive boxing.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Professional Experience</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                My work at Collins Aerospace allowed me to develop test instructions, perform pressure-drop tests on heat exchangers, 
                and collaborate closely with engineering, quality, and operations teams.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I thrive in fast-paced environments where attention to detail, teamwork, and creative problem-solving are critical.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-blue-200 transition-all duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
              <div className="bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-blue-200 transition-all duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">1st</div>
                <div className="text-gray-600">Class Honours Track</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;