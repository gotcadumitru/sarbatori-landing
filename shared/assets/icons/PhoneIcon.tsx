import { FC, SVGProps } from 'react'

interface SvgComponentProps extends SVGProps<SVGSVGElement> {
  title?: string
  titleId?: string
}

const SvgComponent: FC<SvgComponentProps> = ({ title, titleId, ...rest }) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...rest}
  >
    <path
      d='M24 18.9545C24 19.2614 23.9432 19.6619 23.8295 20.1562C23.7159 20.6506 23.5966 21.0398 23.4716 21.3239C23.233 21.892 22.5398 22.4943 21.392 23.1307C20.3239 23.7102 19.267 24 18.2216 24C17.9148 24 17.6136 23.9801 17.3182 23.9403C17.0227 23.9006 16.696 23.8295 16.3381 23.7273C15.9801 23.625 15.7131 23.5426 15.5369 23.4801C15.3608 23.4176 15.0455 23.3011 14.5909 23.1307C14.1364 22.9602 13.858 22.858 13.7557 22.8239C12.642 22.4261 11.6477 21.9545 10.7727 21.4091C9.32955 20.5114 7.82955 19.2841 6.27273 17.7273C4.71591 16.1705 3.48864 14.6705 2.59091 13.2273C2.04545 12.3523 1.57386 11.358 1.17614 10.2443C1.14205 10.142 1.03977 9.86364 0.869318 9.40909C0.698864 8.95455 0.582386 8.6392 0.519886 8.46307C0.457386 8.28693 0.375 8.01989 0.272727 7.66193C0.170455 7.30398 0.0994318 6.97727 0.0596591 6.68182C0.0198864 6.38636 0 6.08523 0 5.77841C0 4.73295 0.289773 3.67614 0.869318 2.60795C1.50568 1.46023 2.10795 0.767045 2.67614 0.528409C2.96023 0.403409 3.34943 0.284091 3.84375 0.170455C4.33807 0.0568182 4.73864 0 5.04545 0C5.20455 0 5.32386 0.0170455 5.40341 0.0511364C5.60795 0.119318 5.90909 0.551136 6.30682 1.34659C6.43182 1.5625 6.60227 1.86932 6.81818 2.26705C7.03409 2.66477 7.23295 3.02557 7.41477 3.34943C7.59659 3.6733 7.77273 3.97727 7.94318 4.26136C7.97727 4.30682 8.0767 4.44886 8.24148 4.6875C8.40625 4.92614 8.52841 5.12784 8.60795 5.29261C8.6875 5.45739 8.72727 5.61932 8.72727 5.77841C8.72727 6.00568 8.56534 6.28977 8.24148 6.63068C7.91761 6.97159 7.56534 7.28409 7.18466 7.56818C6.80398 7.85227 6.4517 8.15341 6.12784 8.47159C5.80398 8.78977 5.64205 9.05114 5.64205 9.25568C5.64205 9.35795 5.67045 9.4858 5.72727 9.6392C5.78409 9.79261 5.83239 9.90909 5.87216 9.98864C5.91193 10.0682 5.99148 10.2045 6.1108 10.3977C6.23011 10.5909 6.29545 10.6989 6.30682 10.7216C7.17045 12.2784 8.15909 13.6136 9.27273 14.7273C10.3864 15.8409 11.7216 16.8295 13.2784 17.6932C13.3011 17.7045 13.4091 17.7699 13.6023 17.8892C13.7955 18.0085 13.9318 18.0881 14.0114 18.1278C14.0909 18.1676 14.2074 18.2159 14.3608 18.2727C14.5142 18.3295 14.642 18.358 14.7443 18.358C14.9489 18.358 15.2102 18.196 15.5284 17.8722C15.8466 17.5483 16.1477 17.196 16.4318 16.8153C16.7159 16.4347 17.0284 16.0824 17.3693 15.7585C17.7102 15.4347 17.9943 15.2727 18.2216 15.2727C18.3807 15.2727 18.5426 15.3125 18.7074 15.392C18.8722 15.4716 19.0739 15.5938 19.3125 15.7585C19.5511 15.9233 19.6932 16.0227 19.7386 16.0568C20.0227 16.2273 20.3267 16.4034 20.6506 16.5852C20.9744 16.767 21.3352 16.9659 21.733 17.1818C22.1307 17.3977 22.4375 17.5682 22.6534 17.6932C23.4489 18.0909 23.8807 18.392 23.9489 18.5966C23.983 18.6761 24 18.7955 24 18.9545Z'
      fill='#5451D6'
    />
  </svg>
)
export default SvgComponent
