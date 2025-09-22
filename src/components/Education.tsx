import React from 'react';
import { GraduationCap, Award, Globe } from 'lucide-react';

const Education = () => {
  const modules = [
    { name: 'Advanced Thermodynamic Cycle', grade: '83%', color: 'bg-green-500' },
    { name: 'Aerodynamic Design', grade: '77%', color: 'bg-blue-500' },
    { name: 'Aircraft Dynamics and Control', grade: '75%', color: 'bg-indigo-500' },
    { name: 'Interdisciplinary Group Project', grade: '73%', color: 'bg-purple-500' },
    { name: 'Thermal & Fluid Engineering', grade: '72%', color: 'bg-pink-500' }
  ];

  const aLevels = [
    { subject: 'Mathematics', grade: 'A*' },
    { subject: 'Chinese', grade: 'A*' },
    { subject: 'Physics', grade: 'A' },
    { subject: 'Further Mathematics', grade: 'B' },
    { subject: 'Chemistry', grade: 'B' }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="space-y-12">
          {/* University Education */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-100 rounded-full mr-4">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">MEng General Engineering (Aerospace)</h3>
                <p className="text-lg text-gray-600">University of Sheffield (2020 – 2025)</p>
                <div className="flex items-center mt-2">
                  <Award className="w-5 h-5 text-yellow-500 mr-2" />
                  <span className="text-lg font-semibold text-blue-600">On track for 1st Class Honours</span>
                </div>
              </div>
            </div>
            
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Key Modules & Results:</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {modules.map((module, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-all duration-200">
                  <div className={`w-3 h-3 ${module.color} rounded-full mb-2`}></div>
                  <h5 className="font-semibold text-gray-800 mb-1">{module.name}</h5>
                  <div className="text-2xl font-bold text-blue-600">{module.grade}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* A-Levels */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-green-100 rounded-full mr-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">A-Levels</h3>
                <p className="text-lg text-gray-600">Idsall School (2018 – 2020)</p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {aLevels.map((subject, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-all duration-200">
                  <div className="text-2xl font-bold text-green-600 mb-1">{subject.grade}</div>
                  <div className="text-gray-700 font-medium">{subject.subject}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* GCSEs */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-purple-100 rounded-full mr-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">GCSEs</h3>
                <p className="text-lg text-gray-600">Idsall School (2016 – 2018)</p>
              </div>
            </div>
            <p className="text-lg text-gray-700">9 A*–C grades including Mathematics, English, and Science</p>
          </div>
          
          {/* Languages */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-lg p-8 text-white">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-white/20 rounded-full mr-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Languages</h3>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="text-xl font-semibold mb-2">English</h4>
                <div className="text-lg opacity-90">Fluent</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="text-xl font-semibold mb-2">Chinese</h4>
                <div className="text-lg opacity-90">Proficient</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;