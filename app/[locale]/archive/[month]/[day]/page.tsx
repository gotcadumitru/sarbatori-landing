import { getHolidaysByDayAndMonthParams, HolidayPageParams } from '@/enteties/holiday'
import { HolidaysList } from '@/features/HolidaysList'

import { PropsWithLocale } from '@/shared/config/i18n/types'
import NotFound from '@/widgets/NotFound'
import { FC } from 'react'

const Page: FC<PropsWithLocale<HolidayPageParams>> = ({ params }) => {
  const holidays = getHolidaysByDayAndMonthParams(params)
  console.log(params)
  if (!holidays) return <NotFound />

  return <HolidaysList holidays={holidays} />
}
export default Page
