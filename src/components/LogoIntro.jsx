import { useEffect, useState } from 'react'
import '../styles/logo-intro.css'

const STORAGE_KEY = 'kanvas360_intro_done'

function prefersReducedMotion() {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }
  return false
}

/**
 * Premium logo intro — plays once per session on the first page load,
 * never on internal route changes.
 *
 * The animation itself is pure CSS; JS only decides when to unmount.
 */
export default function LogoIntro() {
  const [done, setDone] = useState(() => {
    try {
      return typeof window !== 'undefined' && window.sessionStorage.getItem(STORAGE_KEY) === '1'
    } catch {
      return false
    }
  })

  useEffect(() => {
    if (done) return
    // Reduced motion? Skip the intro immediately.
    if (prefersReducedMotion()) {
      try {
        window.sessionStorage.setItem(STORAGE_KEY, '1')
      } catch {
        /* ignore */
      }
      setDone(true)
      return
    }
    // Hold the intro for the full animation, then unmount + guard the session.
    const t = setTimeout(() => {
      try {
        window.sessionStorage.setItem(STORAGE_KEY, '1')
      } catch {
        /* ignore */
      }
      setDone(true)
    }, 2700)
    return () => clearTimeout(t)
  }, [done])

  if (done) return null

  return (
    <div className="logo-intro" role="presentation" aria-hidden="true">
      <div className="logo-intro-inner">
        <div className="logo-intro-glow" />
        <img
          className="logo-intro-img"
          src="/logo-cropped.png"
          alt=""
          width="475"
          height="461"
        />
        <div className="logo-intro-shine" />
      </div>
    </div>
  )
}