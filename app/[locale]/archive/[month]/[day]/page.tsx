import { getHolidaysByDayAndMonthParams, HolidayPageParams } from '@/enteties/holiday'
import { HolidaysList } from '@/features/HolidaysList'

import { LocaleParams, PropsWithParams } from '@/shared/config/i18n/types'
import NotFound from '@/widgets/NotFound'
import { FC } from 'react'

const Page: FC<PropsWithParams<LocaleParams & HolidayPageParams>> = ({ params }) => {
  const holidays = getHolidaysByDayAndMonthParams(params)
  if (!holidays) return <NotFound />

  return <HolidaysList params={params} holidaysWithDate={holidays} />
}
export default Page
