import { useTranslations } from 'next-intl'
import { Header } from './Header'
import { headerUrls } from './HeaderConsts'

export const HeaderEntry = () => {
  const t = useTranslations('header')
  const urlsTranslated = headerUrls.map((url) => ({
    text: t(url.i18nKey as any),
    href: url.href,
  }))
  return <Header urls={urlsTranslated} />
}
