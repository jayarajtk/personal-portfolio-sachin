import React from 'react';
import { EDUCATION } from '../data/portfolioData';
import { GraduationCap, Calendar, Building } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {EDUCATION.map((education, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="text-primary-600" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {education.degree}
                  </h3>
                  
                  <div className="flex items-center space-x-2 mb-2">
                    <Building className="text-gray-500" size={16} />
                    <span className="text-gray-700 font-medium">
                      {education.institution}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Calendar className="text-gray-500" size={16} />
                    <span className="text-gray-600 text-sm">
                      {education.year}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Achievement Highlight */}
        <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Academic Excellence</h3>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Strong foundation in business administration and technology management, 
            complemented by specialized expertise in healthcare administration and human resource management.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
