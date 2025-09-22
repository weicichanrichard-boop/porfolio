import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Engineering IP Student',
      company: 'Collins Aerospace',
      period: '2023 – 2024',
      location: 'UK',
      type: 'Industrial Placement',
      description: [
        'Developed and executed test instructions for heat exchangers',
        'Performed pressure-drop testing, analysed results, and worked with quality & operations teams to resolve issues'
      ],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Junior Engineer',
      company: 'Automotive & Property Maintenance',
      period: '2015 – 2016',
      location: 'UK',
      type: 'Work Experience',
      description: [
        'Delivered car servicing (brake pads, filters, suspension replacement)',
        'Executed property restoration projects including plastering, roofing, attic work'
      ],
      color: 'from-green-500 to-teal-600'
    }
  ];

  const additionalRoles = [
    {
      title: 'Health & Safety Officer',
      organization: 'Project Phoenix',
      icon: '🛡️'
    },
    {
      title: 'Treasurer',
      organization: 'Sheffield Snowboarding Club',
      icon: '💰'
    },
    {
      title: 'Strategy Consulting Assistant',
      organization: 'KPMG',
      icon: '📊'
    },
    {
      title: 'Board Member',
      organization: 'National Citizen Service',
      icon: '👥'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional experience spanning aerospace engineering, automotive repair, and leadership roles.
          </p>
        </div>
        
        {/* Main Experience */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${exp.color}`}></div>
              
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex items-center mb-4 lg:mb-0">
                    <div className="p-3 bg-gray-100 rounded-full mr-4">
                      <Briefcase className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                      <p className="text-xl text-blue-600 font-semibold">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                    <span className={`inline-block px-3 py-1 text-sm font-medium text-white rounded-full bg-gradient-to-r ${exp.color}`}>
                      {exp.type}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Roles */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Additional Leadership Roles</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalRoles.map((role, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg hover:bg-blue-50 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  {role.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{role.title}</h4>
                <p className="text-gray-600 text-sm">{role.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;