import { AnimatePresence, motion } from 'framer-motion'
import { FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../../hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className="grid size-10 place-items-center overflow-hidden rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-accent-500 hover:text-accent-600 dark:border-navy-700 dark:text-slate-300 dark:hover:border-accent-400 dark:hover:text-accent-400"
    >
      {/* The icon spins out and the new one spins in */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {isDark ? <FiSun className="size-[18px]" /> : <FiMoon className="size-[18px]" />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
