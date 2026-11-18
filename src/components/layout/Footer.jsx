import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { navLinks, profile } from '../../data/profile'
import Logo from '../ui/Logo'
import SocialLinks from '../ui/SocialLinks'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-navy-800 dark:bg-navy-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        {/* Brand */}
        <div>
          <a href="#home" className="group inline-flex items-center gap-2.5">
            <Logo />
            <span className="font-display text-lg font-semibold text-slate-900 dark:text-white">
              {profile.name}
            </span>
          </a>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {profile.headline}. Building practical software and always learning something new.
          </p>
          <SocialLinks className="mt-6" />
        </div>

        {/* Quick links */}
        <nav aria-label="Footer">
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
            Quick links
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm md:grid-cols-1">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="text-slate-600 transition-colors hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-400">
            <li>
              <a href={`mailto:${profile.email}`} className="flex items-center gap-2.5 break-all transition-colors hover:text-accent-600 dark:hover:text-accent-400">
                <FiMail className="size-4 shrink-0" /> {profile.email}
              </a>
            </li>
            <li>
              <a href={profile.phoneLink} className="flex items-center gap-2.5 transition-colors hover:text-accent-600 dark:hover:text-accent-400">
                <FiPhone className="size-4 shrink-0" /> {profile.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <FiMapPin className="size-4 shrink-0" /> {profile.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200 dark:border-navy-800">
        {/* Extra bottom padding on phones so the back-to-top button doesn't cover the text */}
        <p className="mx-auto max-w-6xl px-5 pt-6 pb-24 text-center text-sm text-slate-500 sm:px-8 sm:pb-6 dark:text-slate-400">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
