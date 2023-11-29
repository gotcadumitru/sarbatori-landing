import { getNextDateByHolidayDate, HolidayDate } from '@/enteties/holiday'
import { Link } from '@/navigation'
import AiOutlineLeft from '@/shared/assets/icons/AiOutlineLeft'
import AiOutlineRight from '@/shared/assets/icons/AiOutlineRight'
import { Locales } from '@/shared/config/i18n/consts'
import { AppRoutes } from '@/shared/config/i18n/routes'
import { PropsWithLocale } from '@/shared/config/i18n/types'
import { monthsWithNumber } from '@/shared/defaults/dates/dates'
import NavigationLink from '@/shared/ui/NavigationLink'
import classNames from 'classnames'
import { FC } from 'react'
import classes from '../styles/calendarCarousel.module.css'

type CalendarCarouselProps = {
  date: HolidayDate
}
export const CalendarCarousel: FC<PropsWithLocale<CalendarCarouselProps>> = ({ date, params }) => {
  const { prevHolidaysAndDate, nextHolidaysAndDate } = getNextDateByHolidayDate(date, params.locale)
  const prevMonthNameForPath = monthsWithNumber.find(
    (monthWithNumber) => monthWithNumber.number === prevHolidaysAndDate.date.month,
  )!
  const nextMonthNameForPath = monthsWithNumber.find(
    (monthWithNumber) => monthWithNumber.number === nextHolidaysAndDate.date.month,
  )!
  return (
    <div className={classNames(classes.calendarCarousel, 'container')}>
      <NavigationLink
        href={
          {
            pathname: `${AppRoutes.archive}/[month]/[day]`,
            params: {
              day: prevHolidaysAndDate.date.day,
              month: prevMonthNameForPath.name[Locales.en],
            },
          } as any
        }
      >
        <AiOutlineLeft className={classes.leftIcon} />
      </NavigationLink>
      <Link className={classes.date} href='/calendar'>
        Date
      </Link>
      <NavigationLink
        href={
          {
            pathname: `${AppRoutes.archive}/[month]/[day]`,
            params: {
              day: nextHolidaysAndDate.date.day,
              month: nextMonthNameForPath.name[Locales.en],
            },
          } as any
        }
      >
        <AiOutlineRight className={classes.rightIcon} />
      </NavigationLink>
    </div>
  )
}
