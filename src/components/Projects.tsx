import React from 'react';
import { Plane, Zap, Droplets, Wind, ExternalLink, Wrench, Calculator, TestTube, Layers, Activity, Cpu, FlaskConical, Cog } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: Plane,
      title: 'Aircraft Preliminary Design Project',
      year: '2023',
      description: 'Designed aircraft weight, propulsion, wing, tail, and fuselage configurations in a team environment. Produced CAD conceptual design and supporting drawings.',
      color: 'from-blue-500 to-indigo-600',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: Zap,
      title: 'Space Debris Removal Project',
      year: '2022',
      description: 'Led a team of five engineers to design a laser-based space debris removal solution. Managed task allocation and timeline tracking, presented results to judges.',
      color: 'from-purple-500 to-pink-600',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      icon: Droplets,
      title: 'Waterbody Clean-Up Prototype',
      year: '2022',
      description: 'Developed prototype for industrial waste removal in rivers. Conducted fluid calculations, optimised energy efficiency, and created CAD designs.',
      color: 'from-green-500 to-teal-600',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: Wind,
      title: 'CFD Project – Thermal & Fluid Engineering',
      year: '2021',
      description: 'Simulated airflow and drag forces using CFD software and analysed results for final report.',
      color: 'from-orange-500 to-red-600',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      icon: Wrench,
      title: 'Aeroplane Model Development Project',
      year: '2021',
      description: 'Designed and performed engineering and testing (including stress testing on materials, electrical machines and heat flow) in a lab environment using specialist machines.',
      color: 'from-cyan-500 to-blue-600',
      iconBg: 'bg-cyan-100',
      iconColor: 'text-cyan-600'
    },
    {
      icon: Calculator,
      title: 'The Effect of Aerofoil Design on Aircraft Performance',
      year: '2023',
      description: 'Selected the most optimal NACA aerofoil for an MAV with reference to the design specification. Calculated lift coefficient and Reynolds number and used XFOIL to produce graphs for different aerofoil profiles.',
      color: 'from-indigo-500 to-purple-600',
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600'
    },
    {
      icon: TestTube,
      title: 'Unidirectional CFRP Tape Testing with The AMRC',
      year: '2025',
      description: 'Conducted comprehensive literature review on CFRP tape manufacturing and damage detection. Performed tensile testing using specialised machines and digital image correlation (DIC) at high temperatures. Analysed results using MATLAB and Excel.',
      color: 'from-emerald-500 to-green-600',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600'
    },
    {
      icon: Layers,
      title: 'Composite Design and Manufacturing Route for a Footbridge',
      year: '2025',
      description: 'Considered advantages and disadvantages of different design and manufacturing routes. Reinforced understanding through team communication and presented justified recommendations to judges.',
      color: 'from-teal-500 to-cyan-600',
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-600'
    },
    {
      icon: Activity,
      title: 'Synthetic Jets\' History and Research Gap',
      year: '2024',
      description: 'Conducted comprehensive literature review exploring important works and development of synthetic jets for heat transfer purposes. Proposed research gap and numerical method on the subject.',
      color: 'from-rose-500 to-pink-600',
      iconBg: 'bg-rose-100',
      iconColor: 'text-rose-600'
    },
    {
      icon: Cpu,
      title: 'Advanced Automated Manufacturing with The AMRC',
      year: '2023',
      description: 'Developed working motor manufacturing prototype focusing on automatic placement of magnets onto rotors. Implemented 3-axis robot arm using Arduino, hall sensor and PCB to detect magnet presence.',
      color: 'from-violet-500 to-purple-600',
      iconBg: 'bg-violet-100',
      iconColor: 'text-violet-600'
    },
    {
      icon: Plane,
      title: 'Aircraft Dynamic and Control Project',
      year: '2024',
      description: 'Conducted flight test in a Cessna 172 Skyhawk to gather data on elevator angle and trim tab angle. Assessed effects on longitudinal static stability and centre of gravity on manoeuvre stability.',
      color: 'from-sky-500 to-blue-600',
      iconBg: 'bg-sky-100',
      iconColor: 'text-sky-600'
    },
    {
      icon: FlaskConical,
      title: 'CFD Analysis of Flow Over a Backward-Facing Step',
      year: '2023',
      description: 'Identified flow physics and mathematical description, choosing appropriate turbulence and near-wall models. Used Ansys Fluent to define boundaries, conditions, and run simulations.',
      color: 'from-amber-500 to-orange-600',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600'
    },
    {
      icon: Cog,
      title: 'Evaluation of Steam Turbine Blade Dynamic Properties',
      year: '2023',
      description: 'Conducted tap tests on turbine blades and recorded time, input and output data. Used MATLAB to plot FFT and FRF to identify excited frequencies, resonance, damping and mode shapes.',
      color: 'from-stone-500 to-gray-600',
      iconBg: 'bg-stone-100',
      iconColor: 'text-stone-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Selected Engineering Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of innovative engineering solutions developed during my academic and professional journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color}`}></div>
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 ${project.iconBg} rounded-xl`}>
                    <project.icon className={`w-8 h-8 ${project.iconColor}`} />
                  </div>
                  <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {project.year}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className={`w-16 h-1 bg-gradient-to-r ${project.color} rounded-full`}></div>
                  <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
                    <span className="mr-2">Learn More</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {/* Hover effect background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;