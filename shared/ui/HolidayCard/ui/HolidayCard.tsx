import { roboto } from '@/app/fonts'
import { Holiday } from '@/enteties/holiday'
import Share from '@/features/Share'
import { AppParams, AppRoutes } from '@/shared/config/i18n/routes'
import { PropsWithLocale } from '@/shared/config/i18n/types'
import NavigationLink from '@/shared/ui/NavigationLink'
import classNames from 'classnames'
import { FC } from 'react'
import classes from '../styles/holidayCard.module.css'

type HolidayCardProps = {
  holiday: Holiday
}

export const HolidayCard: FC<PropsWithLocale<HolidayCardProps>> = ({ holiday, params }) => {
  const description = holiday.shortDescription || holiday.description
  return (
    <div className={classes.holidayCard}>
      {holiday.imageURL && (
        <div
          className={classes.holidayCardImage}
          style={{
            backgroundImage: `url(/images/${holiday.imageURL})`,
          }}
        />
      )}
      <div className={classes.holidayCardBody}>
        <div className={classes.holidayCardTitle}>
          <NavigationLink
            href={
              {
                pathname: `${AppRoutes.holiday}/${AppParams.id}`,
                params: { id: holiday.id },
              } as any
            }
          >
            {holiday.name}
          </NavigationLink>
          <Share holiday={holiday} params={params} />
        </div>
        {description && (
          <div className={classNames(roboto.className, classes.holidayCardDescription)}>
            {description}
          </div>
        )}
      </div>
    </div>
  )
}
