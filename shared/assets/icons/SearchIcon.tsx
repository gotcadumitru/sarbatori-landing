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
    <g id='fe:search'>
      <g id='feSearch0'>
        <g id='feSearch1'>
          <path
            id='feSearch2'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M16.3248 14.8992L21.7048 20.2792C21.8939 20.4685 22 20.7251 22 20.9926C21.9999 21.2601 21.8935 21.5166 21.7043 21.7057C21.515 21.8948 21.2584 22.001 20.9909 22.0009C20.7234 22.0008 20.4669 21.8945 20.2778 21.7052L14.8978 16.3252C13.2895 17.5709 11.267 18.1571 9.24189 17.9646C7.21674 17.7721 5.341 16.8153 3.99625 15.2888C2.6515 13.7624 1.93876 11.781 2.00302 9.74778C2.06728 7.71451 2.90372 5.78209 4.34217 4.34364C5.78063 2.90518 7.71305 2.06875 9.74631 2.00448C11.7796 1.94022 13.761 2.65296 15.2874 3.99771C16.8138 5.34246 17.7706 7.21821 17.9631 9.24336C18.1556 11.2685 17.5694 13.2909 16.3238 14.8992H16.3248ZM9.99977 16.0002C11.5911 16.0002 13.1172 15.3681 14.2424 14.2429C15.3676 13.1177 15.9998 11.5915 15.9998 10.0002C15.9998 8.40893 15.3676 6.88281 14.2424 5.75759C13.1172 4.63237 11.5911 4.00023 9.99977 4.00023C8.40847 4.00023 6.88235 4.63237 5.75713 5.75759C4.63191 6.88281 3.99977 8.40893 3.99977 10.0002C3.99977 11.5915 4.63191 13.1177 5.75713 14.2429C6.88235 15.3681 8.40847 16.0002 9.99977 16.0002Z'
            fill='#202328'
          />
        </g>
      </g>
    </g>
  </svg>
)

export default SvgComponent