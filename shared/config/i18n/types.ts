import { locales, Locales } from '@/shared/config/i18n/consts'
import { AllLocales } from 'next-intl/dist/types/src/shared/types'
import { Pathnames } from 'next-intl/navigation'

export type LocaleParams = {
  locale: Locales
}
export type PropsWithLocale<T = void> = T & {
  params: LocaleParams
}
export type PropsWithParams<Params, T = void> = T & {
  params: Params
}

export type ArchivePathnames<Locales extends AllLocales> = Record<
  string,
  {
    [Key in Locales[number]]: string
  }
>
export type ArchivePathnamesWithLocales = ArchivePathnames<typeof locales>
export type PathNamesWithLocales = Pathnames<typeof locales>
