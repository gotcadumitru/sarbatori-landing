'use client'

import { LottieOptions, useLottie } from 'lottie-react'
import { FC, useEffect } from 'react'
import backgroundLines from './BackgroundLines.json'

const BackgroundLines: FC = () => {
  const options: LottieOptions = {
    animationData: backgroundLines,
    loop: true,
  }

  const { View, setSpeed } = useLottie(options, {
    position: 'absolute',
    zIndex: 0,
    transform: 'scaleX(-1)',
    width: '100%',
    bottom: '50px',
    pointerEvents: 'none',
  })

  useEffect(() => {
    setSpeed(0.5)
  }, [])
  return View
}
export default BackgroundLines
