/* eslint-disable camelcase */
import { getAllHolidays, getHolidayByHolidayUrl } from '@/enteties/holiday'
import { Locales, locales } from '@/shared/config/i18n/consts'
import { LocaleParams, PropsWithParams } from '@/shared/config/i18n/types'
import NotFound from '@/widgets/NotFound'
import { Metadata } from 'next'
import { unstable_setRequestLocale } from 'next-intl/server'
import Image from 'next/image'
import { FC } from 'react'
import classes from './page.module.css'

type HolidayPageProps = {
  holidayUrl: string
}

export const generateStaticParams = () =>
  getAllHolidays().reduce(
    (params, holiday) => [
      ...params,
      ...locales.map((locale) => ({
        locale,
        holidayUrl: holiday[`url${locale}`],
      })),
    ],
    [] as { locale: Locales; holidayUrl: string }[],
  )

export async function generateMetadata({
  params: { holidayUrl, locale },
}: PropsWithParams<LocaleParams & HolidayPageProps>): Promise<Metadata> {
  unstable_setRequestLocale(locale)
  const holiday = getHolidayByHolidayUrl(holidayUrl, locale)
  if (!holiday) return {}

  return {
    title: holiday.name,
    description: holiday.description,
    openGraph: {
      type: 'article',
      title: holiday.name,
      url: `${process.env.SITE_URL}en/holiday/${holiday.url}`,
      description: holiday.description,
      images: [
        holiday.imageURL
          ? `${process.env.SITE_URL}images/${holiday.imageURL}`
          : `${process.env.SITE_URL}logo.png`,
      ],
    },
  }
}

const Page: FC<PropsWithParams<LocaleParams & HolidayPageProps>> = ({
  params: { holidayUrl, locale },
}) => {
  const holiday = getHolidayByHolidayUrl(holidayUrl, locale)
  if (!holiday) return <NotFound />
  const [holidayDescriptionFirstPhrase, ...holidayRestOfTheDescription] =
    holiday.description.split('.')
  return (
    <div className='container'>
      <h1 className={classes.holidayTitle}>{holiday.name}</h1>
      <p>
        {holidayDescriptionFirstPhrase}
        <Image
          className={classes.holidayImage}
          src={`/images/${holiday.imageURL}`}
          alt={holiday.name}
          width={130}
          height={130}
        />
        {holidayRestOfTheDescription}
      </p>
    </div>
  )
}
export default Page
