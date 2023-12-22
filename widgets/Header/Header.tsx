'use client'

import { roboto } from '@/app/fonts'
import { checkIsRouteWithSearchInput } from '@/enteties/holiday'
import { Link, usePathname } from '@/navigation'
import VscMenu from '@/shared/assets/icons/VscMenu'
import WebsiteLogo from '@/shared/assets/icons/WebsiteLogo'

import { locales } from '@/shared/config/i18n/consts'
import { CircleShapeDouble, CircleShapePosition } from '@/shared/ui/CircleShape'
import NavigationLink from '@/shared/ui/NavigationLink'
import classNames from 'classnames'
import { useParams } from 'next/navigation'
import { FC, ReactNode, useState } from 'react'
import classes from './Header.module.css'

interface HeaderProps {
  className?: string
  searchInput: ReactNode
  urls: {
    text: string
    href: any
  }[]
}

export const Header: FC<HeaderProps> = ({ className, urls, searchInput }) => {
  const pathname = usePathname().toString()
  const params = useParams()
  const [isHeaderDisplayed, setIsHeaderDisplayed] = useState(false)
  const isSearchInputDisplayed = checkIsRouteWithSearchInput(pathname)
  return (
    <>
      <div className={classNames(classes.headerMenuIconContainer, 'container')}>
        <VscMenu className={classes.headerMenuIcon} onClick={() => setIsHeaderDisplayed(true)} />
        {isSearchInputDisplayed && searchInput}
      </div>
      <CircleShapeDouble
        isDisplayed={!isHeaderDisplayed}
        position={CircleShapePosition.TOP_RIGHT}
      />
      <CircleShapeDouble
        isDisplayed={!isHeaderDisplayed}
        position={CircleShapePosition.BOTTOM_LEFT}
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
              {locales.map((locale) => (
                <NavigationLink
                  locale={locale}
                  className={roboto.className}
                  key={locale}
                  href={{ pathname, params: { ...params, locale } } as any}
                >
                  {locale.toLocaleUpperCase()}
                </NavigationLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
