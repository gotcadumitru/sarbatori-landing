'use client'

import type { ShareIconType } from '@/features/Share/ui/Share/Share'
import Facebook from '@/shared/assets/icons/Facebook'
import Reddit from '@/shared/assets/icons/Reddit'
import Twitter from '@/shared/assets/icons/Twitter'
import Modal from '@/shared/ui/Modal/Modal'
import NavigationLink from '@/shared/ui/NavigationLink'
import React, { FC } from 'react'
import classes from '../../styles/share.module.css'

interface ShareModalType extends ShareIconType {
  isDisplayed: boolean
  setIsDisplayed: (isDisplayed: boolean) => void
}

export const ShareModal: FC<ShareModalType> = ({
  isDisplayed,
  setIsDisplayed,
  holiday,
  params,
}) => {
  console.log(params)
  // const holidayUrl = `https://${typeof window !== 'undefined' && window.location.hostname}/${
  const holidayUrl = `https://www.sarbatori.net/en/holiday/${holiday.id}`
  return (
    <Modal
      onClose={() => setIsDisplayed(false)}
      isOpen={isDisplayed}
      className={classes.searchModal}
    >
      <h2 className='modal__title'>{holiday.name}</h2>
      <div className='modal__body'>
        <a
          target='_blank'
          href={`https://www.facebook.com/sharer/sharer.php?u=${holidayUrl}`}
          rel='noreferrer'
        >
          Facebook
        </a>
        <NavigationLink
          target='blank'
          href={
            {
              pathname: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                holidayUrl,
              )}`,
              // params: { id: holiday.id },
            } as any
          }
        >
          <Facebook />
        </NavigationLink>
        <NavigationLink
          target='blank'
          href={
            {
              pathname: `https://www.facebook.com/sharer/sharer.php?u=${holidayUrl}`,
              // params: { id: holiday.id },
            } as any
          }
        >
          <Facebook />
        </NavigationLink>

        <NavigationLink
          target='blank'
          href={
            {
              pathname: `https://twitter.com/intent/tweet?text=${holiday.name}&url=${holidayUrl}`,
              params: { id: holiday.id },
            } as any
          }
        >
          <Twitter />
        </NavigationLink>
        <NavigationLink
          target='blank'
          href={
            {
              pathname: `https://www.reddit.com/submit?title=${holiday.name}&url=${holidayUrl}`,
              params: { id: holiday.id },
            } as any
          }
        >
          <Reddit />
        </NavigationLink>
      </div>
    </Modal>
  )
}
