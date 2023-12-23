import type { ShareIconType } from '@/features/Share/ui/Share/Share'
import Facebook from '@/shared/assets/icons/Facebook'
import Modal from '@/shared/ui/Modal/Modal'
import { FC } from 'react'
import classes from '../../styles/share.module.css'

interface ShareModalType extends ShareIconType {
  isDisplayed: boolean
  setIsDisplayed: (isDisplayed: boolean) => void
}

export const ShareModal: FC<ShareModalType> = ({ isDisplayed, setIsDisplayed, title, url }) => (
  <Modal onClose={() => setIsDisplayed(false)} isOpen={isDisplayed} className={classes.searchModal}>
    <h2 className='modal__title'>{title}</h2>
    <div className='modal__body'>
      <a
        className='facebook'
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
        target='blank'
        title='facebook'
      >
        <Facebook />
      </a>
    </div>
  </Modal>
)
