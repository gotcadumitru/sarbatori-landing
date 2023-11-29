import { getHolidayById } from '@/enteties/holiday'
import { PropsWithLocale } from '@/shared/config/i18n/types'
import NotFound from '@/widgets/NotFound'
import Image from 'next/image'
import { FC } from 'react'
import classes from './page.module.css'

type HolidayPageProps = {
  id: string
}
const Page: FC<PropsWithLocale<HolidayPageProps>> = ({ params: { id, locale } }) => {
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
