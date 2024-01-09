export type HolidayJSON = {
  timeAgo: string
  nameru: string
  nameen: string
  namero: string
  descriptionru: string
  descriptionen: string
  descriptionro: string
  shortDescriptionru: string
  shortDescriptionen: string
  shortDescriptionro: string
  imageURL: string | null
  id: string
}

export type HolidayDate = {
  day: string
  month: string
}

export type HolidaysWithDateJSON = {
  date: HolidayDate
  alsoThisDay: string[]
  holidays: HolidayJSON[]
}

export type Holiday = {
  timeAgo: string
  name: string
  description: string
  shortDescription: string
  imageURL: string | null
  id: string
}

export type HolidaysWithDate = {
  date: HolidayDate
  holidays: Holiday[]
}

export type HolidayPageParams = {
  month: string
  day: string
}
