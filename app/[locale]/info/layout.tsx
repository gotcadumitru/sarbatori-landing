import { InfoPageContainer } from '@/shared/ui/InfoPageContainer/InfoPageContainer'
import InfoNavbar from '@/widgets/InfoNavbar'
import classNames from 'classnames'
import type { Metadata } from 'next'
import { FC, PropsWithChildren } from 'react'
import classes from './layout.module.css'

export const metadata: Metadata = {
  title: 'Sarbatori',
  description: 'Jurnalul călătoriilor tale pe șosea, unde fiecare kilometru are o poveste.',
}

const InfoLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className={classNames(classes.layout, 'container')}>
    <InfoNavbar />
    <InfoPageContainer>{children}</InfoPageContainer>
  </div>
)

export default InfoLayout
