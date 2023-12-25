'use client'

import type { ShareIconType } from '@/features/Share/ui/Share/Share'
import Facebook from '@/shared/assets/icons/Facebook'
import Reddit from '@/shared/assets/icons/Reddit'
import Twitter from '@/shared/assets/icons/Twitter'
import { AppParams, AppRoutes } from '@/shared/config/i18n/routes'
import Modal from '@/shared/ui/Modal/Modal'
import NavigationLink from '@/shared/ui/NavigationLink'
import { FC } from 'react'
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
  // const holidayUrl = `https://${typeof window !== 'undefined' && window.location.hostname}/${
  const holidayUrl = `https://sarbatori.net/${params.locale}${AppRoutes.holiday}/${AppParams.id}`
  return (
    <Modal
      onClose={() => setIsDisplayed(false)}
      isOpen={isDisplayed}
      className={classes.searchModal}
    >
      <h2 className='modal__title'>{holiday.name}</h2>
      <div className='modal__body'>
        <NavigationLink
          target='blank'
          href={
            {
              pathname: `https://www.facebook.com/sharer/sharer.php?u=${holidayUrl}`,
              params: { id: holiday.id },
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
