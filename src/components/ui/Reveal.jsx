import { motion } from 'framer-motion'

/**
 * Scroll animation: whatever you wrap in <Reveal> fades and slides up
 * the first time it scrolls into view.
 *
 *   <Reveal delay={0.2}>...</Reveal>
 */
export default function Reveal({ children, delay = 0, y = 28, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} // start when 20% is visible; only animate once
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
