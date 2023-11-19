import CookieBanner from '@/features/CookieBanner'
import GoogleAnalytics from '@/features/GoogleAnalytics'
import { toastDefaultValues } from '@/shared/config/toastify'
import { Footer } from '@/widgets/Footer/Footer'
import { Header } from '@/widgets/Header/Header'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './globals.css'
import './skeleton.css'

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'CarMaster',
  description: 'Jurnalul călătoriilor tale pe șosea, unde fiecare kilometru are o poveste.',
}

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang='en'>
    <GoogleAnalytics GA_MEASUREMENT_ID='G-8PWXK5J089' />
    <body className={raleway.className}>
      <Header />
      {children}
      <Footer />
      <CookieBanner />
      <ToastContainer position='bottom-center' {...toastDefaultValues} />
    </body>
  </html>
)

export default RootLayout
