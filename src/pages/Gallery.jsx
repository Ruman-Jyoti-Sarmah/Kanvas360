import { useMemo, useState } from 'react'
import PageHero from '../components/PageHero'
import Lightbox from '../components/Lightbox'
import CTASection from '../components/CTASection'
import Reveal from '../components/Reveal'
import { gallery, galleryCategories, images } from '../data/site'

/**
 * Gallery page. All items come from the centralized data source
 * (src/data/site.js), so images can later be swapped for a CMS
 * collection without touching this component.
 */
export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const items = useMemo(
    () => (filter === 'All' ? gallery : gallery.filter((g) => g.category === filter)),
    [filter]
  )

  return (
    <>
      <PageHero
        label="Portfolio"
        titleLine1="The Kanvas360"
        titleLine2="Gallery."
        image={images.hero}
        imageAlt="Selected moments from Kanvas360 events"
      />

      <section className="section">
        <div className="container">
          <Reveal className="gallery-filters" role="tablist" aria-label="Filter gallery by category">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                className={filter === cat ? 'active' : ''}
                onClick={() => setFilter(cat)}
                aria-pressed={filter === cat}
              >
                {cat}
              </button>
            ))}
          </Reveal>

          <div className="masonry" key={filter}>
            {items.map((item, i) => (
              <button
                key={item.id}
                className="masonry-item gallery-item-enter"
                style={{ animationDelay: `${Math.min(i * 0.06, 0.6)}s` }}
                onClick={() => setLightboxIndex(i)}
                aria-label={`Open image: ${item.title}`}
              >
                <div className="img-frame img-zoom">
                  <img src={item.src} alt={item.alt} loading="lazy" />
                  <div className="masonry-overlay">
                    <span className="cat">{item.category}</span>
                    <h3>{item.title}</h3>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          items={items}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}

      <CTASection />
    </>
  )
}
