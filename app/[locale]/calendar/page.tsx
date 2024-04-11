import {
  getCalendarEventsTextForDay,
  getHolidaysWithDate,
  getMonthNameByMonthNumber,
} from '@/enteties/holiday'
import { Calendar } from '@/features/Calendar'
import { Locales } from '@/shared/config/i18n/consts'
import { archivePathnames } from '@/shared/config/i18n/pathnames'
import { AppParams, AppRoutes } from '@/shared/config/i18n/routes'

import {
  LocaleParams,
  MonthSearchParams,
  PropsWithParams,
  PropsWithSearchParams,
} from '@/shared/config/i18n/types'
import { EventSourceInput } from '@fullcalendar/core'
import classNames from 'classnames'
import { FC } from 'react'
import classes from './page.module.css'

const Page: FC<PropsWithParams<LocaleParams, PropsWithSearchParams<MonthSearchParams>>> = ({
  params: { locale },
}) => {
  const holidaysWithDateJson = getHolidaysWithDate()
  // getHolidaysByMonthParams(
  //   searchParams.month ||
  //     getMonthNameByMonthNumber(new Date().getMonth() + 1, locale).monthNameForUrlUse,
  // ) || []

  const events: EventSourceInput = holidaysWithDateJson.map((holidayWithDateJson) => {
    const { monthNameForUrlUse } = getMonthNameByMonthNumber(
      holidayWithDateJson.date.month,
      Locales.en,
    )
    const archivePathnameKey = `${[AppRoutes.archive]}/${monthNameForUrlUse}/${AppParams.day}`
    const urlWithoutParams = archivePathnames[archivePathnameKey][locale]
    const urlWithoutLocale = urlWithoutParams.replace(AppParams.day, holidayWithDateJson.date.day)
    const url = `/${locale}${urlWithoutLocale}`
    return {
      title: getCalendarEventsTextForDay(holidayWithDateJson, locale),
      allDay: true,
      url,
      rrule: {
        freq: 'yearly',
        dtstart: `0004-${holidayWithDateJson.date.month}-${holidayWithDateJson.date.day}`,
      },
    }
  })

  return (
    <div className={classNames('container', classes.calendarPage)}>
      <Calendar locale={locale} events={events} />
    </div>
  )
}
export default Page
