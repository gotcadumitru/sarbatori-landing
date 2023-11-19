import classNames from 'classnames'
import type { FC, PropsWithChildren } from 'react'
import { useEffect, useRef, useState } from 'react'
import CollapseArrow from '@/shared/assets/icons/CollapseArrow'
import './section.scss'

interface SectionProps {
  className?: string
  isCollapsable?: boolean
  isWithMarginBottom?: boolean
  title: string
}

export const Section: FC<PropsWithChildren<SectionProps>> = ({
  className,
  isCollapsable,
  isWithMarginBottom = true,
  title,
  children,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(isCollapsable)

  const sectionBodyRef = useRef<HTMLDivElement>(null)
  const toggleIsCollapsed = () => {
    setIsCollapsed(!isCollapsed)
  }

  useEffect(() => {
    if (isCollapsable) {
      if (isCollapsed) {
        sectionBodyRef.current!.style.maxHeight = '0'
        sectionBodyRef.current!.style.overflow = 'hidden'
      } else {
        sectionBodyRef.current!.style.maxHeight = `${sectionBodyRef.current!.scrollHeight}px`
        sectionBodyRef.current!.style.overflow = 'hidden'
        const overflowTimeout = setTimeout(() => {
          sectionBodyRef.current!.style.overflow = 'inherit'
        }, 200)
        return () => clearTimeout(overflowTimeout)
      }
    }
  }, [isCollapsable, isCollapsed])

  const sectionClassName = classNames('section', className, {
    'section--m-bottom': isWithMarginBottom,
  })

  const collapseArrowClassName = classNames('section__collapse-icon', {
    'section__collapse-icon--bottom': !isCollapsed,
  })

  return (
    <section className={sectionClassName}>
      <h3 className='section__title'>
        {title}{' '}
        {isCollapsable && (
          <CollapseArrow onClick={toggleIsCollapsed} className={collapseArrowClassName} />
        )}{' '}
      </h3>
      <div className='section__body' ref={sectionBodyRef}>
        {children}
      </div>
    </section>
  )
}
