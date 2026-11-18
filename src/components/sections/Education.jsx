import { FiAward, FiBookOpen, FiCheckCircle, FiMapPin } from 'react-icons/fi'
import { education } from '../../data/education'
import Reveal from '../ui/Reveal'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'

export default function Education() {
  return (
    <Section id="education" tinted>
      <SectionHeading
        eyebrow="education"
        title="Academic Background"
        subtitle="Where I'm building my foundation in computer science."
      />

      {/* Timeline: a vertical line with one card per school */}
      <ol className="relative mx-auto max-w-3xl border-l-2 border-accent-500/30 pl-8 sm:pl-10">
        {education.map((entry, i) => (
          <li key={entry.institution} className="relative pb-10 last:pb-0">
            {/* Dot centred on the line: padding (32/40px) + half the line (1px) + half the dot (10px) */}
            <span className="absolute top-7 -left-[43px] grid size-5 place-items-center rounded-full bg-accent-500 ring-4 ring-white sm:-left-[51px] dark:ring-navy-900">
              <span className="size-2 rounded-full bg-white" />
            </span>

            <Reveal delay={i * 0.1}>
              <EducationCard entry={entry} />
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}

function EducationCard({ entry }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-500/10 sm:p-8 dark:border-navy-800 dark:bg-navy-950/60">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-xl font-semibold text-slate-900 sm:text-2xl dark:text-white">
            {entry.institution}
          </h3>
          <p className="mt-1 flex items-center gap-2 font-medium text-accent-600 dark:text-accent-400">
            <FiAward className="size-4" /> {entry.degree}
          </p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-700 dark:text-emerald-400">
          <span className="size-2 animate-pulse rounded-full bg-emerald-500" />
          {entry.level}
        </span>
      </div>

      <p className="mt-3 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
        <FiMapPin className="size-4" /> {entry.location}
      </p>

      <h4 className="mt-7 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
        <FiBookOpen className="size-4" /> Relevant coursework
      </h4>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {entry.coursework.map((course) => (
          <li
            key={course}
            className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 text-slate-700 transition-colors hover:bg-accent-500/10 dark:bg-navy-900 dark:text-slate-300 dark:hover:bg-accent-500/10"
          >
            <FiCheckCircle className="size-4 shrink-0 text-accent-500" />
            {course}
          </li>
        ))}
      </ul>
    </article>
  )
}
