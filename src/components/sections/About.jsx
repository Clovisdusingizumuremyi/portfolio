import { FiBookOpen, FiCode, FiCpu, FiGlobe, FiTarget, FiZap } from 'react-icons/fi'
import { about } from '../../data/profile'
import Reveal from '../ui/Reveal'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'

// The five things you said you're passionate about
const passions = [
  { label: 'Software Development', icon: FiCode },
  { label: 'Problem-Solving', icon: FiZap },
  { label: 'Artificial Intelligence', icon: FiCpu },
  { label: 'Web Development', icon: FiGlobe },
  { label: 'Learning New Tech', icon: FiBookOpen },
]

export default function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="about me"
        title="Who I Am"
        subtitle="A student developer who enjoys building things and figuring out how they work."
      />

      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        {/* Story */}
        <Reveal className="space-y-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          <p>{about.summary}</p>
          <p>{about.interests}</p>
          <div className="flex gap-4 rounded-2xl border border-accent-500/20 bg-accent-500/5 p-5">
            <FiTarget className="mt-1 size-6 shrink-0 text-accent-500" />
            <p className="text-base">
              <span className="font-semibold text-slate-900 dark:text-white">Career goal: </span>
              {about.goal}
            </p>
          </div>
        </Reveal>

        {/* Side cards */}
        <div className="space-y-6">
          <Reveal delay={0.1}>
            <Card title="What drives me">
              <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
                {passions.map((passion) => (
                  <Passion key={passion.label} {...passion} />
                ))}
              </ul>
            </Card>
          </Reveal>

          <Reveal delay={0.2}>
            <Card title="Soft skills">
              <ul className="flex flex-wrap gap-2">
                {about.softSkills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700 transition-colors hover:border-accent-500 hover:text-accent-600 dark:border-navy-700 dark:text-slate-300 dark:hover:text-accent-400"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          <Reveal delay={0.3}>
            <Card title="Languages">
              <ul className="space-y-2">
                {about.languages.map(({ name, level }) => (
                  <li key={name} className="flex items-center justify-between text-slate-700 dark:text-slate-300">
                    {name}
                    <span className="text-sm text-slate-500 dark:text-slate-400">{level}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}

function Passion({ label, icon }) {
  const Icon = icon
  return (
    <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
      <span className="grid size-8 place-items-center rounded-lg bg-accent-500/10 text-accent-600 dark:text-accent-400">
        <Icon className="size-4" />
      </span>
      {label}
    </li>
  )
}

function Card({ title, children }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-navy-800 dark:bg-navy-900/60">
      <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
        {title}
      </h3>
      {children}
    </div>
  )
}
