import { getDayOfMonth, getHolidaysByDayAndMonthParams } from '@/enteties/holiday'
import { HolidaysList } from '@/features/HolidaysList'
import { PropsWithLocale } from '@/shared/config/i18n/types'
import NotFound from '@/widgets/NotFound'
import { FC } from 'react'
import classes from './page.module.css'

const Home: FC<PropsWithLocale> = ({ params: { locale } }) => {
  const dateToday = new Date()
  const day = getDayOfMonth(dateToday.getDate())
  const month = getDayOfMonth(dateToday.getMonth() + 1)
  const holidays = getHolidaysByDayAndMonthParams({ day, month, locale })
  if (!holidays) return <NotFound />
  return (
    <main className={classes.main}>
      <HolidaysList holidays={holidays} />
    </main>
  )
}
export default Home
