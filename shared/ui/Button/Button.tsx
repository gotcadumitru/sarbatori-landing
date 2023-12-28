import { Link } from '@/navigation'
import classNames from 'classnames'
import { FC, PropsWithChildren } from 'react'
import './button.scss'
import {
  ButtonCategoryType,
  ButtonConditionalPropsType,
  ButtonMargin,
  ButtonTheme,
} from './button.types'

const Button: FC<PropsWithChildren<ButtonConditionalPropsType>> = ({
  className,
  margin,
  theme,
  children,
  icon,
  ...props
}) => {
  const buttonClassName = classNames('button', className, {
    'button--top': margin === ButtonMargin.TOP,
    'button--bottom': margin === ButtonMargin.BOTTOM,
    'button--left': margin === ButtonMargin.LEFT,
    'button--right': margin === ButtonMargin.RIGHT,
    'button--empty': theme === ButtonTheme.EMPTY,
    'button--outline button--outline--red': theme === ButtonTheme.OUTLINE_RED,
    'button--outline button--outline--blue': theme === ButtonTheme.OUTLINE_BLUE,
    'button--link':
      ButtonCategoryType.LINK === props.category ||
      ButtonCategoryType.EXTERNAL_LINK === props.category,
  })

  if (props.category === ButtonCategoryType.LINK) {
    return (
      <Link className={buttonClassName} {...props}>
        {icon}
        <span>{children}</span>
      </Link>
    )
  }

  if (props.category === ButtonCategoryType.EXTERNAL_LINK) {
    return (
      <a className={buttonClassName} {...props}>
        {icon}
        <span>{children}</span>
      </a>
    )
  }

  return (
    // eslint-disable-next-line react/button-has-type
    <button className={buttonClassName} {...props}>
      {icon}
      <span>{children}</span>
    </button>
  )
}
export default Button
