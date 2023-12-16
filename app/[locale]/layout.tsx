import { inter } from '@/app/fonts'

import { locales } from '@/shared/config/i18n/consts'
import { LocaleParams, PropsWithLocale, PropsWithParams } from '@/shared/config/i18n/types'
import { toastDefaultValues } from '@/shared/config/toastify'
import { HeaderEntry } from '@/widgets/Header'
import classNames from 'classnames'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import Head from 'next/head'
import { notFound } from 'next/navigation'
import { FC, PropsWithChildren } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './globals.css'
import './skeleton.css'

export async function generateMetadata({ params: { locale } }: PropsWithParams<LocaleParams>) {
  const t = await getTranslations({ locale, namespace: 'metadata' })
  return {
    title: t('title'),
  }
}

const LocaleLayout: FC<PropsWithChildren<PropsWithLocale>> = ({ children, params: { locale } }) => {
  // const t = useTranslations('metadata')
  // console.log(t('title'))
  if (!locales.includes(locale as any)) notFound()
  return (
    <html lang={locale}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        {/*<meta name='description' content={t('description')} />*/}
        {/*<meta name='keywords' content={t('keywords')} />*/}
        <meta property='og:type' content='website' />
        {/*<meta property='og:title' content={t('title')} />*/}
        {/*<meta property='og:description' content={t('description')} />*/}
        <meta property='og:url' content='https://www.sarbatori.net/' />
        <meta property='og:image' content='https://www.sarbatori.net/favicon.ico' />
      </Head>
      {/*<GoogleAnalytics GA_MEASUREMENT_ID='G-8PWXK5J089' />*/}
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
