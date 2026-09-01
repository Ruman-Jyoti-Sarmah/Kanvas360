import Reveal from '../components/Reveal'
import Button from '../components/Button'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import ProcessTimeline from '../components/ProcessTimeline'
import CTASection from '../components/CTASection'
import { images, services } from '../data/site'

export default function About() {
  return (
    <>
      <PageHero
        label="About Kanvas360"
        titleLine1="We Turn Ideas"
        titleLine2="Into Experiences."
        image={images.aboutMain}
        imageAlt={images.aboutMainAlt}
      />

      {/* WHO WE ARE */}
      <section className="section light-theme">
        <div className="container">
          <div className="about-grid">
            <Reveal>
              <span className="eyebrow">Who We Are</span>
              <h2 className="display-lg">A Studio Built Around Your Story.</h2>
              <p className="lead">
                Kanvas360 is a full-service event management company based in Kolkata, West Bengal.
                We design and produce weddings, exhibitions, corporate events and private
                celebrations — treating every brief as a blank canvas.
              </p>
              <p className="lead" style={{ marginTop: '1.2rem' }}>
                Our team brings together planners, designers and production specialists who work as
                one unit — so ideas move seamlessly from sketch to stage, and you always have a
                single, accountable partner by your side.
              </p>
            </Reveal>
            <Reveal variant="img" className="img-frame ratio-land img-zoom">
              <img src={images.introMain} alt={images.introMainAlt} loading="lazy" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* OUR PHILOSOPHY — dark editorial quote section */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Our Philosophy</span>
            <p className="philosophy-quote" style={{ marginTop: '1.6rem' }}>
              An event is never just an event. It is a <em>feeling</em> — designed, planned and
              delivered down to the last detail.
            </p>
          </Reveal>
          <Reveal className="about-grid" delay={0.15}>
            <div className="img-frame ratio-wide img-zoom">
              <img src={images.aboutSecondary} alt={images.aboutSecondaryAlt} loading="lazy" />
            </div>
            <div>
              <span className="eyebrow">Our Approach</span>
              <h2 className="display-md" style={{ margin: '1.2rem 0 1.4rem' }}>
                Considered. Personal. Precise.
              </h2>
              <p className="lead">
                We begin by listening — to your story, your guests and your ambitions. From there we
                design a concept that feels unmistakably yours, plan every vendor, timeline and
                rupee with precision, and execute on the ground with an experienced team.
              </p>
              <p className="lead" style={{ marginTop: '1.2rem' }}>
                The result is an experience that looks effortless — because behind it, nothing was
                left to chance.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT WE DO — compact service list */}
      <section className="section light-theme">
        <div className="container">
          <SectionHeading label="What We Do" title="Every Occasion. One Canvas." />
          <div className="timeline" style={{ gridTemplateColumns: '1fr' }}>
            {services.map((s, i) => (
              <Reveal as="div" key={s.id} className="timeline-step" delay={i * 0.06}>
                <span className="num">{s.number}</span>
                <h3>{s.title}</h3>
                <p>{s.tagline}</p>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ marginTop: '3rem' }}>
            <Button to="/services" variant="outline">Explore Our Services</Button>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section light-theme" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading label="The Journey" title="Discover → Design → Plan → Execute → Celebrate." />
          <ProcessTimeline />
        </div>
      </section>

      <CTASection />
    </>
  )
}
