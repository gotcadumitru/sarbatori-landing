'use client'

import useDidUpdateEffect from '@/shared/lib/hooks/useDidUpdateEffect/useDidUpdateEffect'
import Button, { ButtonTheme } from '@/shared/ui/Button'
import NavigationLink from '@/shared/ui/NavigationLink'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import classes from './CookieBanner.module.css'
import { getLocalStorage, setLocalStorage } from './utils/CookieBannerUtils'

const CookieBanner = () => {
  const [cookieConsent, setCookieConsent] = useState<boolean | string | null>(false)

  useDidUpdateEffect(() => {
    const newValue = cookieConsent ? 'granted' : 'denied'

    window.gtag('consent', 'update', {
      analytics_storage: newValue,
    })
    setLocalStorage('cookie_consent', cookieConsent)

    //For Testing
  }, [cookieConsent])

  useEffect(() => {
    setCookieConsent(getLocalStorage('cookie_consent', null))
  }, [])
  return (
    <div
      className={classNames(classes.cookieBanner, {
        [classes.cookieBannerHidden]: cookieConsent !== null,
      })}
    >
      <div className='text-center'>
        <NavigationLink className={classes.cookiesLink} href='/cookies'>
          <p>
            We use <strong>cookies</strong> on our site.
          </p>
        </NavigationLink>
      </div>

      <div className={classes.buttons}>
        <Button theme={ButtonTheme.EMPTY} onClick={() => setCookieConsent(false)}>
          Decline
        </Button>
        <Button theme={ButtonTheme.EMPTY} onClick={() => setCookieConsent(true)}>
          Allow Cookies
        </Button>
      </div>
    </div>
  )
}
export default CookieBanner
