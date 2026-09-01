import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navigation } from '../data/site'
import Reveal from './Reveal'
import Button from './Button'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container navbar-inner">
          <Link to="/" className="wordmark" aria-label="Kanvas360 home">
            <img src="/logo-cropped.png" alt="Kanvas360" className="nav-logo" />
            KANVAS<span>360</span>
          </Link>

          <nav aria-label="Primary">
            <ul className="nav-links">
              {navigation.map((item) => (
                <li key={item.path}>
                  <NavLink to={item.path} end={item.path === '/'}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="navbar-actions">
            <Button to="/contact" variant="outline" className="navbar-cta-btn">
              Plan Your Event
            </Button>

            <button
              className={`hamburger${open ? ' open' : ''}`}
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu${open ? ' open' : ''}`} aria-hidden={!open}>
        <nav aria-label="Mobile">
          <ul>
            {navigation.map((item, i) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className="mobile-menu-link"
                  style={{ transitionDelay: open ? `${0.15 + i * 0.07}s` : '0s' }}
                  onClick={() => setOpen(false)}
                >
                  <span className="num">{item.number}</span>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-menu-cta">
          <Button to="/contact" variant="outline">
            Plan Your Event
          </Button>
          <Button to="/contact" variant="solid">
            Start a Conversation
          </Button>
        </div>
      </div>
    </>
  )
}
