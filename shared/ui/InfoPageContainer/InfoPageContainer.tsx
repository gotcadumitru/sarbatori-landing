'use client'

import { infoNavbarUrls } from '@/widgets/InfoNavbar'
import { useSelectedLayoutSegment } from 'next/navigation'
import { FC, PropsWithChildren } from 'react'
import classes from './InfoPageContainer.module.css'

export const InfoPageContainer: FC<PropsWithChildren> = ({ children }) => {
  const segment = useSelectedLayoutSegment()
  const activeInfoNavbarUrl = infoNavbarUrls.find((url) => url.href === segment)
  if (!activeInfoNavbarUrl) return children
  return (
    <div className={classes.infoPageContainer}>
      <h1 className={classes.infoPageTitle}>{activeInfoNavbarUrl.pageTitle}</h1>
      <div className={classes.infoPageContent}>{children}</div>
    </div>
  )
}
