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

export const getHolidaysWithDate = (): HolidaysWithDateJSON[] =>
  holidaysJSON as HolidaysWithDateJSON[]

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
    url: holiday[`url${locale}`],
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

export const getHolidayByHolidayUrl = (holidayUrl: string, locale: Locales) => {
  let holiday: null | HolidayJSON = null
  getHolidaysWithDate().find((holidaysAndDate) => {
    const h = holidaysAndDate.holidays.find((holidayJson) =>
      [holidayJson.urlen, holidayJson.urlru, holidayJson.urlro].includes(holidayUrl),
    )
    if (h) holiday = h
    return h
  })
  if (!holiday) return null
  const [holidayConverted] = convertHolidayFromJsonToHoliday([holiday], locale)
  return holidayConverted
}

export const getNextDateByHolidayDate = (date: HolidayDate, locale: Locales) => {
  const holidayWithDateIndex = getHolidaysWithDate().findIndex(
    (holidayWithNumber) =>
      holidayWithNumber.date.day === date.day && holidayWithNumber.date.month === date.month,
  )
  const holidaysWithDateLength = getHolidaysWithDate().length
  const prevHolidaysAndDate =
    getHolidaysWithDate()[
      (holidayWithDateIndex + holidaysWithDateLength - 1) % holidaysWithDateLength
    ]

  const nextHolidaysAndDate =
    getHolidaysWithDate()[(holidayWithDateIndex + 1) % holidaysWithDateLength]
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

const getHolidaySearchItemForLocale = (
  holiday: HolidayJSON,
  searchValue: string,
  locale: Locales,
) => ({
  name: holiday[`name${locale}`],
  url: holiday[`url${locale}`],
  similarityPercentage: compareTwoStrings(searchValue, holiday[`name${locale}`]),
})

const removeDuplicates = (holidaysArray: SearchHolidayItem[]) =>
  holidaysArray.filter((value, index, self) => index === self.findIndex((t) => t.url === value.url))

export const searchHolidays = (searchValue: string): SearchHolidayItem[] => {
  const allHolidays = getAllHolidays()

  return removeDuplicates(
    allHolidays.reduce(
      (holidayListEveryLanguage, holiday) => [
        ...holidayListEveryLanguage,
        getHolidaySearchItemForLocale(holiday, searchValue, Locales.en),
        getHolidaySearchItemForLocale(holiday, searchValue, Locales.ro),
        getHolidaySearchItemForLocale(holiday, searchValue, Locales.ru),
      ],
      [] as SearchHolidayItem[],
    ),
  )
    .sort((holiday1, holiday2) => holiday2.similarityPercentage! - holiday1.similarityPercentage!)
    .filter((holiday, index) => holiday.similarityPercentage && index < 16)
    .map(({ similarityPercentage, ...holiday }) => holiday)
}
