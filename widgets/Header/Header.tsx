'use client'

import { roboto } from '@/app/fonts'
import VscMenu from '@/shared/assets/icons/VscMenu'
import WebsiteLogo from '@/shared/assets/icons/WebsiteLogo'
import { CircleShapeDouble, CircleShapePosition } from '@/shared/ui/CircleShape'
import classNames from 'classnames'
import Link from 'next/link'
import { FC, useState } from 'react'
import classes from './Header.module.css'

interface HeaderProps {
  className?: string
}

const urls = [
  {
    text: 'Sarbatorile de astazi',
    href: '/',
  },
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
  return (
    <>
      <div className={classNames(classes.headerMenuIconContainer, 'container')}>
        <VscMenu className={classes.headerMenuIcon} onClick={() => setIsHeaderDisplayed(true)} />
      </div>
      <CircleShapeDouble
        isDisplayed={!isHeaderDisplayed}
        position={CircleShapePosition.TOP_RIGHT}
      />
      <div
        onClick={() => setIsHeaderDisplayed(false)}
        className={classNames(
          classes.header,
          'container',
          {
            [classes.headerActive]: isHeaderDisplayed,
          },
          className,
        )}
      >
        <div onClick={(e) => e.stopPropagation()} className={classes.headerContainer}>
          <CircleShapeDouble
            isDisplayed={isHeaderDisplayed}
            position={CircleShapePosition.TOP_LEFT}
          />
          <CircleShapeDouble
            isDisplayed={isHeaderDisplayed}
            position={CircleShapePosition.BOTTOM_LEFT}
          />
          <Link onClick={() => setIsHeaderDisplayed(false)} href='/' className={classes.logoLink}>
            <WebsiteLogo />
          </Link>
          <div className={classes.urlsContainer}>
            {urls.map((url) => (
              <Link
                onClick={() => setIsHeaderDisplayed(false)}
                className={classes.urlItem}
                key={url.href}
                href={url.href}
              >
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
