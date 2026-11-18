// Shared wrapper for every page section: same spacing and max width everywhere.
// "tinted" gives the section a slightly different background to separate it from its neighbours.
export default function Section({ id, tinted = false, children }) {
  return (
    <section
      id={id}
      className={`relative py-24 sm:py-28 ${tinted ? 'bg-white/70 dark:bg-navy-900/40' : ''}`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  )
}
