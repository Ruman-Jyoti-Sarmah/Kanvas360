/** Dark cinematic hero for inner pages. */
export default function PageHero({ label, titleLine1, titleLine2, image, imageAlt }) {
  return (
    <section className="page-hero">
      <div className="page-hero-bg hero-img-reveal" aria-hidden="true">
        <img src={image} alt={imageAlt || ''} />
      </div>
      <div className="container">
        {label && <span className="eyebrow hero-rise">{label}</span>}
        <h1 className="display-xl hero-rise hero-rise-1">
          {titleLine1}
          {titleLine2 && (
            <>
              <br />
              {titleLine2}
            </>
          )}
        </h1>
      </div>
    </section>
  )
}
