// Your personal details live here. Every component reads from this file,
// so you only change information in one place.

export const profile = {
  name: 'Clovis Dusingizumuremyi',
  shortName: 'Clovis',
  initials: 'CD',
  headline: 'Aspiring Software Engineer | Computer Science Student',
  roles: ['Software Developer', 'Computer Science Student', 'Problem Solver'],
  location: 'Rwanda',
  email: 'clovisdusingizuremyi@gmail.com',
  phone: '+250 781 699 182', // shown on the page
  phoneLink: 'tel:+250781699182', // tap-to-call (no spaces)
  cvUrl: '/Clovis-Dusingizumuremyi-CV.pdf', // put the PDF in the public/ folder
  profileImage: '/images/profile.jpeg', // leave empty ('') to show a placeholder instead
  // Navbar logo: the emblem cropped from images/logo.jpeg with a transparent background.
  // If the file is missing, the navbar shows your initials instead.
  logo: '/images/logo-mark.png',
}

// Text for the About section (taken from your CV)
export const about = {
  summary:
    'I am a motivated third-year Computer Science student at the College of Science and Technology in Rwanda, with a strong interest in software engineering, programming, and problem-solving. I enjoy turning ideas into practical technology solutions and I am always working to improve my technical skills.',
  interests:
    'I am especially interested in software development, web development, and Artificial Intelligence. I like learning new technologies, working with others, and approaching challenges with creativity and determination.',
  goal:
    'My goal is to build a career in software engineering by gaining practical experience, contributing to innovative technology projects, and continuously improving my programming and problem-solving abilities.',
  softSkills: [
    'Problem-solving',
    'Teamwork & collaboration',
    'Communication',
    'Critical thinking',
    'Adaptability',
    'Time management',
    'Continuous learning',
  ],
  languages: [
    { name: 'English', level: 'Excellent' },
    { name: 'Kinyarwanda', level: 'Excellent' },
    { name: 'French', level: 'Good' },
  ],
}

export const socials = {
  github: 'https://github.com/Clovisdusingizumuremyi',
  linkedin: 'https://www.linkedin.com/in/clovis-dusingizumuremyi-6215ab338',
  // wa.me links open a WhatsApp chat: country code + number, no "+" or spaces
  whatsapp: 'https://wa.me/250781699182',
}

// Navbar and footer links. "id" must match the id of each section.
export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
