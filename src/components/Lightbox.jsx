import { useCallback, useEffect } from 'react'

/**
 * Premium lightbox with prev/next/close, counter and keyboard support.
 */
export default function Lightbox({ items, index, onClose, onNavigate }) {
  const item = items[index]

  const prev = useCallback(() => onNavigate((index - 1 + items.length) % items.length), [index, items.length, onNavigate])
  const next = useCallback(() => onNavigate((index + 1) % items.length), [index, items.length, onNavigate])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  if (!item) return null

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${item.title} — image viewer`}>
      <div className="lightbox-top">
        <span className="lightbox-counter">
          {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
        </span>
        <button className="lightbox-close" onClick={onClose} aria-label="Close image viewer">
          Close ✕
        </button>
      </div>

      <div className="lightbox-stage">
        <img key={item.id} src={item.src.replace('w=1000', 'w=1600')} alt={item.alt} />
        <button className="lightbox-nav lightbox-prev" onClick={prev} aria-label="Previous image">←</button>
        <button className="lightbox-nav lightbox-next" onClick={next} aria-label="Next image">→</button>
      </div>

      <div className="lightbox-caption">
        <h3>{item.title}</h3>
        <span>
          {item.category} — {item.location}
        </span>
      </div>
    </div>
  )
}
