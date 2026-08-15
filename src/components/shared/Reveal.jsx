import { useInView } from '../../hooks/useInView'

export function Reveal({ as: Tag = 'div', from = 'up', className = '', children, delay = 0, ...rest }) {
  const [ref, inView] = useInView()

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${from} ${inView ? 'is-visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
