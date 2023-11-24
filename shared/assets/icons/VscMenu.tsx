import { FC, SVGProps } from 'react'

interface SvgComponentProps extends SVGProps<SVGSVGElement> {
  title?: string
  titleId?: string
}

const SvgComponent: FC<SvgComponentProps> = ({ title, titleId, ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='26'
    height='20'
    viewBox='0 0 26 20'
    fill='none'
    {...rest}
  >
    <g id='Vector'>
      <path
        id='Vector_2'
        d='M1 10H25M1 1H25M1 19H25'
        stroke='#202328'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
  </svg>
)
export default SvgComponent
