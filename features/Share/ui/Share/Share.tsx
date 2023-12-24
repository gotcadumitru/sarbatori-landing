'use client'

import { Holiday } from '@/enteties/holiday'
import ShareIcon from '@/shared/assets/icons/ShareIcon'
import { PropsWithLocale } from '@/shared/config/i18n/types'
import { FC, useState } from 'react'
import classes from '../../styles/share.module.css'
import { ShareModal } from '../ShareModal/ShareModal'

export type ShareIconType = PropsWithLocale<{
  holiday: Holiday
}>

export const Share: FC<PropsWithLocale<ShareIconType>> = (props) => {
  const [isDisplayed, setIsDisplayed] = useState(false)
  return (
    <div className={classes.searchInput}>
      <ShareModal {...props} isDisplayed={isDisplayed} setIsDisplayed={setIsDisplayed} />
      <ShareIcon onClick={() => setIsDisplayed(true)} />
    </div>
  )
}
