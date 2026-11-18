// A link styled as a button. Used for "View Projects", "Download CV", project links, etc.
// variant: "primary" (gradient) or "outline"

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold ' +
  'transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 ' +
  'focus-visible:outline-offset-2 focus-visible:outline-accent-500'

const variants = {
  primary:
    'bg-gradient-to-r from-accent-500 to-violet-glow text-white shadow-lg shadow-accent-500/25 hover:shadow-xl hover:shadow-accent-500/40',
  outline:
    'border border-slate-300 bg-white/50 text-slate-800 hover:border-accent-500 hover:text-accent-600 ' +
    'dark:border-navy-700 dark:bg-navy-900/50 dark:text-slate-200 dark:hover:border-accent-400 dark:hover:text-accent-400',
}

export default function Button({ href, variant = 'primary', icon, children, className = '', ...props }) {
  const Icon = icon
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
      {Icon && <Icon className="size-4" aria-hidden="true" />}
    </a>
  )
}
