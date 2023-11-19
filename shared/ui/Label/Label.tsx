import classNames from 'classnames'
import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import InfoIcon from '../../assets/icons/InfoIcon'
import Popup from '../Popup'
import './label.scss'
import type { LabelProps } from './label.types'

const Label: FC<LabelProps> = ({ className, inputId, infoText, label, ...props }) => (
  <label htmlFor={inputId} className={classNames('label', className)} {...props}>
    {label}{' '}
    {infoText && (
      <Popup
        skeleton={<Skeleton width={15} height={15} circle />}
        referenceElement={<InfoIcon data-testid='InfoIcon' className='label__info-icon' />}
        popupElement={<div className='label__info-text'>{infoText}</div>}
      />
    )}
  </label>
)
export default Label
