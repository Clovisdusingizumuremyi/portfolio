import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks, profile } from '../../data/profile'
import { useActiveSection } from '../../hooks/useActiveSection'
import Logo from '../ui/Logo'
import ThemeToggle from '../ui/ThemeToggle'

// Defined outside the component so the array is created once
const sectionIds = navLinks.map((link) => link.id)

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeId = useActiveSection(sectionIds)

  // Give the navbar a background once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu with Escape, or when the screen becomes desktop-sized
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    const onResize = () => window.innerWidth >= 768 && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [menuOpen])

  // Mobile menu links: if we let the browser follow the link while the menu is
  // animating closed, mobile browsers cancel the smooth scroll. So we close the
  // menu first, then scroll once the closing animation (250ms) has finished.
  const goToSection = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      history.replaceState(null, '', `#${id}`)
    }, 300)
  }

  const solid = scrolled || menuOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        solid
          ? 'border-slate-200/70 bg-white/80 shadow-sm backdrop-blur-lg dark:border-navy-800/70 dark:bg-navy-950/80'
          : 'border-transparent'
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
          <Logo />
          <span className="font-display text-lg font-semibold text-slate-900 dark:text-white">
            {profile.shortName}
            <span className="text-accent-500">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ id, label }) => {
            const isActive = activeId === id
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative block rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-slate-900 dark:text-white'
                      : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  {/* The pill slides from link to link (layoutId makes Framer Motion animate it).
                      Pills are on layer z-0 and every label on z-10, so a moving pill
                      never covers the text of the links it passes. */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 z-0 rounded-full bg-slate-200/80 dark:bg-navy-800"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="grid size-10 place-items-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:border-accent-500 hover:text-accent-600 md:hidden dark:border-navy-700 dark:text-slate-200"
          >
            {menuOpen ? <FiX className="size-5" /> : <FiMenu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu: slides open below the bar */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden md:hidden"
          >
            <ul className="space-y-1 px-5 pb-5 pt-1">
              {navLinks.map(({ id, label }, i) => (
                <motion.li
                  key={id}
                  initial={{ x: -12, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <a
                    href={`#${id}`}
                    onClick={(e) => goToSection(e, id)}
                    className={`block rounded-xl px-4 py-3 font-medium transition-colors ${
                      activeId === id
                        ? 'bg-accent-500/10 text-accent-600 dark:text-accent-400'
                        : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-navy-800'
                    }`}
                  >
                    {label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
