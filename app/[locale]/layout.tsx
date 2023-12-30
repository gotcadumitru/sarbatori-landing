/* eslint-disable react/no-invalid-html-attribute */
import { inter } from '@/app/fonts'
import { GotToTopButton } from '@/features/GotToTopButton/ui/GotToTopButton'

import { locales } from '@/shared/config/i18n/consts'
import { LocaleParams, PropsWithLocale, PropsWithParams } from '@/shared/config/i18n/types'
import { toastDefaultValues } from '@/shared/config/toastify'
import { HeaderEntry } from '@/widgets/Header'
import classNames from 'classnames'
import { Metadata, Viewport } from 'next'
import { getTranslations } from 'next-intl/server'
import Head from 'next/head'
import { notFound } from 'next/navigation'
import { FC, PropsWithChildren } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './globals.css'
import './skeleton.css'
import iconss from '../../public/icons/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png'

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  minimumScale: 1,
  maximumScale: 1,
  initialScale: 1,
  userScalable: false,
  viewportFit: 'cover',
}
export async function generateMetadata({
  params: { locale },
}: PropsWithParams<LocaleParams>): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'metadata' })
  return {
    title: t('title'),
    keywords: t('keywords'),
    description: t('description'),
    openGraph: {
      type: 'website',
      title: t('title'),
      description: t('description'),
      url: process.env.SITE_URL,
      images: [`${process.env.SITE_URL}logo.png`],
    },
    manifest: '/manifest.json',
    authors: [{ name: `DIMA'S${' '}SOFTWARE` }],
    other: {
      'application-name': 'HoliDays',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'apple-mobile-web-app-title': 'HoliDays',
      'format-detection': 'telephone=no',
      'mobile-web-app-capable': 'yes',
    },
  }
}

const LocaleLayout: FC<PropsWithChildren<PropsWithLocale>> = ({ children, params: { locale } }) => {
  if (!locales.includes(locale as any)) notFound()
  return (
    <html lang={locale}>
      <Head>
        <link
          rel='apple-touch-startup-image'
          media='(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'
          href='/icons/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png'
        />
        <link
          rel='apple-touch-startup-image'
          media='(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
          href={`${iconss}`}
        />
      </Head>
      {/*<GoogleAnalytics GA_MEASUREMENT_ID='G-8PWXK5J089' />*/}
      <body className={classNames(inter.className)}>
        <HeaderEntry locale={locale} />
        {children}
        {/*<CookieBanner />*/}
        <ToastContainer position='bottom-center' {...toastDefaultValues} />
        <GotToTopButton />
      </body>
    </html>
  )
}

export default LocaleLayout
