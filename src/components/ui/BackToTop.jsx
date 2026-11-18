import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'

// Round button in the bottom-right corner; appears after scrolling down a bit
export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          title="Back to top"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom,0px))] right-5 z-40 grid size-12 place-items-center rounded-full bg-gradient-to-br from-accent-500 to-violet-glow text-white shadow-xl shadow-accent-500/30 sm:right-8"
        >
          <FiArrowUp className="size-5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
