import { InfoPageContainer } from '@/shared/ui/InfoPageContainer/InfoPageContainer'
import classNames from 'classnames'
import type { Metadata } from 'next'
import { FC, PropsWithChildren } from 'react'
import InfoNavbar from '../../widgets/InfoNavbar'
import classes from './layout.module.css'

export const metadata: Metadata = {
  title: 'CarMaster',
  description: 'Jurnalul călătoriilor tale pe șosea, unde fiecare kilometru are o poveste.',
}

const InfoLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className={classNames(classes.layout, 'container')}>
    <InfoNavbar />
    <InfoPageContainer>{children}</InfoPageContainer>
  </div>
)

export default InfoLayout
