import Lottie from 'lottie-react'
import { FC } from 'react'
import blackCar from './blueCar.json'

const BlackCar: FC = () => (
  <div
    style={{
      margin: 'auto',
      height: '100px',
      width: '150px',
      position: 'relative',
    }}
  >
    <Lottie
      animationData={blackCar}
      loop
      style={{
        position: 'absolute',
        height: '300px',
        width: '300px',
        top: '50%',
        left: '50%',
        transform: 'translateY(-50%) translateX(-50%)',
      }}
    />
  </div>
)
export default BlackCar
