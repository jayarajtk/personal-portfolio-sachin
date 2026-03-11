import React from 'react';
import { EDUCATION } from '../data/portfolioData';
import { GraduationCap, Calendar, Building, Award, Star } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-gray-50">
      <div id="education-container" className="container-max">
        <div id="education-header" className="text-center mb-12">
          <h2 id="education-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <div id="education-divider" className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div id="education-grid" className="grid md:grid-cols-2 gap-8">
          {EDUCATION.map((education, index) => (
            <div
              key={index}
              id={`education-card-${index}`}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div id={`education-card-content-${index}`} className="flex items-start space-x-4">
                <div id={`education-icon-wrapper-${index}`} className="flex-shrink-0">
                  <div id={`education-icon-${index}`} className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="text-primary-600" size={24} />
                  </div>
                </div>
                <div id={`education-details-${index}`} className="flex-1">
                  <h3 id={`education-degree-${index}`} className="text-xl font-bold text-gray-900 mb-2">
                    {education.degree}
                  </h3>
                  
                  <div id={`education-institution-${index}`} className="flex items-center space-x-2 mb-2">
                    <Building className="text-gray-500" size={16} />
                    <span id={`education-institution-name-${index}`} className="text-gray-700 font-medium">
                      {education.institution}
                    </span>
                  </div>
                  
                  <div id={`education-year-${index}`} className="flex items-center space-x-2 mb-3">
                    <Calendar className="text-gray-500" size={16} />
                    <span id={`education-year-text-${index}`} className="text-gray-600 text-sm">
                      {education.year}
                    </span>
                  </div>

                  {education.honors && (
                    <div id={`education-honors-${index}`} className="flex items-center space-x-2 mb-3">
                      <Star className="text-yellow-500" size={16} />
                      <span id={`education-honors-text-${index}`} className="text-sm font-medium text-gray-700 bg-yellow-50 px-2 py-1 rounded">
                        {education.honors}
                      </span>
                    </div>
                  )}

                  {education.achievements && (
                    <div id={`education-achievements-${index}`} className="space-y-2">
                      {education.achievements.map((achievement, idx) => (
                        <div key={idx} id={`achievement-${index}-${idx}`} className="flex items-center space-x-2">
                          <Award className="text-primary-600" size={14} />
                          <span className="text-sm text-gray-600">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
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
