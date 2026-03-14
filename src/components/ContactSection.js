import React from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import { Mail, Phone, Linkedin, Download, MapPin, Instagram } from 'lucide-react';

const ContactSection = () => {

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
    <section id="contact" className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div id="contact-container" className="container-max">
        <div id="contact-header" className="text-center mb-12">
          <h2 id="contact-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact <span className="text-gradient">Information</span>
          </h2>
          <div id="contact-divider" className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          <p id="contact-subtitle" className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Reach out through any of these channels for professional opportunities and collaborations.
          </p>
        </div>

        <div id="contact-content" className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div id="contact-info-section" className="space-y-8">
            <div id="contact-info-header">
              <h3 id="contact-info-title" className="text-2xl font-bold text-gray-900 mb-6 text-center">Get In Touch</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-gray-900 font-medium hover:text-primary-600 transition-colors">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="text-gray-900 font-medium hover:text-primary-600 transition-colors">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Linkedin className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">LinkedIn</p>
                    <a 
                      href={`https://${PERSONAL_INFO.linkedin}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-900 font-medium hover:text-primary-600 transition-colors"
                    >
                      {PERSONAL_INFO.linkedin}
                    </a>
                  </div>
                </div>

                <div id="contact-instagram" className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Instagram className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Instagram</p>
                    <a 
                      href={`https://${PERSONAL_INFO.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 font-medium hover:text-primary-600 transition-colors"
                    >
                      {PERSONAL_INFO.instagram}
                    </a>
                  </div>
                </div>

                <div id="contact-location" className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md md:col-span-2">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="text-gray-900 font-medium">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Resume Button */}
            <div id="download-resume-section" className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl p-6 text-white text-center">
              <h4 id="download-resume-title" className="text-xl font-bold mb-4">Download My Resume</h4>
              <p id="download-resume-desc" className="mb-4 opacity-90">
                Get a comprehensive overview of my professional experience and qualifications.
              </p>
              <button
                id="download-resume-btn-contact"
                onClick={handleDownloadResume}
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2 mx-auto"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div id="quick-links" className="mt-16 text-center">
          <div id="social-links" className="flex justify-center space-x-6">
            <a
              id="linkedin-link"
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              id="instagram-link"
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-200"
            >
              <Instagram size={24} />
            </a>
            <a
              id="email-link"
              href={SOCIAL_LINKS.email}
              className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-200"
            >
              <Mail size={24} />
            </a>
            <a
              id="phone-link"
              href={SOCIAL_LINKS.phone}
              className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-200"
            >
              <Phone size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
