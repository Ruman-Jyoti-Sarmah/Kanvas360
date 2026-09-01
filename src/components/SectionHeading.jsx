import Reveal from './Reveal'

/** Editorial section heading with numbered eyebrow label. */
export default function SectionHeading({ label, title, align = 'left' }) {
  return (
    <div className={`section-heading`} style={{ textAlign: align === 'center' ? 'center' : 'left' }}>
      {label && <span className="eyebrow" style={{ display: 'block' }}>{label}</span>}
      <h2 className="display-lg">{title}</h2>
    </div>
  )
}
