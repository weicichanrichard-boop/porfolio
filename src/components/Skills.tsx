import React from 'react';
import { Code, Users, Target, Shield, Lightbulb, MessageCircle } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    {
      name: 'Test instruction development & execution',
      level: 90,
      color: 'bg-blue-500'
    },
    {
      name: 'CAD (Fusion 360)',
      level: 85,
      color: 'bg-green-500'
    },
    {
      name: 'Computational Fluid Dynamics (CFD)',
      level: 80,
      color: 'bg-purple-500'
    },
    {
      name: 'Data analysis (Python, Excel)',
      level: 75,
      color: 'bg-yellow-500'
    },
    {
      name: 'Engineering design & problem solving',
      level: 88,
      color: 'bg-red-500'
    }
  ];

  const softSkills = [
    {
      icon: Users,
      title: 'Leadership & Team Coordination',
      description: 'Led diverse engineering teams and coordinated complex project timelines',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600'
    },
    {
      icon: MessageCircle,
      title: 'Strong Communication',
      description: 'Excellent written and verbal communication skills across technical and non-technical audiences',
      color: 'from-green-500 to-teal-600',
      bgColor: 'bg-green-100',
      textColor: 'text-green-600'
    },
    {
      icon: Target,
      title: 'Logical Troubleshooting',
      description: 'Systematic approach to problem identification and resolution',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-600'
    },
    {
      icon: Shield,
      title: 'Safety-Conscious Mindset',
      description: 'Attention to detail with strong focus on safety protocols and risk management',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive skillset combining technical expertise with strong interpersonal abilities.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="space-y-8">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-blue-100 rounded-full mr-4">
                <Code className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Technical Skills</h3>
            </div>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-medium text-gray-800">{skill.name}</span>
                    <span className="text-sm font-semibold text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out transform group-hover:scale-105`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="space-y-8">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-green-100 rounded-full mr-4">
                <Lightbulb className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Soft Skills</h3>
            </div>
            
            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="group bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 ${skill.bgColor} rounded-lg group-hover:scale-110 transition-transform duration-200`}>
                      <skill.icon className={`w-6 h-6 ${skill.textColor}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                        {skill.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Gradient accent line */}
                  <div className={`w-full h-1 bg-gradient-to-r ${skill.color} rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Skills Summary */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Core Competencies</h3>
          <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Combining analytical thinking with practical problem-solving abilities, I bring a unique blend of 
            technical expertise and interpersonal skills to every engineering challenge.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;