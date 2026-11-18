import { FaWhatsapp } from 'react-icons/fa'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile, socials } from '../../data/profile'

const links = [
  { label: 'GitHub', href: socials.github, icon: FiGithub },
  { label: 'LinkedIn', href: socials.linkedin, icon: FiLinkedin },
  { label: 'WhatsApp', href: socials.whatsapp, icon: FaWhatsapp },
  { label: 'Email', href: `mailto:${profile.email}`, icon: FiMail },
]

// Round icon buttons for GitHub, LinkedIn, WhatsApp and email. Reused in Hero, Contact and Footer.
export default function SocialLinks({ className = '' }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {links.map((link) => (
        <SocialIcon key={link.label} {...link} />
      ))}
    </ul>
  )
}

function SocialIcon({ label, href, icon }) {
  const Icon = icon
  const isExternal = href.startsWith('http')

  return (
    <li>
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        aria-label={label}
        title={label}
        className="grid size-11 place-items-center rounded-full border border-slate-200 text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500 hover:bg-accent-500 hover:text-white hover:shadow-lg hover:shadow-accent-500/30 dark:border-navy-700 dark:text-slate-300"
      >
        <Icon className="size-[18px]" />
      </a>
    </li>
  )
}
