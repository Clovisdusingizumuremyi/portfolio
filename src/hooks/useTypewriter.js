import { useEffect, useState } from 'react'

/**
 * Types each word letter by letter, pauses, deletes it, then moves to the next word.
 * Returns the text that should be visible right now.
 *
 * Pass an array defined outside the component (like profile.roles), so it doesn't
 * change on every render.
 */
export function useTypewriter(words, { typeSpeed = 90, deleteSpeed = 45, pause = 1700 } = {}) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIndex]
    const finishedTyping = !isDeleting && text === word
    const finishedDeleting = isDeleting && text === ''

    const delay = finishedTyping ? pause : isDeleting ? deleteSpeed : typeSpeed

    const timer = setTimeout(() => {
      if (finishedTyping) {
        setIsDeleting(true)
      } else if (finishedDeleting) {
        setIsDeleting(false)
        setWordIndex((i) => (i + 1) % words.length)
      } else {
        // add or remove one letter
        setText(word.slice(0, text.length + (isDeleting ? -1 : 1)))
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pause])

  return text
}
