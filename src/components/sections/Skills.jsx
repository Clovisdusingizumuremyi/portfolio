import { motion } from 'framer-motion'
import { skillCategories } from '../../data/skills'
import Reveal from '../ui/Reveal'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'

// Skill tiles inside a category pop in one after another
const grid = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } }
const tile = {
  hidden: { opacity: 0, scale: 0.85, y: 12 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 260, damping: 20 } },
}

export default function Skills() {
  return (
    <Section id="skills" tinted>
      <SectionHeading
        eyebrow="skills"
        title="Technologies I Work With"
        subtitle="The languages, frameworks and tools I use to build software."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category, i) => (
          <Reveal key={category.title} delay={i * 0.1}>
            <CategoryCard category={category} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function CategoryCard({ category }) {
  const CategoryIcon = category.icon

  return (
    <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7 dark:border-navy-800 dark:bg-navy-950/60">
      <div className="mb-6 flex items-center gap-4">
        <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-accent-500 to-violet-glow text-white shadow-lg shadow-accent-500/25">
          <CategoryIcon className="size-5" />
        </span>
        <div>
          <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">{category.title}</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">{category.description}</p>
        </div>
      </div>

      <motion.ul
        variants={grid}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4"
      >
        {category.skills.map((skill) => (
          <SkillTile key={skill.name} skill={skill} />
        ))}
      </motion.ul>
    </div>
  )
}

function SkillTile({ skill }) {
  const SkillIcon = skill.icon

  return (
    <motion.li
      variants={tile}
      whileHover={{ y: -6 }}
      // The brand color is passed as a CSS variable so the hover border/glow can use it
      style={{ '--brand': skill.color ?? 'var(--color-accent-500)' }}
      className="group flex cursor-default flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-5 text-center transition-[border-color,box-shadow] duration-300 hover:border-(--brand) hover:shadow-[0_8px_30px_-8px_var(--brand)] dark:border-navy-800 dark:bg-navy-900"
    >
      <SkillIcon
        className={`size-9 transition-transform duration-300 group-hover:scale-110 ${skill.color ? '' : 'text-slate-900 dark:text-white'}`}
        style={skill.color ? { color: skill.color } : undefined}
        aria-hidden="true"
      />
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
    </motion.li>
  )
}
