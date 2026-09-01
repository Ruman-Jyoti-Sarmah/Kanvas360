import { useState } from 'react'
import Button from './Button'

const eventTypes = ['Wedding', 'Exhibition', 'Corporate Event', 'Private Event', 'Event Production', 'Complete Event Management', 'Other']
const budgets = ['Not sure yet', 'Under ₹1 Lakh', '₹1–5 Lakh', '₹5–15 Lakh', '₹15–50 Lakh', 'Above ₹50 Lakh']

const initialValues = {
  name: '',
  phone: '',
  email: '',
  eventType: '',
  eventDate: '',
  eventLocation: '',
  budget: '',
  message: '',
}

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your full name.'
  if (!/^[+\d][\d\s-]{7,14}$/.test(values.phone.trim())) errors.phone = 'Please enter a valid phone number.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Please enter a valid email address.'
  if (!values.eventType) errors.eventType = 'Please select an event type.'
  if (!values.eventLocation.trim()) errors.eventLocation = 'Please enter an event location.'
  return errors
}

/**
 * Enquiry form. There is intentionally NO fake backend: the submit
 * handler below is a single, clearly marked integration point where a
 * real endpoint (form service, WordPress endpoint, etc.) can be wired.
 */
export default function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validation = validate(values)
    setErrors(validation)
    if (Object.keys(validation).length > 0) return

    setStatus('loading')
    try {
      /* ------------------------------------------------------------
       * INTEGRATION POINT — replace with a real submission endpoint.
       * e.g. await fetch('/api/enquiry', { method: 'POST', body: ... })
       * ---------------------------------------------------------- */
      await new Promise((resolve) => setTimeout(resolve, 1200))
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="form-success" role="status">
        <span className="serif display-md">Thank You.</span>
        <p className="serif display-md" style={{ fontSize: 'clamp(1.4rem,3vw,2rem)' }}>
          Your enquiry has been received.
        </p>
        <p>Our team will reach out to you shortly to begin planning your experience.</p>
        <Button
          variant="outline"
          onClick={() => {
            setValues(initialValues)
            setStatus('idle')
          }}
        >
          Send Another Enquiry
        </Button>
      </div>
    )
  }

  const field = (name, label, props = {}) => (
    <div className={`field${errors[name] ? ' error' : ''} ${props.full ? 'full' : ''}`}>
      <label htmlFor={`enquiry-${name}`}>{label}</label>
      {props.children}
      {errors[name] && <p className="field-msg">{errors[name]}</p>}
    </div>
  )

  return (
    <form onSubmit={handleSubmit} noValidate>
      {status === 'error' && (
        <p className="form-error-banner" role="alert">
          Something went wrong while sending your enquiry. Please try again, or reach us on WhatsApp.
        </p>
      )}

      <div className="form-grid">
        {field('name', 'Full Name', {
          children: <input id="enquiry-name" name="name" type="text" value={values.name} onChange={handleChange} />,
        })}
        {field('phone', 'Phone Number', {
          children: <input id="enquiry-phone" name="phone" type="tel" value={values.phone} onChange={handleChange} placeholder="+91" />,
        })}
        {field('email', 'Email', {
          children: <input id="enquiry-email" name="email" type="email" value={values.email} onChange={handleChange} />,
        })}
        {field('eventType', 'Event Type', {
          children: (
            <select id="enquiry-eventType" name="eventType" value={values.eventType} onChange={handleChange}>
              <option value="" disabled>Select…</option>
              {eventTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          ),
        })}
        {field('eventDate', 'Event Date', {
          children: <input id="enquiry-eventDate" name="eventDate" type="date" value={values.eventDate} onChange={handleChange} />,
        })}
        {field('eventLocation', 'Event Location', {
          children: <input id="enquiry-eventLocation" name="eventLocation" type="text" value={values.eventLocation} onChange={handleChange} placeholder="City / venue" />,
        })}
        {field('budget', 'Estimated Budget', {
          children: (
            <select id="enquiry-budget" name="budget" value={values.budget} onChange={handleChange}>
              <option value="" disabled>Select…</option>
              {budgets.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          ),
        })}
        {field('message', 'Tell Us About Your Vision', {
          full: true,
          children: <textarea id="enquiry-message" name="message" rows="4" value={values.message} onChange={handleChange} />,
        })}
      </div>

      <div className="form-actions">
        <Button type="submit" variant="solid" disabled={status === 'loading'}>
          {status === 'loading' ? (
            <>
              <span className="spinner" aria-hidden="true" />
              <span>Sending…</span>
            </>
          ) : (
            'Send Enquiry'
          )}
        </Button>
      </div>
    </form>
  )
}
