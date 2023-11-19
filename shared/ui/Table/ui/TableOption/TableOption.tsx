import classNames from 'classnames'
import type { FC, PropsWithChildren } from 'react'
import Button, { ButtonCategoryType, ButtonConditionalPropsType } from '@/shared/ui/Button'

type TableOptionProps = {
  className?: string
} & ButtonConditionalPropsType

export const TableOption: FC<PropsWithChildren<TableOptionProps>> = ({
  className,
  children,
  ...props
}) => (
  <Button
    category={ButtonCategoryType.BUTTON}
    className={classNames('button--empty table__option', className)}
    {...props}
  >
    {children}
  </Button>
)
