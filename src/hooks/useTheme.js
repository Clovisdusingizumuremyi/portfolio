import { useEffect, useState } from 'react'

// index.html already applied the saved theme before React started,
// so we read the current state straight from the <html> element.
const getInitialTheme = () =>
  document.documentElement.classList.contains('dark') ? 'dark' : 'light'

/**
 * Dark / light mode.
 * Adds or removes the "dark" class on <html> (Tailwind's dark: classes react to it)
 * and remembers the choice in localStorage.
 */
export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* storage blocked (e.g. private mode): the theme still works, it just isn't remembered */
    }
  }, [theme])

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))

  return { theme, toggleTheme }
}
