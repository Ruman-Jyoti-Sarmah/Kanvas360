import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'
import { contact, whatsappLink, images } from '../data/site'

export default function Contact() {
  return (
    <>
      <PageHero
        label="Get in Touch"
        titleLine1="Let's Create"
        titleLine2="Your Next Experience."
        image={images.aboutMain}
        imageAlt={images.aboutMainAlt}
      />

      <section className="section light-theme">
        <div className="container">
          <div className="about-grid" style={{ alignItems: 'start' }}>
            <Reveal>
              <span className="eyebrow">Send an Enquiry</span>
              <h2 className="display-lg" style={{ marginBottom: '2.4rem' }}>
                Tell Us About Your Event.
              </h2>
              <ContactForm />
            </Reveal>

            <Reveal delay={0.15}>
              <span className="eyebrow">Reach Us Directly</span>
              <h2 className="display-md" style={{ margin: '1.2rem 0 2rem' }}>
                Kanvas360
              </h2>
              <ul className="contact-info">
                <li>
                  <span className="k">Location</span>
                  <span>{contact.location}</span>
                </li>
                <li>
                  <span className="k">Phone</span>
                  <a href={`tel:${contact.phoneDisplay.replace(/\s/g, '')}`}>{contact.phoneDisplay}</a>
                </li>
                <li>
                  <span className="k">Email</span>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </li>
                <li>
                  <span className="k">Instagram</span>
                  <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer">
                    {contact.instagramHandle}
                  </a>
                </li>
                <li>
                  <span className="k">WhatsApp</span>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    Message Us →
                  </a>
                </li>
              </ul>
              <p className="lead" style={{ marginTop: '2rem', fontSize: '0.95rem' }}>
                We respond to every enquiry personally. Share as much detail as you like — the more
                we know about your vision, the better we can bring it to life.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
