'use client'

import React, { useEffect } from 'react'
import { Field, Form, Formik } from 'formik'
import Input from '@/ui/Input/Input'
import Button from '@/ui/Button/Button'
import { registerRequest } from '@/store/auth/auth.types'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { toast } from 'react-toastify'
import { authActions, selectAuthRegisterState } from '@/store/auth/auth.slice'
import { STATUS } from '@/store/types'
import { redirect } from 'next/navigation'
import { AuthPageEnum } from '@/components/types/auth'

const initialState: registerRequest = {
  password: '',
  email: '',
  confirmPassword: '',
}

function Register() {
  const dispatch = useAppDispatch()
  const authRegisterState = useAppSelector(selectAuthRegisterState)

  const submitForm = (values: registerRequest) => {
    if (values.password !== values.confirmPassword) {
      toast.error('Passwords must matched')
    } else {
      dispatch(authActions.registerUser(values))
      console.log('REGISTER SUBMIT')
    }
  }

  useEffect(() => {
    if (
      authRegisterState.status === STATUS.LOADED &&
      !authRegisterState.error
    ) {
      redirect(`/auth/${AuthPageEnum.LOGIN_FORM}`)
    }
  }, [authRegisterState])

  return (
    <Formik initialValues={initialState} onSubmit={submitForm}>
      <Form className="flex flex-col space-y-4">
        <Field component={Input} label="Email" name="email" type="text" />
        <Field
          component={Input}
          label="Password"
          type="password"
          name="password"
        />
        <Field
          component={Input}
          label="Repeat Password"
          type="password"
          name="confirmPassword"
        />
        <Button type="submit" className="my-4" label="Register" />
      </Form>
    </Formik>
  )
}

export default Register
