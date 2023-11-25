import { roboto } from '@/app/fonts'
import { Holiday } from '@/enteties/holiday'
import ShareIcon from '@/shared/assets/icons/ShareIcon'
import classNames from 'classnames'
import Link from 'next/link'
import { FC } from 'react'
import classes from '../styles/holidayCard.module.css'

type HolidayCardProps = {
  holiday: Holiday
}
export const HolidayCard: FC<HolidayCardProps> = ({ holiday }) => (
  <div className={classes.holidayCard}>
    {holiday.imageURL && (
      <div
        className={classes.holidayCardImage}
        style={{
          backgroundImage: `url(${holiday.imageURL})`,
        }}
      />
    )}
    <div className={classes.holidayCardBody}>
      <div className={classes.holidayCardTitle}>
        <Link href={`/sarbatoare/${holiday.id}`}>{holiday.nameRU}</Link>
        <ShareIcon />
      </div>
      <div className={classNames(roboto.className, classes.holidayCardDescription)}>
        {holiday.nameRU} {holiday.nameRU} {holiday.nameRU} {holiday.nameRU}
      </div>
    </div>
  </div>
)
