'use client'

import Button, { ButtonTheme } from '@/shared/ui/Button'
import classNames from 'classnames'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import classes from './CookieBanner.module.css'
import { getLocalStorage, setLocalStorage } from './utils/CookieBannerUtils'

const CookieBanner = () => {
  const [cookieConsent, setCookieConsent] = useState<boolean | string | null>(
    getLocalStorage('cookie_consent', null),
  )

  useEffect(() => {
    const newValue = cookieConsent ? 'granted' : 'denied'

    window.gtag('consent', 'update', {
      analytics_storage: newValue,
    })
    setLocalStorage('cookie_consent', cookieConsent)

    //For Testing
    console.log('Cookie Consent: ', cookieConsent)
  }, [cookieConsent])

  return (
    <div
      className={classNames(classes.cookieBanner, {
        [classes.cookieBannerHidden]: cookieConsent !== null,
      })}
    >
      <div className='text-center'>
        <Link className={classes.cookiesLink} href='/cookies'>
          <p>
            We use <strong>cookies</strong> on our site.
          </p>
        </Link>
      </div>

      <div className={classes.buttons}>
        <Button theme={ButtonTheme.EMPTY} onClick={() => setCookieConsent(false)}>
          Decline
        </Button>
        <Button theme={ButtonTheme.OUTLINE_RED} onClick={() => setCookieConsent(true)}>
          Allow Cookies
        </Button>
      </div>
    </div>
  )
}
export default CookieBanner
