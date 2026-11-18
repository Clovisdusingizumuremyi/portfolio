import { motion } from 'framer-motion'
import { FiArrowRight, FiChevronDown, FiDownload, FiMapPin } from 'react-icons/fi'
import { profile } from '../../data/profile'
import { useTypewriter } from '../../hooks/useTypewriter'
import Button from '../ui/Button'
import ProfilePhoto from '../ui/ProfilePhoto'
import SocialLinks from '../ui/SocialLinks'

// Each child fades up one after another (stagger)
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  const typedRole = useTypewriter(profile.roles)

  return (
    <section id="home" className="relative isolate flex min-h-svh items-center overflow-hidden pb-20 pt-28">
      <Background />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr]">
        {/* Text column */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1.5 text-xs font-medium text-accent-600 dark:text-accent-400"
          >
            <FiMapPin className="size-3.5" /> Computer Science student · {profile.location}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-accent-500 via-violet-glow to-accent-400 bg-clip-text text-transparent">
              Clovis
            </span>
            <span className="mt-1 block text-[0.72em] text-slate-700 dark:text-slate-300">Dusingizumuremyi</span>
          </motion.h1>

          {/* Typing animation. Screen readers get the full list instead of the flickering text. */}
          <motion.p variants={item} className="mt-5 h-8 font-mono text-lg text-slate-600 sm:text-xl dark:text-slate-300">
            <span className="sr-only">{profile.roles.join(', ')}</span>
            <span aria-hidden="true">
              <span className="text-accent-500">&gt;</span> {typedRole}
              <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-1 animate-pulse bg-accent-500" />
            </span>
          </motion.p>

          <motion.p variants={item} className="mt-4 text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            {profile.headline}
          </motion.p>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-xl leading-relaxed text-slate-600 lg:mx-0 dark:text-slate-400"
          >
            Third-year Computer Science student at the College of Science and Technology, building practical
            software with Java, Python and modern web technologies. I love solving problems and I&apos;m
            growing my skills in software engineering and Artificial Intelligence.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Button href="#projects" icon={FiArrowRight}>
              View Projects
            </Button>
            <Button href={profile.cvUrl} variant="outline" icon={FiDownload} download>
              Download CV
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-9 flex justify-center lg:justify-start">
            <SocialLinks />
          </motion.div>
        </motion.div>

        {/* Photo column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="order-1 lg:order-2"
        >
          <ProfilePhoto />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-slate-400 transition-colors hover:text-accent-500 sm:block"
      >
        <FiChevronDown className="size-7" />
      </a>
    </section>
  )
}

// Decorative background: faint grid + two blurred color blobs
function Background() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(99_102_241/0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgb(99_102_241/0.07)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute -left-32 top-20 size-96 rounded-full bg-accent-500/20 blur-3xl" />
      <div className="absolute -right-32 bottom-10 size-96 rounded-full bg-violet-glow/20 blur-3xl" />
    </div>
  )
}
