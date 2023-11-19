'use client'

import Button, { ButtonCategoryType, ButtonTheme } from '@/shared/ui/Button'
import classNames from 'classnames'
import { FC, useCallback, useState } from 'react'
import classes from './accordionList.module.css'
import type { AccordionListPropsType } from './accordionList.types'

const AccordionList: FC<AccordionListPropsType> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null)
  const onItemClick = useCallback(
    (isActive: boolean, index: number) => setSelectedItem(isActive ? null : index),
    [selectedItem],
  )

  return (
    <div className={classes.accordion}>
      {items.map((item, index) => {
        const isActive = selectedItem === index
        return (
          <div key={index} className={classes.item}>
            <Button
              onClick={() => onItemClick(isActive, index)}
              theme={ButtonTheme.EMPTY}
              category={ButtonCategoryType.BUTTON}
              className={classes.collapseIcon}
            >
              {isActive ? '-' : '+'}
            </Button>
            <div>
              <Button
                onClick={() => onItemClick(isActive, index)}
                category={ButtonCategoryType.BUTTON}
                theme={ButtonTheme.EMPTY}
                className={classes.title}
              >
                {item.title}
              </Button>
              {
                <div
                  className={classNames(classes.description, {
                    [classes.descriptionActive]: isActive,
                  })}
                >
                  {item.description}
                </div>
              }
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default AccordionList
