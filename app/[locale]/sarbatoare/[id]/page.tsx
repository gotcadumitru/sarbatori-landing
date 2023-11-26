import holidays from '@/jsonObj.json'
import NotFound from '@/widgets/NotFound'
import Image from 'next/image'
import { FC } from 'react'
import classes from './page.module.css'

type HolidayPageProps = {
  params: {
    id: string
  }
}
const Page: FC<HolidayPageProps> = ({ params: { id } }) => {
  const currentHoliday = holidays
    .find((h) => h.holidays.find((holiday) => holiday.id === id))
    ?.holidays.find((holiday) => holiday.id === id)
  if (!currentHoliday) return <NotFound />
  const [holidayDescriptionFirstPhrase, ...holidayRestOfTheDesciption] =
    currentHoliday.descriptionRU.split('.')
  return (
    <div className='container'>
      <h1 className={classes.holidayTitle}>{currentHoliday.nameRU}</h1>
      <p>
        {holidayDescriptionFirstPhrase}
        <Image
          className={classes.holidayImage}
          src={currentHoliday.imageURL}
          alt={currentHoliday.nameRU}
          width={130}
          height={130}
        />
        {holidayRestOfTheDesciption}
      </p>
    </div>
  )
}
export default Page
