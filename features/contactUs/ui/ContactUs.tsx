'use client'

import Button, { ButtonTheme } from '@/shared/ui/Button'
import Input from '@/shared/ui/Input'
import classNames from 'classnames'
import { FC, PropsWithChildren, useState } from 'react'
import classes from '../styles/contactUs.module.css'

interface FooterColumnProps {
  className?: string
}

export const ContactUs: FC<PropsWithChildren<FooterColumnProps>> = ({ className }) => {
  const [emailAddress, setEmailAddress] = useState('')
  return (
    <div className={classNames(classes.contactUs, className)}>
      <Input
        onChange={(e) => setEmailAddress(e.target.value)}
        value={emailAddress}
        placeholder='Adresa de email'
      />
      <Button theme={ButtonTheme.OUTLINE_BLUE}>Înscrie-te</Button>
    </div>
  )
}
