'use client'

import { roboto } from '@/app/fonts'
import VscMenu from '@/shared/assets/icons/VscMenu'
import WebsiteLogo from '@/shared/assets/icons/WebsiteLogo'
import useOnClickOutside from '@/shared/lib/hooks/useOnClickOutside'
import { CircleShapeDouble, CircleShapePosition } from '@/shared/ui/CircleShape'
import classNames from 'classnames'
import Link from 'next/link'
import { FC, useRef, useState } from 'react'
import classes from './Header.module.css'

interface HeaderProps {
  className?: string
}

const urls = [
  {
    text: 'Calendar',
    href: '/calendar',
  },
  {
    text: 'Contact',
    href: '/contact',
  },
  {
    text: 'Politica de confidențialitate',
    href: '/politica-de-confidentialitate',
  },
  {
    text: 'Cookies',
    href: '/cookies',
  },
  {
    text: 'Termeni și condiții',
    href: '/termeni-si-conditii',
  },
]

const languageUrls = [
  {
    text: 'RO',
    href: '/ro',
  },
  {
    text: 'RU',
    href: '/ru',
  },
  {
    text: 'EN',
    href: '/en',
  },
]

export const Header: FC<HeaderProps> = ({ className }) => {
  const [isHeaderDisplayed, setIsHeaderDisplayed] = useState(false)
  const headerRef = useRef(null)
  useOnClickOutside(headerRef, () => {
    setIsHeaderDisplayed(false)
  })
  return (
    <>
      {!isHeaderDisplayed && <VscMenu onClick={() => setIsHeaderDisplayed(true)} />}
      <div
        ref={headerRef}
        className={classNames(
          classes.header,
          'container',
          {
            [classes.show]: isHeaderDisplayed,
          },
          className,
        )}
      >
        <div className={classes.headerContainer}>
          <CircleShapeDouble position={CircleShapePosition.TOP_LEFT} />
          <CircleShapeDouble position={CircleShapePosition.BOTTOM_LEFT} />
          <Link href='/' className={classes.logoLink}>
            <WebsiteLogo />
          </Link>
          <div className={classes.urlsContainer}>
            {urls.map((url) => (
              <Link className={classes.urlItem} key={url.href} href={url.href}>
                {url.text}
              </Link>
            ))}
            <div className={classes.languageContainer}>
              {languageUrls.map((url) => (
                <Link className={roboto.className} key={url.href} href={url.href}>
                  {url.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
