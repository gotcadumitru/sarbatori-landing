'use client'

import classes from '@/widgets/InfoNavbar/InfoNavbar.module.css'
import classNames from 'classnames'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { FC, PropsWithChildren } from 'react'

export const InfoNavLink: FC<PropsWithChildren<{ slug: string }>> = ({ slug, ...props }) => {
  const segment = useSelectedLayoutSegment()
  return (
    <li className={classNames(classes.item, { [classes.itemActive]: segment === slug })}>
      <Link {...props} href={`/info/${slug}`} />
    </li>
  )
}
