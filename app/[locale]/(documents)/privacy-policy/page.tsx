import { Locales } from '@/shared/config/i18n/consts'
import { PropsWithLocale } from '@/shared/config/i18n/types'
import { FC } from 'react'
import PrivacyPolicyEN from './PrivacyPolicyEN'
import PrivacyPolicyRO from './PrivacyPolicyRO'
import PrivacyPolicyRU from './PrivacyPolicyRU'

const PrivacyPolicy: FC<PropsWithLocale> = ({ params: { locale } }) => {
  if (locale === Locales.ru) return <PrivacyPolicyRU />
  if (locale === Locales.ro) return <PrivacyPolicyRO />
  return <PrivacyPolicyEN />
}
export default PrivacyPolicy
