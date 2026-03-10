# Personal Portfolio - Sachin Lal C P

A modern, responsive personal portfolio website built with React.js and Tailwind CSS. This portfolio is designed to showcase professional experience, skills, achievements, and provide an easy way for potential employers to connect and download resumes.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on all devices
- **Modern UI**: Clean, professional design with smooth animations and transitions
- **Single Page Application**: All sections in one page with smooth scrolling navigation
- **Resume Download**: One-click resume download functionality
- **Gallery Section**: Interactive gallery for achievements and social work
- **Contact Form**: Functional contact form with validation
- **Social Media Integration**: LinkedIn and Instagram links
- **Easy Customization**: Generic template that can be easily customized for other individuals
- **Unique IDs**: All elements have unique identifiers for easy manipulation

## 🛠️ Technology Stack

- **React.js** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **React Router DOM** - Navigation (if needed for future expansion)

## 📁 Project Structure

```
personal-portfolio-sachin/
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── favicon.ico
│   └── assets/
│       ├── images/
│       │   └── sachin-profile-pic.webp
│       └── resume/
│           └── Sachin_2026.pdf
├── src/
│   ├── components/
│   │   ├── HeroSection.js
│   │   ├── Navigation.js
│   │   ├── SummarySection.js
│   │   ├── ExperienceSection.js
│   │   ├── EducationSection.js
│   │   ├── SkillsSection.js
│   │   ├── GallerySection.js
│   │   └── ContactSection.js
│   ├── data/
│   │   └── portfolioData.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Sections Included

1. **Hero Section**: Profile picture, basic information, and quick contact details
2. **Professional Summary**: Overview of expertise and experience
3. **Work Experience**: Timeline-style presentation of professional journey
4. **Education**: Academic background and qualifications
5. **Skills**: Categorized skills with filtering options
6. **Gallery**: Visual showcase of achievements and social work
7. **Contact**: Contact information and functional contact form

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd personal-portfolio-sachin
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

## 🎯 Customization Guide

This portfolio is designed to be easily customizable for other individuals. Here's how to adapt it:

### 1. Update Personal Information

Edit `src/data/portfolioData.js`:

```javascript
export const PERSONAL_INFO = {
  name: "Your Name",
  title: "Your Professional Title",
  email: "your.email@example.com",
  phone: "+1234567890",
  linkedin: "linkedin.com/in/yourprofile",
  instagram: "instagram.com/yourprofile",
  location: "Your Location",
  profileImage: "/assets/images/your-photo.webp",
  resumeFile: "/assets/resume/your-resume.pdf"
};
```

### 2. Update Professional Content

In the same file, update:
- `PROFESSIONAL_SUMMARY` - Your professional overview
- `WORK_EXPERIENCE` - Add your work experience
- `EDUCATION` - Your educational background
- `SKILLS` - Your professional skills
- `GALLERY_IMAGES` - Your achievements and gallery images

### 3. Update Assets

- Add your profile picture to `public/assets/images/` (recommended: .webp format)
- Add your resume PDF to `public/assets/resume/`
- Add gallery images to `public/assets/images/gallery/` (optional)
- Ensure all assets are referenced with correct paths in `portfolioData.js`

### 4. Customize Colors

Edit `tailwind.config.js` to modify the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom primary colors
      },
      secondary: {
        // Your custom secondary colors
      }
    }
  }
}
```

## 📱 Responsive Features

- **Mobile-first design approach**
- **Hamburger menu for mobile navigation**
- **Adaptive grid layouts**
- **Touch-friendly interactions**
- **Optimized typography for all screen sizes**

## 🌟 Key Features

### Navigation
- Smooth scrolling between sections
- Sticky navigation bar with scroll effects
- Mobile-responsive hamburger menu

### Interactive Elements
- Hover effects on cards and buttons
- Animated skill bars
- Image gallery with lightbox functionality
- Form validation and submission feedback

### Performance
- Optimized images with lazy loading
- Minimal bundle size
- Fast loading times
- SEO-friendly structure

## 📧 Contact Form

The contact form includes:
- Client-side validation
- Loading states
- Success/error feedback
- Accessible form elements

*Note: For production use, connect the form to a backend service or form handling service like Formspree, Netlify Forms, or EmailJS.*

## 🔧 Deployment

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

### Vercel
1. Connect your repository to Vercel
2. Vercel will automatically detect the React app
3. Deploy with one click!

### GitHub Pages
1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/personal-portfolio-sachin",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```
3. Run: `npm run deploy`

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Sachin Lal C P**
- Email: sachinlalcp@gmail.com
- LinkedIn: linkedin.com/in/sachinlalcp
- Instagram: instagram.com/its_sachinlal

---

**Note**: This template is designed to be generic and easily reusable. Simply update the data in `portfolioData.js` and replace the assets to create your own portfolio!

**Current Website**: "Sachin Lal's Space" - Professional portfolio showcasing healthcare administration and HR expertise.
