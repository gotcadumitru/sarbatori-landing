import classNames from 'classnames'
import type { FC, PropsWithChildren } from 'react'
import { CSSTransition } from 'react-transition-group'
import classes from './circleShape.module.css'
import './circleShapeAnim.css'

export enum CircleShapePosition {
  TOP_LEFT = 'TOP_LEFT',
  TOP_RIGHT = 'TOP_RIGHT',
  BOTTOM_LEFT = 'BOTTOM_LEFT',
  BOTTOM_RIGHT = 'BOTTOM_RIGHT',
}

export interface CircleShapeProps {
  className?: string
  position?: CircleShapePosition
  isDisplayed?: boolean
}

export const CircleShape: FC<PropsWithChildren<CircleShapeProps>> = ({
  className,
  position,
  isDisplayed,
}) => (
  <CSSTransition in={isDisplayed} timeout={500} classNames='circle-anim'>
    <div
      className={classNames(classes.circleShape, className, {
        [classes.circleShapeTopRight]: position === CircleShapePosition.TOP_RIGHT,
        [classes.circleShapeTopLeft]: position === CircleShapePosition.TOP_LEFT,
        [classes.circleShapeBottomRight]: position === CircleShapePosition.BOTTOM_RIGHT,
        [classes.circleShapeBottomLeft]: position === CircleShapePosition.BOTTOM_LEFT,
      })}
    />
  </CSSTransition>
)
