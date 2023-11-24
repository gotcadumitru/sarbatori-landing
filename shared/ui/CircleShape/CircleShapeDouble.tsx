import classNames from 'classnames'
import type { FC } from 'react'
import { CircleShape, CircleShapePosition, CircleShapeProps } from './CircleShape'
import classes from './circleShape.module.css'

export const CircleShapeDouble: FC<CircleShapeProps> = ({ className, position }) => (
  <div
    className={classNames(classes.circleShapeDouble, className, {
      [classes.circleShapeDoubleTopRight]: position === CircleShapePosition.TOP_RIGHT,
      [classes.circleShapeDoubleTopLeft]: position === CircleShapePosition.TOP_LEFT,
      [classes.circleShapeDoubleBottomRight]: position === CircleShapePosition.BOTTOM_RIGHT,
      [classes.circleShapeDoubleBottomLeft]: position === CircleShapePosition.BOTTOM_LEFT,
    })}
  >
    <div className={classNames(classes.circleShapeDoubleContainer, className)}>
      <CircleShape className={classes.doubleShapeOne} />
      <CircleShape className={classes.doubleShapeTwo} />
    </div>
  </div>
)
