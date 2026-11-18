import { useState } from 'react'
import { FaJava, FaReact } from 'react-icons/fa'
import { profile } from '../../data/profile'

// Round photo with a glowing gradient ring and two floating tech badges.
// If there is no image (or it fails to load) it shows your initials instead.
export default function ProfilePhoto() {
  const [failed, setFailed] = useState(false)
  const showImage = profile.profileImage && !failed

  return (
    <div className="relative mx-auto size-64 sm:size-80 lg:size-96">
      {/* Soft glow behind the photo */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-br from-accent-500 to-violet-glow opacity-40 blur-3xl" />

      {/* Gradient ring */}
      <div className="relative size-full rounded-full bg-gradient-to-br from-accent-500 via-violet-glow to-accent-400 p-1.5 shadow-2xl shadow-accent-500/20">
        <div className="size-full overflow-hidden rounded-full bg-slate-100 dark:bg-navy-900">
          {showImage ? (
            <img
              src={profile.profileImage}
              alt={`Portrait of ${profile.name}`}
              onError={() => setFailed(true)}
              className="size-full object-cover object-[center_25%]"
              fetchPriority="high"
            />
          ) : (
            <span className="grid size-full place-items-center font-display text-6xl font-bold text-accent-500">
              {profile.initials}
            </span>
          )}
        </div>
      </div>

      {/* Floating badges */}
      <Badge className="-left-2 top-10 animate-[float_6s_ease-in-out_infinite] sm:-left-6">
        <FaJava className="size-5 text-orange-500" /> Java
      </Badge>
      <Badge className="-right-2 bottom-12 animate-[float_6s_ease-in-out_3s_infinite] sm:-right-6">
        <FaReact className="size-5 text-sky-400" /> React
      </Badge>
    </div>
  )
}

function Badge({ className, children }) {
  return (
    <div
      className={`absolute flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/90 px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-xl backdrop-blur dark:border-navy-700 dark:bg-navy-900/90 dark:text-slate-100 ${className}`}
    >
      {children}
    </div>
  )
}
