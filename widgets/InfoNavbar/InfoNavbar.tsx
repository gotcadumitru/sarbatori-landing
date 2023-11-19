import { InfoNavLink } from '@/shared/ui/InfoNavLink'
import { infoNavbarUrls } from './infoNavbarConsts'
import classes from './InfoNavbar.module.css'

const InfoNavbar = () => (
  <div className={classes.navbar}>
    <div className={classes.title}>Information about us</div>
    <ul>
      {infoNavbarUrls.map((url) => (
        <InfoNavLink key={url.href} slug={url.href}>
          {url.text}
        </InfoNavLink>
      ))}
    </ul>
  </div>
)
export default InfoNavbar
