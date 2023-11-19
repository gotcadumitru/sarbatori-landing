'use client'

import classes from '@/features/MainDescription/styles/mainDescription.module.css'
import bottomWaveImagePlaceholder from './bottomWaveImagePlaceholder.png'
import { LottieOptions, useLottie } from 'lottie-react'
import Image from 'next/image'
import { FC, useEffect } from 'react'
import backgroundwave from './backgroundwave.json'

const BackgroundBottomWave: FC = () => {
  const options: LottieOptions = {
    animationData: backgroundwave,
    loop: true,
  }

  const { View, animationLoaded, setSpeed, stop } = useLottie(options, {
    position: 'absolute',
    width: '100%',
    bottom: -5,
    pointerEvents: 'none',
  })

  useEffect(() => {
    setSpeed(0.25)
  }, [])
  return (
    <>
      {View}
      {!animationLoaded && (
        <Image alt='' src={bottomWaveImagePlaceholder} className={classes.svgWaves} />
      )}
    </>
  )
}
export default BackgroundBottomWave
