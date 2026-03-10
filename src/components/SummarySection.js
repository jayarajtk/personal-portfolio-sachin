import React from 'react';
import { PROFESSIONAL_SUMMARY } from '../data/portfolioData';
import { User, Briefcase, GraduationCap, Award } from 'lucide-react';

const SummarySection = () => {
  return (
    <section id="summary" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional <span className="text-gradient">Summary</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="text-primary-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Experience</h3>
            <p className="text-gray-600">4.5+ Years in Healthcare, Banking & Education</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="text-primary-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Expertise</h3>
            <p className="text-gray-600">HR, Hospital Administration & Operations</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-primary-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Focus</h3>
            <p className="text-gray-600">Developing Industry-Ready Professionals</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <GraduationCap className="text-primary-600" size={24} />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-lg text-gray-700 leading-relaxed">
                {PROFESSIONAL_SUMMARY}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummarySection;
