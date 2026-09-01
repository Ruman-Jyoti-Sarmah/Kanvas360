import { process } from '../data/site'
import Reveal from './Reveal'

/** Horizontal timeline on desktop, vertical on mobile. */
export default function ProcessTimeline() {
  return (
    <ol className="timeline">
      {process.map((step, i) => (
        <Reveal as="li" key={step.number} className="timeline-step" delay={i * 0.1}>
          <span className="num">{step.number}</span>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </Reveal>
      ))}
    </ol>
  )
}
