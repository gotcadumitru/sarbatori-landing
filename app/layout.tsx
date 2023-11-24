import { inter } from '@/app/fonts'
import GoogleAnalytics from '@/features/GoogleAnalytics'
import { toastDefaultValues } from '@/shared/config/toastify'
import { Header } from '@/widgets/Header/Header'
import classNames from 'classnames'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './globals.css'
import './skeleton.css'

export const metadata: Metadata = {
  title: 'Sarbatori',
  description: 'Jurnalul călătoriilor tale pe șosea, unde fiecare kilometru are o poveste.',
}

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang='en'>
    <GoogleAnalytics GA_MEASUREMENT_ID='G-8PWXK5J089' />
    <body className={classNames(inter.className)}>
      <Header />
      {children}
      {/*<Footer />*/}
      {/*<CookieBanner />*/}
      <ToastContainer position='bottom-center' {...toastDefaultValues} />
    </body>
  </html>
)

export default RootLayout
