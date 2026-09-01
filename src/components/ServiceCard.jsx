import { Link } from 'react-router-dom'
import Reveal from './Reveal'

/** Editorial image-driven service preview card (home page). */
export default function ServiceCard({ service, index }) {
  return (
    <Reveal delay={(index % 3) * 0.12}>
      <Link to="/services" className="service-card img-zoom" aria-label={`Explore our ${service.title} services`}>
        <img src={service.image} alt={service.alt} loading="lazy" />
        <div className="service-card-info">
          <span className="service-card-num">{service.number}</span>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      </Link>
    </Reveal>
  )
}
