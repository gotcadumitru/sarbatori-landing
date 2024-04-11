'use client'

import { Locales } from '@/shared/config/i18n/consts'
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
  events: EventSourceInput
}

export const Calendar: FC<CalendarProps> = ({ className, locale, events }) => {
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
