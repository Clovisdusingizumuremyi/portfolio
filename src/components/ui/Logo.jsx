import { useState } from 'react'
import { profile } from '../../data/profile'

// Shows your logo image. If there's no file yet (or it fails to load), shows your initials.
export default function Logo({ className = 'size-9' }) {
  const [failed, setFailed] = useState(false)

  if (profile.logo && !failed) {
    return (
      <img
        src={profile.logo}
        alt=""
        onError={() => setFailed(true)}
        className={`${className} scale-125 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-135 group-hover:-rotate-6`}
      />
    )
  }

  return (
    <span
      className={`${className} grid place-items-center rounded-xl bg-gradient-to-br from-accent-500 to-violet-glow font-display text-sm font-bold text-white shadow-md shadow-accent-500/30 transition-transform duration-300 group-hover:rotate-6`}
    >
      {profile.initials}
    </span>
  )
}
