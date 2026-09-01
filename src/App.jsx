import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'
import LogoIntro from './components/LogoIntro'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

const titles = {
  '/': 'Kanvas360 | Premium Event Management Company in Kolkata',
  '/about': 'About Us | Kanvas360 — Event Management in Kolkata',
  '/services': 'Services | Kanvas360 — Weddings, Exhibitions & Corporate Events',
  '/gallery': 'Gallery | Kanvas360 — Moments We Have Created',
  '/contact': 'Contact | Kanvas360 — Plan Your Event in Kolkata',
}

export default function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = titles[pathname] || titles['/']
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <LogoIntro />
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
