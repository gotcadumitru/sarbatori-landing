import holidaysJSON from '@/jsonObj.json'
import { Locales } from '@/shared/config/i18n/consts'
import { PropsWithLocale } from '@/shared/config/i18n/types'
import { monthsWithNumber } from '@/shared/defaults/dates/dates'
import { Holiday, HolidayJSON, HolidayPageParams } from '../types/holidayTypes'

export const convertHolidayFromJsonToHoliday = (
  holidaysFromJson: HolidayJSON[],
  locale: Locales,
): Holiday[] =>
  holidaysFromJson.map((holiday) => ({
    name: holiday[`name${locale}`],
    description: holiday[`description${locale}`],
    imageURL: holiday.imageURL,
    id: holiday.id,
    timeAgo: holiday.timeAgo,
  }))

export const getDayOfMonth = (day: string | number) => {
  const dayLocal = day.toString()
  if (dayLocal.length > 1) return dayLocal
  return `0${dayLocal}`
}
export const getHolidaysByDayAndMonthParams = ({
  day,
  month,
  locale,
}: PropsWithLocale<HolidayPageParams>['params']) => {
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
  return convertHolidayFromJsonToHoliday(holidaysAndDate.holidays, locale)
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
