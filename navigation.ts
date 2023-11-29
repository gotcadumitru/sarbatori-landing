import { pathnames } from '@/shared/config/i18n/pathnames'
import { locales } from '@/shared/config/i18n/consts'
import { createLocalizedPathnamesNavigation } from 'next-intl/navigation'

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, pathnames })
