'use client'

import type { ShareIconType } from '@/features/Share/ui/Share/Share'
import Facebook from '@/shared/assets/icons/Facebook'
import Reddit from '@/shared/assets/icons/Reddit'
import Twitter from '@/shared/assets/icons/Twitter'
import { AppRoutes } from '@/shared/config/i18n/routes'
import Modal from '@/shared/ui/Modal/Modal'
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
  const holidayUrl = `https://${typeof window !== 'undefined' && window.location.hostname}/${
    params.locale
  }${AppRoutes.holiday}/${holiday.id}`
  return (
    <Modal
      onClose={() => setIsDisplayed(false)}
      isOpen={isDisplayed}
      className={classes.searchModal}
    >
      <h2 className='modal__title'>{holiday.name}</h2>
      <div className='modal__body'>
        <a target='blank' href={`https://www.facebook.com/sharer/sharer.php?u=${holidayUrl}`}>
          <Facebook />
        </a>

        <a
          target='blank'
          href={`https://twitter.com/intent/tweet?text=${holiday.name}&url=${holidayUrl}`}
        >
          <Twitter />
        </a>
        <a
          target='blank'
          href={`https://www.reddit.com/submit?title=${holiday.name}&url=${holidayUrl}`}
        >
          <Reddit />
        </a>
      </div>
    </Modal>
  )
}
