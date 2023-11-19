import { FC, SVGProps } from 'react'

interface SvgComponentProps extends SVGProps<SVGSVGElement> {
  title?: string
  titleId?: string
}

const SvgComponent: FC<SvgComponentProps> = ({ title, titleId, ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={17}
    fill='none'
    aria-labelledby={titleId}
    {...rest}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#6F7A8B'
      fillOpacity={0.75}
      d='M14.355 4.884c.01.142.01.284.01.426 0 4.335-3.299 9.33-9.33 9.33A9.267 9.267 0 0 1 0 13.168c.264.03.518.04.792.04a6.568 6.568 0 0 0 4.07-1.4 3.285 3.285 0 0 1-3.065-2.274c.203.03.406.05.62.05.294 0 .588-.04.862-.111A3.28 3.28 0 0 1 .65 6.255v-.041c.437.244.945.396 1.483.416A3.277 3.277 0 0 1 .67 3.9c0-.61.162-1.168.447-1.656a9.321 9.321 0 0 0 6.761 3.432 3.702 3.702 0 0 1-.081-.751 3.278 3.278 0 0 1 3.28-3.28c.943 0 1.796.396 2.395 1.036a6.457 6.457 0 0 0 2.081-.792 3.27 3.27 0 0 1-1.441 1.807c.66-.07 1.3-.254 1.888-.507a7.048 7.048 0 0 1-1.645 1.695Z'
    />
  </svg>
)
export default SvgComponent
