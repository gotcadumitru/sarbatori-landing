'use client'

import { getCalendarEventsTextForDay, getMonthNameByMonthNumber } from '@/enteties/holiday'
import holidaysJSON from '@/holidaysDatabase.json'
import { Locales } from '@/shared/config/i18n/consts'
import { archivePathnames } from '@/shared/config/i18n/pathnames'
import { AppParams, AppRoutes } from '@/shared/config/i18n/routes'
import { EventSourceInput } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react'
import rrulePlugin from '@fullcalendar/rrule'
import timeGridPlugin from '@fullcalendar/timegrid'
import classNames from 'classnames'
import { FC } from 'react'
import '../styles/calendar.css'
import classes from '../styles/calendar.module.css'

interface CalendarProps {
  className?: string
  locale: Locales
}

export const Calendar: FC<CalendarProps> = ({ className, locale }) => {
  const events: EventSourceInput = holidaysJSON.map((holidayWithDateJson) => {
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
    <div className={classNames(classes.calendar, className)}>
      <FullCalendar
        firstDay={1}
        locale={locale}
        initialView='dayGridMonth'
        headerToolbar={{
          left: 'prev',
          center: 'title',
          right: 'next',
        }}
        views={{
          dayGridMonth: {
            titleFormat: {
              month: 'long',
            },
          },
        }}
        plugins={[rrulePlugin, dayGridPlugin, interactionPlugin, timeGridPlugin]}
        events={events}
        editable={false}
        droppable={false}
        weekends
        contentHeight='auto'
      />
    </div>
  )
}
