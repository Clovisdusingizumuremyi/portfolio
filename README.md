# Clovis Dusingizumuremyi | Portfolio

My personal portfolio website: an aspiring Software Engineer and third-year Computer Science
student at the College of Science and Technology, Rwanda.

**Built with:** React (Vite) · Tailwind CSS v4 · Framer Motion · React Icons · EmailJS

## Features

- Dark / light mode (remembers your choice)
- Smooth scrolling and scroll-triggered animations
- Typing animation in the hero section
- Animated skill cards with technology logos
- Project cards with category filters
- Contact form with validation and EmailJS
- Downloadable CV, back-to-top button, fully responsive

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

Other commands: `npm run build` (production build), `npm run preview` (preview the build), `npm run lint`.

## Contact form setup

Copy `.env.example` to `.env.local` and fill in your EmailJS Service ID, Template ID and Public Key.
On Vercel, add the same three variables under **Settings → Environment Variables**.

## Updating content

All text lives in `src/data/`, so no component code needs to change:

| File | Content |
|---|---|
| `profile.js` | Name, headline, about text, contact details, social links |
| `skills.js` | Skill categories and technologies |
| `projects.js` | Project cards |
| `education.js` | Education and coursework |
| `achievements.js` | Certificates, competitions, training, achievements |

## Project structure

```
src/
├── components/
│   ├── layout/     Navbar, Footer
│   ├── sections/   Hero, About, Skills, Projects, Education, Certifications, Contact
│   └── ui/         Reusable pieces (Button, Section, Reveal, ProjectCard, ...)
├── config/         EmailJS settings
├── data/           All website content
├── hooks/          useTheme, useTypewriter, useActiveSection, useContactForm
├── App.jsx
└── index.css       Tailwind + theme colors and fonts
```
