'use client'

import ShareIcon from '@/shared/assets/icons/ShareIcon'
import { FC, useState } from 'react'
import classes from '../../styles/share.module.css'
import { ShareModal } from '../ShareModal/ShareModal'

export interface ShareIconType {
  url: string
  title: string
}

export const Share: FC<ShareIconType> = (props) => {
  const [isDisplayed, setIsDisplayed] = useState(false)

  return (
    <div className={classes.searchInput}>
      <ShareModal {...props} isDisplayed={isDisplayed} setIsDisplayed={setIsDisplayed} />
      <ShareIcon onClick={() => setIsDisplayed(true)} />
    </div>
  )
}
