import { useEffect, useRef, useState } from 'react'

/**
 * Scroll-triggered reveal wrapper.
 * variant: 'fade' (default) | 'img' (clip-path image reveal)
 */
export default function Reveal({ children, variant = 'fade', delay = 0, className = '', as: Tag = 'div', ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const base = variant === 'img' ? 'reveal-img' : 'reveal'

  return (
    <Tag
      ref={ref}
      className={`${base}${visible ? ' is-visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}s` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
