import { SearchHolidayItem } from '@/features/SearchInputWithIcon'
import holidaysJSON from '@/holidaysDatabase.json'
import { Locales } from '@/shared/config/i18n/consts'
import { LocaleParams } from '@/shared/config/i18n/types'
import { monthsWithNumber } from '@/shared/defaults/dates/dates'
import compareTwoStrings from '@/shared/lib/utils/compareTwoStrings'
import {
  Holiday,
  HolidayDate,
  HolidayJSON,
  HolidayPageParams,
  HolidaysWithDate,
  HolidaysWithDateJSON,
} from '../types/holidayTypes'

export const getHolidaysWithDate = ():HolidaysWithDateJSON[] => holidaysJSON as HolidaysWithDateJSON[]

export const getAllHolidays = () =>
  getHolidaysWithDate().reduce(
    (holidays, holidaysWithDate) => [...holidays, ...holidaysWithDate.holidays],
    [] as HolidayJSON[],
  )

export const convertHolidayFromJsonToHoliday = (
  holidaysFromJson: HolidayJSON[],
  locale: Locales,
): Holiday[] =>
  holidaysFromJson.map((holiday) => ({
    name: holiday[`name${locale}`] || holiday.nameen || holiday.nameru,
    description: holiday[`description${locale}`] || holiday.nameen || holiday.nameru,
    shortDescription: holiday[`shortDescription${locale}`] || holiday.nameen || holiday.nameru,
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
  const month = monthsWithNumber.find((m) => m.number === monthNumberLocal)!
  return {
    monthNameForUrlUse: month.name[locale],
    monthNameForDisplay: locale === Locales.ru ? month.name.ruKiril : month.name[locale],
  }
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
  const holidaysAndDate = getHolidaysWithDate().find(
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
  const currentHolidaysAndDate = getHolidaysWithDate().find((holidaysAndDate) =>
    holidaysAndDate.holidays.find((holiday) => holiday.id === id),
  )
  if (!currentHolidaysAndDate) return null
  const currentHoliday = currentHolidaysAndDate.holidays.find((holiday) => holiday.id === id)
  if (!currentHoliday) return null
  const [holidayConverted] = convertHolidayFromJsonToHoliday([currentHoliday], locale)
  return holidayConverted
}

export const getNextDateByHolidayDate = (date: HolidayDate, locale: Locales) => {
  const holidayWithDateIndex = getHolidaysWithDate().findIndex(
    (holidayWithNumber) =>
      holidayWithNumber.date.day === date.day && holidayWithNumber.date.month === date.month,
  )
  const holidaysWithDateLength = getHolidaysWithDate().length
  const prevHolidaysAndDate =
    getHolidaysWithDate()[(holidayWithDateIndex + holidaysWithDateLength - 1) % holidaysWithDateLength]

  const nextHolidaysAndDate = getHolidaysWithDate()[(holidayWithDateIndex + 1) % holidaysWithDateLength]
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
      date: getHolidaysWithDate()[holidayWithDateIndex].date,
      holidays: convertHolidayFromJsonToHoliday(
        getHolidaysWithDate()[holidayWithDateIndex].holidays,
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

export const searchHolidays = (searchValue: string, locale: Locales): SearchHolidayItem[] => {
  const allHolidaysConverted = convertHolidayFromJsonToHoliday(
      getHolidaysWithDate().reduce(
      (holidays, holidaysWithDate) => [...holidays, ...holidaysWithDate.holidays],
      [] as HolidayJSON[],
    ),
    locale,
  )

  return allHolidaysConverted
    .map((holiday) => ({
      name: holiday.name,
      id: holiday.id,
      similarityPercentage: compareTwoStrings(searchValue, holiday.name),
    }))
    .sort((holiday1, holiday2) => holiday2.similarityPercentage - holiday1.similarityPercentage)
    .filter((holiday, index) => holiday.similarityPercentage && index < 16)
    .map(({ similarityPercentage, ...holiday }) => holiday)
}
