/* eslint-disable react/no-invalid-html-attribute */
import { inter } from '@/app/fonts'
import { GotToTopButton } from '@/features/GotToTopButton/ui/GotToTopButton'

import { locales } from '@/shared/config/i18n/consts'
import { LocaleParams, PropsWithLocale, PropsWithParams } from '@/shared/config/i18n/types'
import { toastDefaultValues } from '@/shared/config/toastify'
import { HeaderEntry } from '@/widgets/Header'
import classNames from 'classnames'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import Head from 'next/head'
import { notFound } from 'next/navigation'
import { FC, PropsWithChildren } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './globals.css'
import './skeleton.css'

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
  }
}

const LocaleLayout: FC<PropsWithChildren<PropsWithLocale>> = ({ children, params: { locale } }) => {
  if (!locales.includes(locale as any)) notFound()
  return (
    <html lang={locale}>
      <Head>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        />
        <meta name='application-name' content='HoliDays' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-touch-fullscreen' content='yes' />
        <meta name='apple-mobile-web-app-title' content='HoliDays' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='theme-color' content='#ffffff' />

        <link
          rel='apple-touch-startup-image'
          media='(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'
          href='/icons/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png'
        />
        <link
          rel='apple-touch-startup-image'
          media='(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
          href='/icons/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png'
        />

        <link rel='icon' type='image/png' sizes='196x196' href='/icons/apple-touch-icon.png' />
        <link rel='apple-touch-icon' href='/icons/apple-touch-icon.png' />
      </Head>
      {/*<GoogleAnalytics GA_MEASUREMENT_ID='G-8PWXK5J089' />*/}
      <body className={classNames(inter.className)}>
        <HeaderEntry locale={locale} />
        {children}
        {/*<Footer />*/}
        {/*<CookieBanner />*/}
        <ToastContainer position='bottom-center' {...toastDefaultValues} />
        <GotToTopButton />
      </body>
    </html>
  )
}

export default LocaleLayout
