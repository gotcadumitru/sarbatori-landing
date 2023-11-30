import {
  getMonthNameByMonthNumber,
  getNextDateByHolidayDate,
  HolidayDate,
} from '@/enteties/holiday'
import AiOutlineLeft from '@/shared/assets/icons/AiOutlineLeft'
import AiOutlineRight from '@/shared/assets/icons/AiOutlineRight'
import { Locales } from '@/shared/config/i18n/consts'
import { AppRoutes } from '@/shared/config/i18n/routes'
import { PropsWithLocale } from '@/shared/config/i18n/types'
import NavigationLink from '@/shared/ui/NavigationLink'
import classNames from 'classnames'
import { FC } from 'react'
import classes from '../styles/calendarCarousel.module.css'

type CalendarCarouselProps = {
  date: HolidayDate
}
export const CalendarCarousel: FC<PropsWithLocale<CalendarCarouselProps>> = ({
  date,
  params: { locale },
}) => {
  const { prevHolidaysAndDate, nextHolidaysAndDate, currentHolidaysAndDate } =
    getNextDateByHolidayDate(date, locale)
  const prevMonthNameForPath = getMonthNameByMonthNumber(prevHolidaysAndDate.date.month, Locales.en)
  const nextMonthNameForPath = getMonthNameByMonthNumber(nextHolidaysAndDate.date.month, Locales.en)
  const currentMonthName = getMonthNameByMonthNumber(currentHolidaysAndDate.date.month, locale)

  return (
    <div className={classNames(classes.calendarCarousel, 'container')}>
      <NavigationLink
        href={
          {
            pathname: `${AppRoutes.archive}/${prevMonthNameForPath}/[day]`,
            params: {
              day: prevHolidaysAndDate.date.day,
            },
          } as any
        }
      >
        <AiOutlineLeft className={classes.leftIcon} />
      </NavigationLink>
      <NavigationLink className={classes.date} href='/'>
        {currentMonthName}
      </NavigationLink>
      <NavigationLink
        href={
          {
            pathname: `${AppRoutes.archive}/${nextMonthNameForPath}/[day]`,
            params: {
              day: nextHolidaysAndDate.date.day,
            },
          } as any
        }
      >
        <AiOutlineRight className={classes.rightIcon} />
      </NavigationLink>
    </div>
  )
}
