import { Link } from '@/navigation'
import AiOutlineLeft from '@/shared/assets/icons/AiOutlineLeft'
import AiOutlineRight from '@/shared/assets/icons/AiOutlineRight'
import classNames from 'classnames'
import { FC } from 'react'
import classes from '../styles/calendarCarousel.module.css'

export const CalendarCarousel: FC = () => (
  <div className={classNames(classes.calendarCarousel, 'container')}>
    <AiOutlineLeft className={classes.leftIcon} />
    <Link className={classes.date} href='/calendar'>
      Date
    </Link>
    <AiOutlineRight className={classes.rightIcon} />
  </div>
)
