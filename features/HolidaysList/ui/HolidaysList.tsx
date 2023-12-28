import { HolidaysWithDate } from '@/enteties/holiday/types/holidayTypes'
import { CalendarCarousel } from '@/features/CalendarCarousel'
import { PropsWithLocale } from '@/shared/config/i18n/types'
import { HolidayCard } from '@/shared/ui/HolidayCard'
import classNames from 'classnames'
import { FC } from 'react'
import classes from '../styles/holidaysList.module.css'
type HolidaysListProps = {
  holidaysWithDate: HolidaysWithDate
}
export const HolidaysList: FC<PropsWithLocale<HolidaysListProps>> = ({
  holidaysWithDate,
  params,
}) => (
  <>
    <CalendarCarousel params={params} date={holidaysWithDate.date} />
    <div className={classNames('container', classes.holidaysContainer)}>
      {holidaysWithDate.holidays.map((holiday) => (
        <HolidayCard key={holiday.id} holiday={holiday} params={params} />
      ))}
    </div>
  </>
)
