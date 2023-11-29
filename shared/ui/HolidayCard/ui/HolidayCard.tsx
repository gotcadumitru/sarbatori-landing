import { roboto } from '@/app/fonts'
import { Holiday } from '@/enteties/holiday'
import ShareIcon from '@/shared/assets/icons/ShareIcon'
import { AppRoutes } from '@/shared/config/i18n/routes'
import NavigationLink from '@/shared/ui/NavigationLink'
import classNames from 'classnames'
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
        <NavigationLink
          href={{ pathname: `${AppRoutes.holiday}/[id]`, params: { id: holiday.id } } as any}
        >
          {holiday.name}
        </NavigationLink>
        <ShareIcon />
      </div>
      <div className={classNames(roboto.className, classes.holidayCardDescription)}>
        {holiday.description}
      </div>
    </div>
  </div>
)
