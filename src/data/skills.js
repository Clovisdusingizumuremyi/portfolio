// Your technical skills, grouped by category.
// To add a skill: import its icon and add { name, icon, color } to a category.
// Find more icons at https://react-icons.github.io/react-icons (search the name, e.g. "Docker").

import { FaJava, FaPlug } from 'react-icons/fa'
import { FiCode, FiDatabase, FiLayout, FiTool } from 'react-icons/fi'
import {
  SiC,
  SiCss3,
  SiGit,
  SiGithub,
  SiHtml5,
  SiIntellijidea,
  SiJavascript,
  SiMysql,
  SiPython,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

export const skillCategories = [
  {
    title: 'Programming',
    description: 'Languages I write code in',
    icon: FiCode,
    skills: [
      { name: 'Java', icon: FaJava, color: '#f89820' },
      { name: 'Python', icon: SiPython, color: '#4b8bbe' },
      { name: 'C', icon: SiC, color: '#a8b9cc' },
      { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
    ],
  },
  {
    title: 'Frontend',
    description: 'Building user interfaces for the web',
    icon: FiLayout,
    skills: [
      { name: 'HTML', icon: SiHtml5, color: '#e34f26' },
      { name: 'CSS', icon: SiCss3, color: '#2965f1' },
      { name: 'React.js', icon: SiReact, color: '#61dafb' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8' },
    ],
  },
  {
    title: 'Database',
    description: 'Storing and managing data',
    icon: FiDatabase,
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#00a4c4' },
      { name: 'JDBC', icon: FaPlug, color: '#e76f00' },
    ],
  },
  {
    title: 'Tools',
    description: 'What I use every day to build software',
    icon: FiTool,
    skills: [
      { name: 'Git', icon: SiGit, color: '#f05032' },
      { name: 'GitHub', icon: SiGithub, color: null }, // null = follows the theme (black / white)
      { name: 'IntelliJ IDEA', icon: SiIntellijidea, color: '#fe315d' },
      { name: 'VS Code', icon: VscVscode, color: '#23a9f2' },
    ],
  },
]
