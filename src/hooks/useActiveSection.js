import { useEffect, useState } from 'react'

/**
 * Watches the page sections and returns the id of the one in the middle of the screen.
 * The navbar uses it to highlight the current link.
 * Pass an array defined outside the component so it stays the same between renders.
 */
export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0])

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) // skip sections that don't exist yet

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      // Only count a section as active when it crosses a thin band in the middle of the screen
      { rootMargin: '-45% 0px -50% 0px' },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}
