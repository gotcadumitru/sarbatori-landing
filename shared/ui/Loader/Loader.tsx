import { FC } from 'react'
import classes from './Loader.module.css'

const Loader: FC = () => (
  <div className={classes.ldsRing}>
    <div />
    <div />
    <div />
    <div />
  </div>
)
export default Loader
