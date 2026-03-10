import React from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import { Download, Mail, Phone, Linkedin, MapPin, Instagram } from 'lucide-react';

const HeroSection = () => {
  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = PERSONAL_INFO.resumeFile;
    link.download = 'Sachin-Lal-CP-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="section-padding bg-gradient-to-br from-primary-50 to-white min-h-screen flex items-center">
      <div id="hero-container" className="container-max">
        <div id="hero-content" className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div id="hero-text" className="space-y-6">
            <div id="hero-header" className="space-y-4">
              <h1 id="hero-name" className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                Hi, I'm <span className="text-gradient">{PERSONAL_INFO.name}</span>
              </h1>
              <h2 id="hero-title" className="text-xl md:text-2xl text-gray-700 font-medium">
                {PERSONAL_INFO.title}
              </h2>
            </div>

            <div id="hero-contact" className="space-y-3">
              <div id="hero-email" className="flex items-center space-x-3 text-gray-600">
                <Mail size={20} className="text-primary-600" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-primary-600 transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div id="hero-phone" className="flex items-center space-x-3 text-gray-600">
                <Phone size={20} className="text-primary-600" />
                <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-primary-600 transition-colors">
                  {PERSONAL_INFO.phone}
                </a>
              </div>
              <div id="hero-linkedin" className="flex items-center space-x-3 text-gray-600">
                <Linkedin size={20} className="text-primary-600" />
                <a 
                  href={`https://${PERSONAL_INFO.linkedin}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-600 transition-colors"
                >
                  {PERSONAL_INFO.linkedin}
                </a>
              </div>
              <div id="hero-instagram" className="flex items-center space-x-3 text-gray-600">
                <Instagram size={20} className="text-primary-600" />
                <a 
                  href={`https://${PERSONAL_INFO.instagram}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-600 transition-colors"
                >
                  {PERSONAL_INFO.instagram}
                </a>
              </div>
              <div id="hero-location" className="flex items-center space-x-3 text-gray-600">
                <MapPin size={20} className="text-primary-600" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            <div id="hero-buttons" className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                id="download-resume-btn"
                onClick={handleDownloadResume}
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </button>
              <a
                id="linkedin-profile-btn"
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <Linkedin size={20} />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div id="hero-image-container" className="flex justify-center">
            <div id="hero-image-wrapper" className="relative">
              <div id="hero-image" className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src={PERSONAL_INFO.profileImage}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to a placeholder if image fails to load
                    e.target.src = "https://picsum.photos/seed/sachinlal/400/400.jpg";
                  }}
                />
              </div>
              {/* Decorative ring */}
              <div id="hero-image-ring" className="absolute inset-0 rounded-full border-4 border-primary-200 -z-10 transform scale-110"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
