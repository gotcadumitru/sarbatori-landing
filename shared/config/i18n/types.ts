import { locales, Locales } from '@/shared/config/i18n/consts'
import { PropsWithParams } from '@/shared/types/types'
import { Pathnames } from 'next-intl/navigation'

export type PropsWithLocale<T = void> = PropsWithParams<
  T & {
    locale: Locales
  }
>
export type PathNamesWithLocales = Pathnames<typeof locales>
