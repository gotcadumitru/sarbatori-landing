import { HolidaysList } from '@/features/HolidaysList'
import holidays from '@/jsonObj.json'
import NotFound from '@/widgets/NotFound'
import { FC } from 'react'

const months = [
  {
    number: '01',
    name: {
      ru: 'январь',
      ro: 'ianuarie',
      en: 'january',
    },
  },
  {
    number: '02',
    name: {
      ru: 'февраль',
      ro: 'februarie',
      en: 'february',
    },
  },
  {
    number: '03',
    name: {
      ru: 'март',
      ro: 'martie',
      en: 'march',
    },
  },
  {
    number: '04',
    name: {
      ru: 'апрель',
      ro: 'aprilie',
      en: 'april',
    },
  },
  {
    number: '05',
    name: {
      ru: 'май',
      ro: 'mai',
      en: ':',
    },
  },
  {
    number: '06',
    name: {
      ru: 'июнь',
      ro: 'iunie',
      en: 'june',
    },
  },
  {
    number: '07',
    name: {
      ru: 'июль',
      ro: 'iulie',
      en: 'july',
    },
  },
  {
    number: '08',
    name: {
      ru: 'август',
      ro: 'august',
      en: 'august',
    },
  },
  {
    number: '09',
    name: {
      ru: 'сентябрь',
      ro: 'septembrie',
      en: 'september',
    },
  },
  {
    number: '10',
    name: {
      ru: 'октябрь',
      ro: 'octombrie',
      en: 'october',
    },
  },
  {
    number: '11',
    name: {
      ru: 'ноябрь',
      ro: 'noiembrie',
      en: 'november',
    },
  },
  {
    number: '12',
    name: {
      ru: 'декабрь',
      ro: 'decembrie',
      en: 'december',
    },
  },
]

type HolidayPageProps = {
  params: {
    month: string
    day: string
  }
}
const getDayOfMonthFromParams = (dayFromParams: string) => {
  if (dayFromParams.length > 1) return dayFromParams
  return `0${dayFromParams}`
}
const Page: FC<HolidayPageProps> = ({ params: { day, month } }) => {
  const holidayMonth = months.find((m) => m.name.ro === month)
  if (!holidayMonth) return <NotFound />

  const holidaysForDay = holidays.find(
    (h) => h.date.day === getDayOfMonthFromParams(day) && h.date.month === holidayMonth.number,
  )
  if (!holidaysForDay) return <NotFound />

  return <HolidaysList holidays={holidaysForDay.holidays} />
}
export default Page
