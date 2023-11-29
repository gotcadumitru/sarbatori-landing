export type HolidayJSON = {
  timeAgo: string
  nameru: string
  nameen: string
  namero: string
  descriptionru: string
  descriptionen: string
  descriptionro: string
  imageURL: string
  id: string
}

export type Holiday = {
  timeAgo: string
  name: string
  description: string
  imageURL: string
  id: string
}

export type HolidayPageParams = {
  month: string
  day: string
}
