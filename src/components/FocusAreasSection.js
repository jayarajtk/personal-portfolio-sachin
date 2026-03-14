import React from 'react';
import { FOCUS_AREAS } from '../data/portfolioData';
import { GraduationCap, Users, Laptop, TrendingUp } from 'lucide-react';

const FocusAreasSection = () => {
  const getIcon = (iconName) => {
    const icons = {
      GraduationCap,
      Users,
      Laptop,
      TrendingUp
    };
    return icons[iconName] || GraduationCap;
  };

  return (
    <section id="focus-areas" className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div id="focus-areas-container" className="container-max">
        <div id="focus-areas-header" className="text-center mb-12">
          <h2 id="focus-areas-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Focus <span className="text-gradient">Areas</span>
          </h2>
          <div id="focus-areas-divider" className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          <p id="focus-areas-subtitle" className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Key areas of expertise in developing comprehensive educational programs and student success initiatives.
          </p>
        </div>

        <div id="focus-areas-grid" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOCUS_AREAS.map((area, index) => {
            const Icon = getIcon(area.icon);
            return (
              <div
                key={index}
                id={`focus-area-card-${index}`}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div id={`focus-area-icon-${index}`} className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <Icon className="text-primary-600" size={32} />
                </div>
                <h3 id={`focus-area-title-${index}`} className="text-xl font-semibold text-gray-900 mb-3">
                  {area.title}
                </h3>
                <p id={`focus-area-description-${index}`} className="text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>

        <div id="focus-areas-strategy" className="mt-12 text-center">
          <div id="focus-areas-strategy-card" className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl p-8 text-white">
            <h3 id="focus-areas-strategy-title" className="text-2xl font-bold mb-4">Career Background</h3>
            <p id="focus-areas-strategy-desc" className="text-lg opacity-90 max-w-3xl mx-auto">
              Leveraging 3+ years of banking operations experience to build excellence in healthcare education 
              and administration, bringing analytical rigor and operational efficiency to academic programs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FocusAreasSection;
