import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiGithub } from 'react-icons/fi'
import { socials } from '../../data/profile'
import { projects } from '../../data/projects'
import Button from '../ui/Button'
import ProjectCard from '../ui/ProjectCard'
import Reveal from '../ui/Reveal'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'

// Filter buttons are built from the categories in projects.js: "All" + each unique category
const filters = ['All', ...new Set(projects.map((p) => p.category))]

export default function Projects() {
  const [active, setActive] = useState('All')
  const visible = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="projects"
        title="Things I've Built"
        subtitle="Projects from my studies and personal practice, from Java desktop apps to the web."
      />

      {/* Filter buttons */}
      <Reveal className="mb-10">
        <div role="group" aria-label="Filter projects" className="flex flex-wrap justify-center gap-2">
          {filters.map((filter) => {
            const count = filter === 'All' ? projects.length : projects.filter((p) => p.category === filter).length
            const isActive = active === filter
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                aria-pressed={isActive}
                className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="project-filter"
                    className="absolute inset-0 z-0 rounded-full bg-gradient-to-r from-accent-500 to-violet-glow shadow-lg shadow-accent-500/25"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">
                  {filter}
                  <span className={`ml-1.5 text-xs ${isActive ? 'text-white/80' : 'text-slate-400'}`}>{count}</span>
                </span>
              </button>
            )
          })}
        </div>
      </Reveal>

      {/* Cards: "popLayout" lets the remaining cards slide into place while others fade out */}
      <Reveal delay={0.1}>
        <motion.div layout className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </Reveal>

      <Reveal className="mt-14 text-center">
        <Button href={socials.github} variant="outline" icon={FiGithub} target="_blank" rel="noopener noreferrer">
          See more on GitHub
        </Button>
      </Reveal>
    </Section>
  )
}
