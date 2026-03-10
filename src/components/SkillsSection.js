import React, { useState } from 'react';
import { SKILLS } from '../data/portfolioData';
import { Award, Users, Briefcase, BookOpen, CheckCircle } from 'lucide-react';

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Categorize skills for better organization
  const skillCategories = {
    'Core Expertise': [
      'Human Resource Management',
      'Hospital Administration',
      'Recruitment & Selection',
      'Training & Development',
      'Performance Management'
    ],
    'Operations': [
      'HR Operations',
      'Banking Operations',
      'Documentation & Record Management',
      'Process Improvement',
      'Compliance & KYC Verification'
    ],
    'Technical': [
      'Healthcare Information System (HIS)',
      'CRM Handling',
      'MS Excel, Word, PPT & Reporting'
    ],
    'Academic': [
      'Internship Coordination & Student Mentoring'
    ]
  };

  const getFilteredSkills = () => {
    if (selectedCategory === 'all') return SKILLS;
    return skillCategories[selectedCategory] || [];
  };

  const getIcon = (skill) => {
    if (skillCategories['Core Expertise'].includes(skill)) {
      return <Award className="text-primary-600" size={20} />;
    } else if (skillCategories['Operations'].includes(skill)) {
      return <Briefcase className="text-primary-600" size={20} />;
    } else if (skillCategories['Technical'].includes(skill)) {
      return <CheckCircle className="text-primary-600" size={20} />;
    } else {
      return <BookOpen className="text-primary-600" size={20} />;
    }
  };

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
              selectedCategory === 'all'
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Skills
          </button>
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredSkills().map((skill, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="flex-shrink-0">
                  {getIcon(skill)}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {skill}
                </h3>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary-600" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">HR Focus</h4>
              <p className="text-gray-600">Expertise in HR operations and management</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="text-primary-600" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Operations</h4>
              <p className="text-gray-600">Strong background in banking & healthcare ops</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-primary-600" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Academic</h4>
              <p className="text-gray-600">Experienced in training & development</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary-600" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Compliance</h4>
              <p className="text-gray-600">KYC and regulatory compliance expert</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
