import React from 'react';
import { WORK_EXPERIENCE } from '../data/portfolioData';
import { Briefcase, Calendar, Building } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary-200"></div>
          
          <div className="space-y-12">
            {WORK_EXPERIENCE.map((experience, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                }`}>
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center space-x-2 mb-3">
                      <Briefcase className="text-primary-600" size={20} />
                      <h3 className="text-xl font-bold text-gray-900">
                        {experience.title}
                      </h3>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-2">
                      <Building className="text-gray-500" size={16} />
                      <span className="text-gray-700 font-medium">
                        {experience.company}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-4">
                      <Calendar className="text-gray-500" size={16} />
                      <span className="text-gray-600 text-sm">
                        {experience.period}
                      </span>
                    </div>
                    
                    <ul className="space-y-2">
                      {experience.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-start">
                          <span className="text-primary-600 mr-2 mt-1">•</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
