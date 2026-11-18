// ─────────────────────────────────────────────────────────────
// YOUR PROJECTS: add a new project by copying one object below.
//
//   title        Project name
//   description  1-2 sentences: what it does and what you used it to learn
//   category     Used by the filter buttons ("Java", "Web", "Python", ...).
//                A new category creates a new filter button automatically.
//   tech         Technologies shown as tags
//   image        Screenshot in public/images/projects/ (e.g. '/images/projects/form.png').
//                Leave '' to show a generated cover instead.
//   github       Repository link, or '' if the code isn't public yet
//   demo         Live website link, or '' if there is no live version
// ─────────────────────────────────────────────────────────────

const GITHUB = 'https://github.com/Clovisdusingizumuremyi'

export const projects = [
  {
    title: 'Student Management System',
    description:
      'A Java desktop application for student results. Enter marks for Mathematics, English and Science, and it calculates the total, the average and the final grade (A to F).',
    category: 'Java',
    tech: ['Java', 'Swing', 'OOP'],
    image: '',
    github: '',
    demo: '',
  },
  {
    title: 'Java Database Application',
    description:
      'A Java Swing form that registers students into a MySQL database using JDBC: captures ID, names, username and password, stores the record, and reads the saved records back.',
    category: 'Java',
    tech: ['Java', 'Swing', 'MySQL', 'JDBC'],
    image: '',
    github: '',
    demo: '',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'This website. A responsive single-page portfolio with dark and light mode, scroll animations, project filtering and a working contact form.',
    category: 'Web',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    image: '',
    github: `${GITHUB}/portfolio`,
    demo: 'https://portfolio-chi-pink-41.vercel.app/',
  },
  {
    title: 'Form Validation',
    description:
      'A sign-up form that checks each field as you submit it, showing clear error messages and success or failure icons, built with plain JavaScript and no libraries.',
    category: 'Web',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '',
    github: `${GITHUB}/FORM`,
    demo: 'https://clovisdusingizumuremyi.github.io/FORM/',
  },
  {
    title: 'Python Practice Programs',
    description:
      'A collection of Python problem-solving exercises: camelCase conversion, removing vowels from text, finding perfect numbers, and working with lists and dictionaries.',
    category: 'Python',
    tech: ['Python', 'Algorithms'],
    image: '',
    github: `${GITHUB}/Python-code`,
    demo: '',
  },
]
