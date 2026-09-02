import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import PortfolioCard from '../components/PortfolioCard'
import ProcessTimeline from '../components/ProcessTimeline'
import CTASection from '../components/CTASection'
import { services, featuredWork, images, contact } from '../data/site'

const principles = [
  { number: '01', title: 'Creative Thinking', text: 'Ideas designed around your story.' },
  { number: '02', title: 'Precision Planning', text: 'Every detail considered.' },
  { number: '03', title: 'Flawless Execution', text: 'Professional coordination from beginning to end.' },
  { number: '04', title: 'Personal Experience', text: 'Your event should feel uniquely yours.' },
]

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-bg hero-img-reveal" aria-hidden="true">
          <img src={images.hero} alt={images.heroAlt} fetchpriority="high" />
        </div>
        <div className="container hero-content">
          <h1 className="display-xl hero-rise hero-rise-2">
            We Create
            <br />
            Moments
            <br />
            That Last.
          </h1>
          <p className="lead hero-rise hero-rise-3">
            From intimate celebrations to large-scale experiences, Kanvas360 transforms ideas into
            unforgettable moments.
          </p>
          <div className="hero-actions hero-rise hero-rise-4">
            <Button to="/contact" variant="solid">Plan Your Event</Button>
            <Button to="/gallery" variant="outline">View Our Work</Button>
          </div>
        </div>
        <span className="scroll-indicator" aria-hidden="true">
          Scroll to Explore ↓
        </span>
      </section>

      {/* ================= INTRODUCTION ================= */}
      <section className="section light-theme">
        <div className="container">
          <div className="intro-grid">
            <Reveal className="intro-text">
              <span className="eyebrow">01 — The Kanvas360 Approach</span>
              <h2 className="display-lg">
                Your Vision.
                <br />
                Our Canvas.
              </h2>
              <p className="lead">
                Kanvas360 is a Kolkata-based event management studio built on a simple belief — every
                celebration deserves to be treated as a work of art. We bring together design,
                planning and production under one roof, so that from the first conversation to the
                final farewell, your event unfolds exactly the way you imagined it.
              </p>
              <Link to="/about" className="text-link">Our Story →</Link>
            </Reveal>

            <Reveal className="intro-images" variant="img">
              <div className="img-frame ratio-tall main">
                <img src={images.introMain} alt={images.introMainAlt} loading="lazy" />
              </div>
              <div className="img-frame ratio-wide small">
                <img src={images.introSmall} alt={images.introSmallAlt} loading="lazy" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= SERVICES PREVIEW ================= */}
      <section className="section">
        <div className="container">
          <SectionHeading label="What We Do" title="Every Event. Beautifully Executed." />
          <div className="services-grid">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED WORK ================= */}
      <section className="section light-theme tone-cream">
        <div className="container">
          <SectionHeading label="02 — Selected Work" title="Moments We've Created." />
          <div className="work-grid">
            {featuredWork.map((item, i) => (
              <PortfolioCard key={item.title} item={item} index={i} />
            ))}
          </div>
          <Reveal style={{ marginTop: '3.5rem', textAlign: 'center' }}>
            <Button to="/gallery" variant="outline">View Full Gallery</Button>
          </Reveal>
        </div>
      </section>

      {/* ================= WHY KANVAS360 ================= */}
      <section className="section">
        <div className="container">
          <SectionHeading label="Why Kanvas360" title={<>Details Make<br />the Difference.</>} />
          <div className="principles-grid">
            {principles.map((p, i) => (
              <Reveal key={p.number} className="principle" delay={i * 0.1}>
                <span className="num">{p.number}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="section light-theme" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading label="How We Work" title="From Idea to Experience." />
          <ProcessTimeline />
        </div>
      </section>

      {/* ================= INSTAGRAM ================= */}
      <section className="section tone-cream" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading label={contact.instagramHandle} title="Follow the Journey" />
          <Reveal className="insta-grid">
            {images.instagram.map((src, i) => (
              <a key={i} href={contact.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label={`Kanvas360 on Instagram — post ${i + 1}`}>
                <img src={src} alt={`Event moment by Kanvas360 — Instagram post ${i + 1}`} loading="lazy" />
              </a>
            ))}
          </Reveal>
          <Reveal style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Button href={contact.instagramUrl} variant="outline" external>
              Follow Us on Instagram
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <CTASection />
    </>
  )
}
