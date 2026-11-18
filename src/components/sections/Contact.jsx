import { AnimatePresence, motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { FiAlertCircle, FiCheckCircle, FiGithub, FiLinkedin, FiLoader, FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi'
import { profile, socials } from '../../data/profile'
import { useContactForm } from '../../hooks/useContactForm'
import Reveal from '../ui/Reveal'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'

const contactItems = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: FiMail },
  { label: 'Phone', value: profile.phone, href: profile.phoneLink, icon: FiPhone },
  { label: 'WhatsApp', value: 'Chat with me on WhatsApp', href: socials.whatsapp, icon: FaWhatsapp },
  { label: 'GitHub', value: 'Clovisdusingizumuremyi', href: socials.github, icon: FiGithub },
  { label: 'LinkedIn', value: 'Clovis Dusingizumuremyi', href: socials.linkedin, icon: FiLinkedin },
  { label: 'Location', value: profile.location, href: '', icon: FiMapPin },
]

export default function Contact() {
  return (
    <Section id="contact" tinted>
      <SectionHeading
        eyebrow="contact"
        title="Let's Work Together"
        subtitle="Have a project, an internship opportunity or just a question? Send me a message and I'll get back to you."
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <ContactInfo />
        </Reveal>
        <Reveal delay={0.15}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  )
}

function ContactInfo() {
  return (
    <ul className="space-y-3">
      {contactItems.map((item) => (
        <ContactItem key={item.label} {...item} />
      ))}
    </ul>
  )
}

function ContactItem({ label, value, href, icon }) {
  const Icon = icon
  const isExternal = href.startsWith('http')
  const content = (
    <>
      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-500/10 text-accent-600 transition-colors group-hover:bg-accent-500 group-hover:text-white dark:text-accent-400">
        <Icon className="size-5" />
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
          {label}
        </span>
        <span className="block truncate font-medium text-slate-800 dark:text-slate-200">{value}</span>
      </span>
    </>
  )
  const box =
    'group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 dark:border-navy-800 dark:bg-navy-950/60'

  return (
    <li>
      {href ? (
        <a
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className={`${box} hover:translate-x-1 hover:border-accent-500/50 hover:shadow-lg hover:shadow-accent-500/10`}
        >
          {content}
        </a>
      ) : (
        <div className={box}>{content}</div>
      )}
    </li>
  )
}

function ContactForm() {
  const { values, errors, status, setStatus, handleChange, handleSubmit } = useContactForm()

  return (
    <form
      onSubmit={handleSubmit}
      noValidate // we show our own error messages instead of the browser's
      className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-navy-800 dark:bg-navy-950/60"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" value={values.name} error={errors.name} onChange={handleChange} autoComplete="name" />
        <Field label="Email" name="email" type="email" value={values.email} error={errors.email} onChange={handleChange} autoComplete="email" />
      </div>
      <div className="mt-5 grid gap-5">
        <Field label="Subject" name="subject" value={values.subject} error={errors.subject} onChange={handleChange} />
        <Field label="Message" name="message" multiline value={values.message} error={errors.message} onChange={handleChange} />
      </div>

      {/* Honeypot: hidden from people, catches spam bots */}
      <input
        type="text"
        name="website"
        value={values.website}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-500 to-violet-glow px-6 py-3.5 font-semibold text-white shadow-lg shadow-accent-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent-500/40 disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0 sm:w-auto"
      >
        {status === 'sending' ? (
          <>
            <FiLoader className="size-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Send Message <FiSend className="size-4" />
          </>
        )}
      </button>

      {/* Result message */}
      <AnimatePresence>
        {(status === 'success' || status === 'error') && (
          <motion.div
            role="status"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`mt-5 flex items-start gap-3 rounded-2xl p-4 text-sm ${
              status === 'success'
                ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400'
                : 'bg-rose-500/10 text-rose-700 dark:text-rose-400'
            }`}
          >
            {status === 'success' ? (
              <FiCheckCircle className="mt-0.5 size-5 shrink-0" />
            ) : (
              <FiAlertCircle className="mt-0.5 size-5 shrink-0" />
            )}
            <p className="flex-1">
              {status === 'success'
                ? "Thank you! Your message has been sent. I'll reply as soon as I can."
                : `Sorry, the message couldn't be sent. Please try again, or email me directly at ${profile.email}.`}
            </p>
            <button type="button" onClick={() => setStatus('idle')} className="font-medium underline">
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  )
}

function Field({ label, name, type = 'text', multiline = false, value, error, onChange, autoComplete }) {
  const id = `contact-${name}`
  const classes = `w-full rounded-xl border bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:ring-4 dark:bg-navy-900 dark:text-white dark:focus:bg-navy-900 ${
    error
      ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-500/15'
      : 'border-slate-200 focus:border-accent-500 focus:ring-accent-500/15 dark:border-navy-700'
  }`
  const shared = {
    id,
    name,
    value,
    onChange,
    className: classes,
    'aria-invalid': Boolean(error),
    'aria-describedby': error ? `${id}-error` : undefined,
  }

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
        {label}
      </label>
      {multiline ? (
        <textarea {...shared} rows={6} className={`${classes} resize-y`} />
      ) : (
        <input {...shared} type={type} autoComplete={autoComplete} />
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 flex items-center gap-1.5 text-sm text-rose-600 dark:text-rose-400">
          <FiAlertCircle className="size-3.5" /> {error}
        </p>
      )}
    </div>
  )
}
