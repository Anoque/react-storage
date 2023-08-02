import React from 'react'
import { FormikProvider, useFormik, Field, Form } from 'formik'
import Button from '@/ui/Button/Button'
import Input from '@/ui/Input/Input'
import {authActions, selectAuthLoginState} from '@/store/auth/auth.slice'
import {useAppDispatch, useAppSelector} from '@/store/hooks'
import {loginRequest} from '@/store/auth/auth.types'

function Login() {
  const dispatch = useAppDispatch()
  const authLoginState = useAppSelector(selectAuthLoginState)

  const initialState: loginRequest = {
    password: '',
    email: '',
  }

  const submitForm = (values: loginRequest) => {
    dispatch(authActions.loginUser(values))
  }

  const form = useFormik<loginRequest>({
    initialValues: initialState,
    onSubmit: submitForm,
  })

  return (
    <FormikProvider value={form}>
      <Form className="flex flex-col space-y-4">
        <Field component={Input} label="Email" name="email" type="text" />
        <Field
          component={Input}
          className="mb-2"
          label="Password"
          type="password"
          name="password"
        />

        <Button
          type="submit"
          className="my-2"
          label="Continue with email"
        />

        <div className="container flex items-center">
          <div className="container border border-slate-400 h-0 mx-2" />
          <span className="text-slate-400">or</span>
          <div className="container border border-slate-400 h-0 mx-2" />
        </div>

        <Button className="mt-2" icon label="Continue with Google" />
      </Form>
    </FormikProvider>
  )
}

export default Login
