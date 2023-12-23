'use client'

import FaArrowCircleUp from '@/shared/assets/icons/FaArrowCircleUp'
import { FC, useEffect, useState } from 'react'
import classes from '../styles/gotToTopButton.module.css'

export const GotToTopButton: FC = () => {
  const [visible, setVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop
      if (scrolled > 300) {
        setVisible(true)
      } else if (scrolled <= 300) {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisible)
    return () => window.removeEventListener('scroll', toggleVisible)
  }, [visible])

  return (
    <div className={classes.gotToTopButton}>
      <FaArrowCircleUp onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }} />
    </div>
  )
}
