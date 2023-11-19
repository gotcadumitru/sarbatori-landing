'use client'

import {
  checkIfExistErrors,
  FormDataField,
  ValidationRules,
} from '@/shared/lib/utils/checkIfExistErrors'
import Button, { ButtonCategoryType } from '@/shared/ui/Button'
import Form from '@/shared/ui/Form'
import Input from '@/shared/ui/Input'
import axios from 'axios'
import { ChangeEvent, useState } from 'react'
import { toast } from 'react-toastify'
import classes from './contact.module.css'

export type VehicleDocumentFormDataType = {
  name: string
  email: string
  telephone: string
  message: string
}

export type VehicleDocumentFormDataFullType = {
  [K in keyof VehicleDocumentFormDataType]: FormDataField<VehicleDocumentFormDataType[K]>
}
const feedbackFormDataInitialValues: VehicleDocumentFormDataFullType = {
  name: {
    value: '',
    errorMessage: '',
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
  email: {
    value: '',
    errorMessage: '',
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
  telephone: {
    value: '',
    errorMessage: '',
    validations: [],
  },
  message: {
    value: '',
    errorMessage: '',
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
}

const Feedback = () => {
  const [feedbackFormData, setFeedbackFormData] = useState(feedbackFormDataInitialValues)
  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    const name = event.target.name as keyof typeof feedbackFormData

    setFeedbackFormData({
      ...feedbackFormData,
      [name]: {
        ...feedbackFormData[name],
        value,
        errorMessage: '',
      },
    })
  }

  const onSubmit = async () => {
    const { formFieldsWithErrors, isErrors } = checkIfExistErrors(feedbackFormData)
    if (isErrors) return setFeedbackFormData(formFieldsWithErrors)
    try {
      const response = await axios.post('/info/feedback/api', {
        name: feedbackFormData.name,
        email: feedbackFormData.email,
        telephone: feedbackFormData.telephone,
        message: feedbackFormData.message,
      })
      console.log(response)
      toast.success('Un email cu pasii ce trebuie de urmat a fost trimis la adresa')
    } catch (err) {
      // if (isFirebaseError(err)) {
      //   formFieldsWithErrors.email.errorMessage = err.message
      //   toast.error(err.message)
      // }
    }
    setFeedbackFormData(feedbackFormDataInitialValues)
  }
  return (
    <div className={classes.contact}>
      <p>
        Vă încurajăm să împărtășiți experiența dvs. cu noi și să ne spuneți cum putem să vă servim
        și să vă ajutăm mai bine.
      </p>
      <Form onSubmit={onSubmit}>
        <Input
          valueFullType={feedbackFormData.name}
          name='name'
          type='name'
          onChange={onInputChange}
          label='Nume'
        />
        <Input
          valueFullType={feedbackFormData.email}
          name='email'
          type='email'
          onChange={onInputChange}
          label='Adresa de email'
        />
        <Input
          valueFullType={feedbackFormData.telephone}
          name='telephone'
          type='tel'
          onChange={onInputChange}
          label='Telefon'
        />
        <Input
          valueFullType={feedbackFormData.message}
          name='message'
          type='text'
          onChange={onInputChange}
          label='Mesaj'
        />
        <Button category={ButtonCategoryType.BUTTON} type='submit'>
          Trimite mesajul
        </Button>
      </Form>
    </div>
  )
}
export default Feedback
