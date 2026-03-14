import React from 'react';
import HeroSection from './components/HeroSection';
import SummarySection from './components/SummarySection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import FocusAreasSection from './components/FocusAreasSection';
// import AchievementsSection from './components/AchievementsSection'; // Hidden for now
import SkillsSection from './components/SkillsSection';
// import GallerySection from './components/GallerySection'; // Hidden for now
import ContactSection from './components/ContactSection';
import Navigation from './components/Navigation';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <SummarySection />
        <ExperienceSection />
        <EducationSection />
        <FocusAreasSection />
        {/* <AchievementsSection /> */}
        <SkillsSection />
        {/* <GallerySection /> */}
        <ContactSection />
      </main>
      <footer className="bg-secondary-900 text-white py-8 text-center">
        <p>&copy; 2024 {process.env.REACT_APP_NAME || 'Sachin Lal C P'}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
