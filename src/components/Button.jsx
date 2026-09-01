import { Link } from 'react-router-dom'

/**
 * Premium button. Renders a <Link> when `to` is given, an <a> when
 * `href` is given, otherwise a <button>.
 */
export default function Button({ to, href, children, variant = 'outline', type, onClick, disabled, external, className }) {
  const cls = `btn btn-${variant}${className ? ` ${className}` : ''}`
  const inner = (
    <>
      <span>{children}</span>
      <span className="arrow" aria-hidden="true">→</span>
    </>
  )

  if (to) return <Link to={to} className={cls}>{inner}</Link>
  if (href)
    return (
      <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {inner}
      </a>
    )
  return (
    <button type={type || 'button'} className={cls} onClick={onClick} disabled={disabled}>
      {inner}
    </button>
  )
}
