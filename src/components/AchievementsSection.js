import React from 'react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { Award, Medal, Users, BookOpen } from 'lucide-react';

const AchievementsSection = () => {
  const getIcon = (iconName) => {
    const icons = {
      Award,
      Certificate: Medal,
      Users,
      BookOpen
    };
    return icons[iconName] || Award;
  };

  return (
    <section id="achievements" className="section-padding bg-gray-50">
      <div id="achievements-container" className="container-max">
        <div id="achievements-header" className="text-center mb-12">
          <h2 id="achievements-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Key <span className="text-gradient">Achievements</span>
          </h2>
          <div id="achievements-divider" className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          <p id="achievements-subtitle" className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Notable accomplishments and professional milestones that highlight career growth and impact.
          </p>
        </div>

        <div id="achievements-grid" className="grid md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((achievement, index) => {
            const Icon = getIcon(achievement.icon);
            return (
              <div
                key={index}
                id={`achievement-card-${index}`}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primary-600"
              >
                <div id={`achievement-card-content-${index}`} className="flex items-start space-x-4">
                  <div id={`achievement-icon-${index}`} className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="text-primary-600" size={24} />
                  </div>
                  <div id={`achievement-details-${index}`} className="flex-1">
                    <div id={`achievement-header-${index}`} className="flex items-center justify-between mb-2">
                      <h3 id={`achievement-title-${index}`} className="text-xl font-semibold text-gray-900">
                        {achievement.title}
                      </h3>
                      <span id={`achievement-date-${index}`} className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {achievement.date}
                      </span>
                    </div>
                    <p id={`achievement-description-${index}`} className="text-gray-600 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Professional Status</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-300">Open to Work</div>
                <p className="text-gray-300">Human Resources, Hospital Administration, Faculty Positions</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-300">258+</div>
                <p className="text-gray-300">Students Mentored</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-300">3+</div>
                <p className="text-gray-300">Years Banking Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
