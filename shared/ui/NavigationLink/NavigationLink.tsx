'use client'

import { Link } from '@/navigation'
import { pathnames } from '@/shared/config/i18n/pathnames'
import { useSelectedLayoutSegment } from 'next/navigation'
import { ComponentProps } from 'react'

const NavigationLink = <Pathname extends keyof typeof pathnames>({
  href,
  ...rest
}: ComponentProps<typeof Link<Pathname>>) => {
  const selectedLayoutSegment = useSelectedLayoutSegment()
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/'
  const isActive = pathname === href

  return <Link aria-current={isActive ? 'page' : undefined} href={href} {...rest} />
}
export default NavigationLink
