/**
 * =====================================================================
 * KANVAS360 — CENTRALIZED SITE CONTENT / CONFIGURATION
 * =====================================================================
 * Everything the client may want to update lives in this file.
 * This structure intentionally mirrors what a CMS (WordPress / Wix)
 * would manage later: pages, services, gallery items and contact
 * details. When migrating to a CMS, each export below maps to a
 * content collection or settings panel — no component redesign needed.
 *
 * ⚠️ PLACEHOLDERS: Phone, email, WhatsApp and Instagram values below
 * are editable placeholders. Replace them with real client details
 * before launch. No real contact details are invented anywhere.
 * =====================================================================
 */

/* ------------------------------------------------------------------
 * CONTACT DETAILS — replace with real values before launch
 * ------------------------------------------------------------------ */
export const contact = {
  location: 'Kolkata, West Bengal',
  phoneDisplay: '+91 86381 44013', // editable placeholder
  email: 'hello@yourdomain.com', // editable placeholder
  whatsappNumber: '+91 86381 44013', // editable placeholder — digits only, with country code
  instagramUrl: 'https://www.instagram.com/your-page-handle', // editable placeholder
  instagramHandle: '@KANVAS360',
}

export const whatsappLink = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
  'Hello Kanvas360, I would like to plan an event.'
)}`

/* ------------------------------------------------------------------
 * NAVIGATION
 * ------------------------------------------------------------------ */
export const navigation = [
  { label: 'Home', path: '/', number: '01' },
  { label: 'About', path: '/about', number: '02' },
  { label: 'Services', path: '/services', number: '03' },
  { label: 'Gallery', path: '/gallery', number: '04' },
  { label: 'Contact', path: '/contact', number: '05' },
]
/* ------------------------------------------------------------------
 * SERVICES
 * ------------------------------------------------------------------ */
export const services = [
  {
    id: 'weddings',
    number: '01',
    title: 'Weddings',
    tagline: 'Celebrations woven around your story',
    description:
      'Wedding planning, décor, coordination, vendor management and execution — every ritual and every detail, thoughtfully arranged.',
    details: ['Venue & décor design', 'Vendor coordination', 'Ritual & timeline planning', 'On-day management'],
    image:
      'https://haryanamarriage.com/images/wedding.jpg',
    alt: 'Bride and groom at an elegant wedding celebration',
  },
  {
    id: 'exhibitions',
    number: '02',
    title: 'Exhibitions',
    tagline: 'Brands brought to life on the floor',
    description:
      'Exhibition planning, stall coordination, branding, production and on-ground management — experiences that draw crowds and hold attention.',
    details: ['Stall & layout planning', 'Branding & fabrication', 'Floor management', 'Guest & exhibitor liaison'],
    image:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30',
    alt: 'Visitors at a large exhibition event floor',
  },
  {
    id: 'corporate',
    number: '03',
    title: 'Corporate Events',
    tagline: 'Precision behind every protocol',
    description:
      'Conferences, launches, celebrations and corporate experiences — executed with the polish your brand deserves.',
    details: ['Conferences & summits', 'Product launches', 'Award nights', 'Team celebrations'],
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    alt: 'Audience at a professional corporate conference',
  },
  {
    id: 'private',
    number: '04',
    title: 'Private Events',
    tagline: 'Intimate moments, beautifully held',
    description:
      'Birthdays, parties and personal celebrations — designed around the people who matter most.',
    details: ['Birthdays & milestones', 'Private dinners', 'Themed parties', 'Family celebrations'],
    image:
      'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf',
    alt: 'Guests celebrating at an elegant private party',
  },
  {
    id: 'production',
    number: '05',
    title: 'Event Production',
    tagline: 'The craft behind the spectacle',
    description:
      'Stage, lighting, décor, audiovisual and production coordination — the technical artistry that makes an event unforgettable.',
    details: ['Stage & set design', 'Lighting & sound', 'Audiovisual production', 'Technical crews'],
    image:
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a',
    alt: 'Stage lighting at a large-scale event production',
  },
  {
    id: 'complete',
    number: '06',
    title: 'Complete Event Management',
    tagline: 'One team, end to end',
    description:
      'End-to-end planning and execution — from the first conversation to the final farewell, a single accountable partner.',
    details: ['Concept & budgeting', 'Full planning & logistics', 'Vendor ecosystem', 'Complete execution'],
    image:
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80',
    alt: 'Fireworks and celebration at a large managed event',
  },
]

/* ------------------------------------------------------------------
 * GALLERY — single source of truth for the portfolio grid & lightbox.
 * Category values must match one of the categories below.
 * Replace `src` values with the client's own photography (or CMS URLs).
 * ------------------------------------------------------------------ */
export const galleryCategories = ['All', 'Weddings', 'Exhibitions', 'Corporate', 'Private']

export const gallery = [
  { id: 1, title: 'The Royal Wedding', category: 'Weddings', location: 'Kolkata', src: 'https://haryanamarriage.com/images/wedding.jpg', alt: 'Wedding couple sharing a moment at their ceremony', ratio: 'portrait' },
  { id: 2, title: 'The Brand Experience', category: 'Exhibitions', location: 'Exhibition', src: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1000&q=80', alt: 'Crowd exploring a branded exhibition space', ratio: 'landscape' },
  { id: 3, title: 'An Evening in Ivory', category: 'Private', location: 'Private Celebration', src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80', alt: 'Candlelit dining tables at an intimate private dinner', ratio: 'landscape' },
  { id: 4, title: 'The Leadership Summit', category: 'Corporate', location: 'Corporate Event', src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80', alt: 'Speaker addressing a corporate conference audience', ratio: 'portrait' },
  { id: 5, title: 'Vows at Dusk', category: 'Weddings', location: 'Kolkata', src: 'https://panigrahana.com/images/homepage/03-panigrahana-wooden-mandap-hanging-garlands.jpg', alt: 'Newlywed couple walking under evening lights', ratio: 'landscape' },
  { id: 6, title: 'Light & Sound', category: 'Exhibitions', location: 'Production', src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80', alt: 'Dramatic stage lighting at a produced event', ratio: 'landscape' },
  { id: 7, title: 'The Milestone Party', category: 'Private', location: 'Private Celebration', src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80', alt: 'Guests dancing under warm party lights', ratio: 'portrait' },
  { id: 8, title: 'The Grand Reception', category: 'Weddings', location: 'Kolkata', src: 'https://cms.weddingbanquets.in/storage/images/flora/SzK8PPNZWvMonRfD6gJTjI8SnlyTygqMMfR2w08E.webp', alt: 'Decorated wedding reception hall with chandeliers', ratio: 'portrait' },
  { id: 9, title: 'The Product Launch', category: 'Corporate', location: 'Corporate Event', src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=80', alt: 'Stage and screen at a corporate product launch', ratio: 'landscape' },
  { id: 10, title: 'First Dance', category: 'Weddings', location: 'Kolkata', src: 'https://images.squarespace-cdn.com/content/v1/6744250b81521d675423a80c/82a5e637-af1e-4d8f-90f8-aa5439aaa1c4/598920725_18551030698018841_9219789078788786437_n.jpg', alt: 'Couple sharing their first dance at a wedding', ratio: 'landscape' },
  { id: 11, title: 'Sparkler Farewell', category: 'Private', location: 'Private Celebration', src: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1000&q=80', alt: 'Guests holding sparklers at a celebration send-off', ratio: 'landscape' },
  { id: 12, title: 'The Showcase Floor', category: 'Exhibitions', location: 'Exhibition', src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1000&q=80', alt: 'Fireworks above a large outdoor event showcase', ratio: 'landscape' },
]

/* ------------------------------------------------------------------
 * FEATURED WORK (home page) — visual placeholders, not client claims.
 * ------------------------------------------------------------------ */
export const featuredWork = [
  { title: 'The Royal Wedding', category: 'Kolkata', src: 'https://haryanamarriage.com/images/wedding.jpg', alt: 'Wedding couple at their ceremony', ratio: 'tall' },
  { title: 'The Brand Experience', category: 'Exhibition', src: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1000&q=80', alt: 'Exhibition floor with branded displays', ratio: 'wide' },
  { title: 'An Evening in Ivory', category: 'Private Celebration', src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80', alt: 'Candlelit private dinner tablescape', ratio: 'wide' },
  { title: 'The Leadership Summit', category: 'Corporate Event', src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80', alt: 'Corporate conference stage and audience', ratio: 'tall' },
]

/* ------------------------------------------------------------------
 * SHARED HERO / SECTION IMAGERY
 * ------------------------------------------------------------------ */
export const images = {
  hero: 'https://haryanamarriage.com/images/wedding.jpg',
  heroAlt: 'Elegant wedding reception with chandeliers and candlelight',
  introMain: 'https://panigrahana.com/images/homepage/03-panigrahana-wooden-mandap-hanging-garlands.jpg',
  introMainAlt: 'Couple walking together at an evening celebration',
  introSmall: 'https://cms.weddingbanquets.in/storage/images/flora/SzK8PPNZWvMonRfD6gJTjI8SnlyTygqMMfR2w08E.webp',
  introSmallAlt: 'White floral décor detail at a wedding',
  finalCta: 'https://images.squarespace-cdn.com/content/v1/6744250b81521d675423a80c/82a5e637-af1e-4d8f-90f8-aa5439aaa1c4/598920725_18551030698018841_9219789078788786437_n.jpg',
  finalCtaAlt: 'Couple dancing under warm event lighting',
  aboutMain: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80',
  aboutMainAlt: 'Guests at a beautifully decorated event venue',
  aboutSecondary: 'https://images.unsplash.com/photo-1496843916299-590492c751f4?auto=format&fit=crop&w=1000&q=80',
  aboutSecondaryAlt: 'Celebration table setting at a private event',
  instagram: [
    'https://haryanamarriage.com/images/wedding.jpg',
    'https://cms.weddingbanquets.in/storage/images/flora/SzK8PPNZWvMonRfD6gJTjI8SnlyTygqMMfR2w08E.webp',
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80',
  ],
}

/* ------------------------------------------------------------------
 * PROCESS
 * ------------------------------------------------------------------ */
export const process = [
  { number: '01', title: 'Discover', text: 'We listen. Your story, your vision, your guests.' },
  { number: '02', title: 'Design', text: 'Concepts, mood and aesthetics shaped around you.' },
  { number: '03', title: 'Plan', text: 'Budgets, vendors and timelines — meticulously mapped.' },
  { number: '04', title: 'Execute', text: 'Flawless, on-ground coordination on the day.' },
  { number: '05', title: 'Celebrate', text: 'You live the moment. We handle everything else.' },
]

