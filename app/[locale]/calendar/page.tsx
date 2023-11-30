import { Calendar } from '@/features/Calendar'

import { LocaleParams, PropsWithParams } from '@/shared/config/i18n/types'
import classNames from 'classnames'
import { FC } from 'react'
import classes from './page.module.css'

const Page: FC<PropsWithParams<LocaleParams>> = ({ params }) => (
  <div className={classNames('container', classes.calendarPage)}>
    <Calendar locale={params.locale} />
  </div>
)
export default Page
