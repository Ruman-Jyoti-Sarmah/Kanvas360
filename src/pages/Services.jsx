import Reveal from '../components/Reveal'
import Button from '../components/Button'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import { services, images } from '../data/site'

export default function Services() {
  return (
    <>
      <PageHero
        label="Our Services"
        titleLine1="Crafted For"
        titleLine2="Every Occasion."
        image={images.finalCta}
        imageAlt={images.finalCtaAlt}
      />

      <section className="section light-theme" style={{ paddingTop: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="container">
          {services.map((service, i) => (
            <Reveal key={service.id} className="service-row">
              <div className="service-row-body">
                <span className="service-row-num">{service.number}</span>
                <h2>{service.title}</h2>
                <span className="tagline">{service.tagline}</span>
                <p className="lead">{service.description}</p>
                <ul className="service-details">
                  {service.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <Button to="/contact" variant="outline">Enquire Now</Button>
              </div>
              <div className="service-row-media img-frame ratio-wide img-zoom">
                <img src={service.image} alt={service.alt} loading="lazy" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow" style={{ display: 'block', marginBottom: '1.4rem' }}>
              Have an Event in Mind?
            </span>
            <h2 className="display-lg" style={{ marginBottom: '2.4rem' }}>Let&rsquo;s Talk.</h2>
            <Button to="/contact" variant="solid">Start a Conversation</Button>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  )
}
