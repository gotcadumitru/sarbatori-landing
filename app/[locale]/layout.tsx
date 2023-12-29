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
        <meta name='apple-mobile-web-app-title' content='Holidays' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='theme-color' content='#ffffff' />

        <link rel='apple-touch-icon' href='/icons/icon-128x128.png' />
        <link rel='apple-touch-icon' sizes='152x152' href='/icons/icon-152x152.png' />
        {/*<link rel='apple-touch-icon' sizes='180x180' href='/icons/' />*/}
        {/*<link rel='apple-touch-icon' sizes='167x167' href='/icons/' />*/}

        {/*<link rel='icon' type='image/png' sizes='32x32' href='/icons/' />*/}
        {/*<link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />*/}
        {/*<link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#5bbad5' />*/}
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
