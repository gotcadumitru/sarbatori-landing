import { CalendarCarousel } from '@/features/CalendarCarousel'
import holidays from '@/jsonObj.json'
import { HolidayCard } from '@/shared/ui/HolidayCard/ui/HolidayCard'
import classes from './page.module.css'

const Home = () => {
  return (
    <main className={classes.main}>
      <CalendarCarousel />
      <div className='container'>
        {holidays[0].holidays.slice(0, 5).map((holiday) => (
          <HolidayCard key={holiday.id} holiday={holiday} />
        ))}
      </div>
    </main>
  )
}
export default Home
