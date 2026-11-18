import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { FaJava } from 'react-icons/fa'
import { FiCode, FiExternalLink, FiGithub, FiGlobe } from 'react-icons/fi'
import { SiPython } from 'react-icons/si'

// Cover styles used when a project has no screenshot yet
const covers = {
  Java: { icon: FaJava, gradient: 'from-orange-500/90 via-amber-500/70 to-rose-500/80' },
  Web: { icon: FiGlobe, gradient: 'from-accent-500/90 via-sky-500/70 to-violet-glow/80' },
  Python: { icon: SiPython, gradient: 'from-sky-600/90 via-blue-500/70 to-yellow-400/80' },
}
const defaultCover = { icon: FiCode, gradient: 'from-accent-500/90 to-violet-glow/80' }

// forwardRef lets the parent's AnimatePresence measure the card while it animates out
const ProjectCard = forwardRef(function ProjectCard({ project }, ref) {
  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-[border-color,box-shadow,translate] duration-300 hover:-translate-y-2 hover:border-accent-500/50 hover:shadow-2xl hover:shadow-accent-500/15 dark:border-navy-800 dark:bg-navy-900/60"
    >
      <Cover project={project} />

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-xs font-medium uppercase tracking-wider text-accent-600 dark:text-accent-400">
          {project.category}
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-md bg-slate-100 px-2.5 py-1 font-mono text-xs text-slate-600 dark:bg-navy-800 dark:text-slate-300"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex gap-3 border-t border-slate-100 pt-5 dark:border-navy-800">
          <CardLink href={project.github} icon={FiGithub} label="Code" missing="Code not public yet" />
          <CardLink href={project.demo} icon={FiExternalLink} label="Live Demo" missing="No live demo available" />
        </div>
      </div>
    </motion.article>
  )
})

export default ProjectCard

function Cover({ project }) {
  if (project.image) {
    return (
      <div className="aspect-video overflow-hidden bg-slate-100 dark:bg-navy-800">
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    )
  }

  // Generated cover: category gradient + big icon + code-style decoration
  const { icon, gradient } = covers[project.category] ?? defaultCover
  const Icon = icon
  return (
    <div className={`relative aspect-video overflow-hidden bg-gradient-to-br ${gradient}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255/0.25)_1px,transparent_0)] bg-[size:18px_18px]" />
      <Icon className="absolute -right-6 -bottom-6 size-40 text-white/20 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" />
      <div className="absolute left-6 top-6 flex gap-1.5" aria-hidden="true">
        <span className="size-3 rounded-full bg-white/60" />
        <span className="size-3 rounded-full bg-white/40" />
        <span className="size-3 rounded-full bg-white/25" />
      </div>
      <p className="absolute bottom-6 left-6 max-w-[70%] font-display text-2xl font-bold leading-tight text-white drop-shadow">
        {project.title}
      </p>
    </div>
  )
}

// A link button, or a greyed-out label when there's no link (so every card keeps the same layout)
function CardLink({ href, icon, label, missing }) {
  const Icon = icon
  const base = 'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors'

  if (!href) {
    return (
      <span
        title={missing}
        className={`${base} cursor-not-allowed text-slate-400 dark:text-slate-500`}
      >
        <Icon className="size-4" /> {label}
        <span className="sr-only">({missing})</span>
      </span>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} bg-slate-100 text-slate-800 hover:bg-accent-500 hover:text-white dark:bg-navy-800 dark:text-slate-200 dark:hover:bg-accent-500`}
    >
      <Icon className="size-4" /> {label}
    </a>
  )
}
