import holidaysJSON from '@/jsonObj.json'
import { Locales } from '@/shared/config/i18n/consts'
import { LocaleParams } from '@/shared/config/i18n/types'
import { monthsWithNumber } from '@/shared/defaults/dates/dates'
import {
  Holiday,
  HolidayDate,
  HolidayJSON,
  HolidayPageParams,
  HolidaysWithDate,
  HolidaysWithDateJSON,
} from '../types/holidayTypes'

export const convertHolidayFromJsonToHoliday = (
  holidaysFromJson: HolidayJSON[],
  locale: Locales,
): Holiday[] =>
  holidaysFromJson.map((holiday) => ({
    name: holiday[`name${locale}`] || holiday.nameen || holiday.nameru,
    description: holiday[`description${locale}`] || holiday.nameen || holiday.nameru,
    imageURL: holiday.imageURL,
    id: holiday.id,
    timeAgo: holiday.timeAgo,
  }))

export const getDayOfMonth = (day: string | number) => {
  const dayLocal = day.toString()
  if (dayLocal.length > 1) return dayLocal
  return `0${dayLocal}`
}

export const getMonthNameByMonthNumber = (monthNumber: string | number, locale: Locales) => {
  const monthNumberLocal = getDayOfMonth(monthNumber)
  const month = monthsWithNumber.find((m) => m.number === monthNumberLocal)
  if (!month) return null
  return month.name[locale]
}

export const getHolidaysByDayAndMonthParams = ({
  day,
  month,
  locale,
}: LocaleParams & HolidayPageParams): HolidaysWithDate | null => {
  const monthWithNumber =
    month.length > 2
      ? monthsWithNumber.find((m) => m.name[Locales.en] === month)
      : monthsWithNumber.find((m) => m.number === month)

  if (!monthWithNumber) return null
  const holidaysAndDate = holidaysJSON.find(
    (holiday) =>
      holiday.date.day === getDayOfMonth(day) && holiday.date.month === monthWithNumber.number,
  )
  if (!holidaysAndDate) return null
  return {
    holidays: convertHolidayFromJsonToHoliday(holidaysAndDate.holidays, locale),
    date: holidaysAndDate.date,
  }
}

export const getHolidayById = (id: string, locale: Locales) => {
  const currentHolidaysAndDate = holidaysJSON.find((holidaysAndDate) =>
    holidaysAndDate.holidays.find((holiday) => holiday.id === id),
  )
  if (!currentHolidaysAndDate) return null
  const currentHoliday = currentHolidaysAndDate.holidays.find((holiday) => holiday.id === id)
  if (!currentHoliday) return null
  const [holidayConverted] = convertHolidayFromJsonToHoliday([currentHoliday], locale)
  return holidayConverted
}

export const getNextDateByHolidayDate = (date: HolidayDate, locale: Locales) => {
  const holidayWithDateIndex = holidaysJSON.findIndex(
    (holidayWithNumber) =>
      holidayWithNumber.date.day === date.day && holidayWithNumber.date.month === date.month,
  )
  const holidaysWithDateLength = holidaysJSON.length
  const prevHolidaysAndDate =
    holidaysJSON[(holidayWithDateIndex + holidaysWithDateLength - 1) % holidaysWithDateLength]

  const nextHolidaysAndDate = holidaysJSON[(holidayWithDateIndex + 1) % holidaysWithDateLength]
  return {
    prevHolidaysAndDate: {
      date: prevHolidaysAndDate.date,
      holidays: convertHolidayFromJsonToHoliday(prevHolidaysAndDate.holidays, locale),
    },
    nextHolidaysAndDate: {
      date: nextHolidaysAndDate.date,
      holidays: convertHolidayFromJsonToHoliday(nextHolidaysAndDate.holidays, locale),
    },
    currentHolidaysAndDate: {
      date: holidaysJSON[holidayWithDateIndex].date,
      holidays: convertHolidayFromJsonToHoliday(
        holidaysJSON[holidayWithDateIndex].holidays,
        locale,
      ),
    },
  }
}

export const getCalendarEventsTextForDay = (
  holidaysWithDateJson: HolidaysWithDateJSON,
  locale: Locales,
): string =>
  holidaysWithDateJson.holidays.slice(0, 4).reduce((eventsText, holiday) => {
    const [convertedHoliday] = convertHolidayFromJsonToHoliday([holiday], locale)
    return `${eventsText}${eventsText ? '\n' : ''}•${convertedHoliday.name}`
  }, '')
