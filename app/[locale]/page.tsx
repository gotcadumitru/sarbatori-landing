import { HolidaysList } from '@/features/HolidaysList'
import holidays from '@/jsonObj.json'
import classes from './page.module.css'

const Home = () => (
  <main className={classes.main}>
    <HolidaysList holidays={holidays[0].holidays.slice(0, 5)} />
  </main>
)
export default Home
