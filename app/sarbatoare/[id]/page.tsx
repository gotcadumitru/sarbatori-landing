import holidays from '@/jsonObj.json'

import { FC } from 'react'

type HolidayPageProps = {
  params: {
    id: string
  }
}
const Page: FC<HolidayPageProps> = ({ params: { id } }) => {
  const currentHoliday = holidays
    .find((h) => h.holidays.find((holiday) => holiday.id === id))
    ?.holidays.find((holiday) => holiday.id === id)

  return <p>{currentHoliday?.nameRU}</p>
}
export default Page
