import { Holiday } from '@/enteties/holiday'
import { CalendarCarousel } from '@/features/CalendarCarousel'
import { HolidayCard } from '@/shared/ui/HolidayCard'
import { FC } from 'react'

type HolidaysListProps = {
  holidays: Holiday[]
}
export const HolidaysList: FC<HolidaysListProps> = ({ holidays }) => (
  <>
    <CalendarCarousel />
    <div className='container'>
      {holidays.map((holiday) => (
        <HolidayCard key={holiday.id} holiday={holiday} />
      ))}
    </div>
  </>
)
