import { inter } from '@/app/fonts'
import GoogleAnalytics from '@/features/GoogleAnalytics'

import { locales } from '@/shared/config/i18n/consts'
import { PropsWithLocale } from '@/shared/config/i18n/types'
import { toastDefaultValues } from '@/shared/config/toastify'
import { HeaderEntry } from '@/widgets/Header'
import classNames from 'classnames'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { FC, PropsWithChildren } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './globals.css'
import './skeleton.css'

export const metadata: Metadata = {
  title: 'Sarbatori',
  description: 'Jurnalul călătoriilor tale pe șosea, unde fiecare kilometru are o poveste.',
}

const LocaleLayout: FC<PropsWithChildren<PropsWithLocale>> = ({ children, params: { locale } }) => {
  if (!locales.includes(locale as any)) notFound()
  return (
    <html lang={locale}>
      <GoogleAnalytics GA_MEASUREMENT_ID='G-8PWXK5J089' />
      <body className={classNames(inter.className)}>
        <HeaderEntry />
        {children}
        {/*<Footer />*/}
        {/*<CookieBanner />*/}
        <ToastContainer position='bottom-center' {...toastDefaultValues} />
      </body>
    </html>
  )
}

export default LocaleLayout
