import CarMasterCar from '@/shared/assets/icons/CarMasterCar'
import FacebookIcon from '@/shared/assets/icons/Facebook'
import InstagramIcon from '@/shared/assets/icons/Instagram'
import classNames from 'classnames'
import Link from 'next/link'
import { FC } from 'react'
import classes from './Header.module.css'

interface HeaderProps {
  className?: string
}

const urls = [
  {
    text: 'Termeni și condiții',
    href: '/termeni-si-conditii',
  },
  {
    text: 'Politica de confidențialitate',
    href: '/politica-de-confidentialitate',
  },
  {
    text: 'Cookies',
    href: '/cookies',
  },
  {
    text: 'Contact',
    href: '/info/contact',
  },
]
const socialMediaUrl = [
  { href: '/Instagram', title: 'Instagram', Icon: InstagramIcon },
  { href: '/Facebook', title: 'Facebook', Icon: FacebookIcon },
]
export const Header: FC<HeaderProps> = ({ className }) => (
  <div className={classNames(classes.header, className)}>
    <div className={classNames(classes.headerContainer, 'container')}>
      <Link href='/' className={classes.logoLink}>
        <CarMasterCar className={classes.logo} />
        CarMaster
      </Link>
      <div className={classes.urlsContainer}>
        {urls.map((url) => (
          <Link className={classes.urlItem} key={url.href} href={url.href}>
            {url.text}
          </Link>
        ))}
      </div>
      <div className={classes.socialMediaContainer}>
        {socialMediaUrl.map(({ Icon, title, href }) => (
          <Link key={href} href={href} title={title}>
            <Icon title={title} />
          </Link>
        ))}
      </div>
    </div>
  </div>
)
