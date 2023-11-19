import classNames from 'classnames'
import { FC, PropsWithChildren, ReactNode } from 'react'
import classes from './Footer.module.css'

interface FooterColumnProps {
  className?: string
  title: ReactNode
}

export const FooterColumn: FC<PropsWithChildren<FooterColumnProps>> = ({
  className,
  title,
  children,
}) => {
  return (
    <div className={classNames(classes.footerColumn, className)}>
      <div className={classes.footerColumnTitle}>{title}</div>
      <div className={classes.footerColumnDescription}>{children}</div>
    </div>
  )
}
