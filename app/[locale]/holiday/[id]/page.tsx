import { getHolidayById } from '@/enteties/holiday'
import { LocaleParams, PropsWithParams } from '@/shared/config/i18n/types'
import NotFound from '@/widgets/NotFound'
import { Metadata } from 'next'
import Image from 'next/image'
import { FC } from 'react'
import classes from './page.module.css'

type HolidayPageProps = {
  id: string
}

export async function generateMetadata({
  params: { id, locale },
}: PropsWithParams<LocaleParams & HolidayPageProps>): Promise<Metadata> {
  const holiday = getHolidayById(id, locale)
  if (!holiday) return {}

  return {
    title: holiday.name,
    description: holiday.description,
    openGraph: {
      type: 'article',
      title: holiday.name,
      description: holiday.description,
      images: [holiday.imageURL || `${process.env.SITE_URL}logo.png`],
    },
  }
}

const Page: FC<PropsWithParams<LocaleParams & HolidayPageProps>> = ({ params: { id, locale } }) => {
  const holiday = getHolidayById(id, locale)
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
          src={holiday.imageURL}
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
