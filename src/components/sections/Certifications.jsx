import { FiAward, FiBookOpen, FiCalendar, FiExternalLink, FiFlag, FiStar } from 'react-icons/fi'
import { achievements } from '../../data/achievements'
import Reveal from '../ui/Reveal'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'

const types = {
  certificate: { label: 'Certificate', icon: FiAward },
  competition: { label: 'Competition', icon: FiFlag },
  training: { label: 'Training', icon: FiBookOpen },
  achievement: { label: 'Achievement', icon: FiStar },
}

export default function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading
        eyebrow="certifications & achievements"
        title="Milestones"
        subtitle="Certificates, competitions, training programs and achievements along my journey."
      />

      {achievements.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.1}>
              <AchievementCard item={item} />
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  )
}

function AchievementCard({ item }) {
  const { label, icon } = types[item.type] ?? types.achievement
  const Icon = icon

  return (
    <article className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/50 hover:shadow-xl hover:shadow-accent-500/10 dark:border-navy-800 dark:bg-navy-900/60">
      <div className="flex items-center justify-between">
        <span className="grid size-12 place-items-center rounded-2xl bg-accent-500/10 text-accent-600 transition-colors group-hover:bg-accent-500 group-hover:text-white dark:text-accent-400">
          <Icon className="size-5" />
        </span>
        <span className="rounded-full bg-slate-100 px-3 py-1 font-mono text-xs text-slate-600 dark:bg-navy-800 dark:text-slate-300">
          {label}
        </span>
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
      <p className="mt-1 text-sm font-medium text-accent-600 dark:text-accent-400">{item.issuer}</p>
      {item.description && (
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.description}</p>
      )}
      <div className="mt-5 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
        <span className="flex items-center gap-1.5">
          <FiCalendar className="size-4" /> {item.date}
        </span>
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-medium text-accent-600 hover:underline dark:text-accent-400"
          >
            View <FiExternalLink className="size-3.5" />
          </a>
        )}
      </div>
    </article>
  )
}

// Shown until you add your first entry in src/data/achievements.js
function EmptyState() {
  return (
    <Reveal>
      <div className="mx-auto max-w-3xl rounded-3xl border-2 border-dashed border-slate-300 p-8 text-center sm:p-12 dark:border-navy-700">
        <div className="mx-auto flex w-fit gap-3">
          {Object.values(types).map(({ label, icon }) => {
            const Icon = icon
            return (
              <span
                key={label}
                title={label}
                className="grid size-12 place-items-center rounded-2xl bg-accent-500/10 text-accent-600 dark:text-accent-400"
              >
                <Icon className="size-5" />
              </span>
            )
          })}
        </div>
        <h3 className="mt-6 font-display text-xl font-semibold text-slate-900 dark:text-white">
          Building my track record
        </h3>
        <p className="mx-auto mt-3 max-w-lg leading-relaxed text-slate-600 dark:text-slate-400">
          I&apos;m currently working toward certifications and taking part in training programs and coding
          challenges. New milestones will appear here as I earn them.
        </p>
      </div>
    </Reveal>
  )
}
