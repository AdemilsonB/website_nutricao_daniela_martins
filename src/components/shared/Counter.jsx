import { useEffect, useState } from 'react'
import { prefersReducedMotion, useInView } from '../../hooks/useInView'

const DURATION = 1400

export function Counter({ value, suffix = '', plain = false }) {
  const [ref, inView] = useInView({ threshold: 0.6 })
  const [display, setDisplay] = useState(plain ? value : 0)

  useEffect(() => {
    if (!inView || plain || prefersReducedMotion()) return undefined

    let frame = 0
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / DURATION, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(value * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value, plain])

  return (
    <strong ref={ref} className="counter">
      {display}
      {suffix}
    </strong>
  )
}
