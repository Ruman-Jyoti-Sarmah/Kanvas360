import Reveal from './Reveal'
import Button from './Button'
import { images, whatsappLink } from '../data/site'

/** Cinematic full-width closing call-to-action. */
export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="bg" aria-hidden="true">
        <img src={images.finalCta} alt="" loading="lazy" />
      </div>
      <div className="container">
        <Reveal>
          <span className="eyebrow" style={{ display: 'block', marginBottom: '1.4rem' }}>
            Ready When You Are
          </span>
          <h2 className="display-xl">
            Let&rsquo;s Create
            <br />
            Something
            <br />
            Unforgettable.
          </h2>
          <p className="lead">
            Planning a wedding, exhibition or celebration? Let&rsquo;s talk about your vision.
          </p>
          <div className="hero-actions">
            <Button to="/contact" variant="solid">Start a Conversation</Button>
            <Button href={whatsappLink} variant="outline" external>WhatsApp Us</Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
