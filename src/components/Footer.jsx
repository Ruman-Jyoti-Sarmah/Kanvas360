import { Link } from 'react-router-dom'
import { contact, navigation, whatsappLink } from '../data/site'
import Button from './Button'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/" className="wordmark">
              <img src="/logo.png" alt="Kanvas360" className="footer-logo" />
              KANVAS<span>360</span>
            </Link>
            <p className="footer-tagline">Creating experiences. Crafting memories.</p>
            <p className="footer-tagline" style={{ marginTop: '1rem' }}>{contact.location}</p>
          </div>

          <div>
            <h4>Explore</h4>
            <ul className="footer-links">
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Connect</h4>
            <ul className="footer-links">
              <li>
                <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
              <li>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </li>
              <li>
                <a href={`tel:${contact.phoneDisplay.replace(/\s/g, '')}`}>{contact.phoneDisplay}</a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-cta">
          <Button to="/contact" variant="solid">Plan Your Event</Button>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Kanvas360. All rights reserved.</span>
          <span>Events · Weddings · Exhibitions</span>
        </div>
      </div>
    </footer>
  )
}
