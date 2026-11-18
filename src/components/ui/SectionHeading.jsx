import Reveal from './Reveal'

// Title block at the top of each section:  small label → big title → short description
export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <p className="font-mono text-sm font-medium text-accent-600 dark:text-accent-400">
        <span className="text-slate-400">{'//'}</span> {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-accent-500 to-violet-glow" />
      {subtitle && <p className="mt-5 leading-relaxed text-slate-600 dark:text-slate-400">{subtitle}</p>}
    </Reveal>
  )
}
