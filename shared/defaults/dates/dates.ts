import { Locales } from '@/shared/config/i18n/consts'

export type MonthWithNumber = {
  number: string
  name: {
    ruKiril: string
    [Locales.en]: string
    [Locales.ro]: string
    [Locales.ru]: string
  }
}
export const monthsWithNumber: MonthWithNumber[] = [
  {
    number: '01',
    name: {
      ruKiril: 'январь',
      [Locales.ru]: 'yanvar',
      [Locales.ro]: 'ianuarie',
      [Locales.en]: 'january',
    },
  },
  {
    number: '02',
    name: {
      ruKiril: 'февраль',
      [Locales.ru]: 'fevral',
      [Locales.ro]: 'februarie',
      [Locales.en]: 'february',
    },
  },
  {
    number: '03',
    name: {
      ruKiril: 'март',
      [Locales.ru]: 'mart',
      [Locales.ro]: 'martie',
      [Locales.en]: 'march',
    },
  },
  {
    number: '04',
    name: {
      ruKiril: 'апрель',
      [Locales.ru]: 'aprel',
      [Locales.ro]: 'aprilie',
      [Locales.en]: 'april',
    },
  },
  {
    number: '05',
    name: {
      ruKiril: 'май',
      [Locales.ru]: 'may',
      [Locales.ro]: 'mai',
      [Locales.en]: ':',
    },
  },
  {
    number: '06',
    name: {
      ruKiril: 'июнь',
      [Locales.ru]: 'iyun',
      [Locales.ro]: 'iunie',
      [Locales.en]: 'june',
    },
  },
  {
    number: '07',
    name: {
      ruKiril: 'июль',
      [Locales.ru]: 'iyul',
      [Locales.ro]: 'iulie',
      [Locales.en]: 'july',
    },
  },
  {
    number: '08',
    name: {
      ruKiril: 'август',
      [Locales.ru]: 'avgust',
      [Locales.ro]: 'august',
      [Locales.en]: 'august',
    },
  },
  {
    number: '09',
    name: {
      ruKiril: 'сентябрь',
      [Locales.ru]: 'sentyabr',
      [Locales.ro]: 'septembrie',
      [Locales.en]: 'september',
    },
  },
  {
    number: '10',
    name: {
      ruKiril: 'октябрь',
      [Locales.ru]: 'oktyabr',
      [Locales.ro]: 'octombrie',
      [Locales.en]: 'october',
    },
  },
  {
    number: '11',
    name: {
      ruKiril: 'ноябрь',
      [Locales.ru]: 'noyabr',
      [Locales.ro]: 'noiembrie',
      [Locales.en]: 'november',
    },
  },
  {
    number: '12',
    name: {
      ruKiril: 'декабрь',
      [Locales.ru]: 'dekabr',
      [Locales.ro]: 'decembrie',
      [Locales.en]: 'december',
    },
  },
]
export type MonthsNames = (typeof monthsWithNumber)[number]['name']['en']
