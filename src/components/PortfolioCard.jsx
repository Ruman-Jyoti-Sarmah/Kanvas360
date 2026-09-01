import { Link } from 'react-router-dom'
import Reveal from './Reveal'

/** Portfolio card with hover overlay — used in the featured work grid. */
export default function PortfolioCard({ item, index }) {
  return (
    <Reveal delay={(index % 2) * 0.15}>
      <Link to="/gallery" className="portfolio-card">
        <div className={`img-frame img-zoom ratio-${item.ratio}`}>
          <img src={item.src} alt={item.alt} loading="lazy" />
          <div className="portfolio-card-overlay">
            <span className="text-link">View Gallery →</span>
          </div>
        </div>
        <div className="portfolio-card-cap">
          <h3>{item.title}</h3>
          <span>{item.category}</span>
        </div>
      </Link>
    </Reveal>
  )
}
