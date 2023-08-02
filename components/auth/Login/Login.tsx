import React, { useEffect } from 'react'
import {FormikProvider, useFormik, Field, Form} from 'formik'
import Button from '@/ui/Button/Button'
import Input from '@/ui/Input/Input'

interface IInitialState {
  password: string
  email: string
}

function Login() {
  /*  const dispatch = useDispatch<AppDispatch>() */
  /* const authLoginState = useSelector(selectAuthLoginState) */
  const initialState: IInitialState = {
    password: '',
    email: '',
  }

  const submitForm = (values: IInitialState) => {
    console.log(values)
    /* dispatch(authActions.loginUser(values)) */
  }

  const form = useFormik<IInitialState>({
    initialValues: initialState,
    onSubmit: submitForm,
  })

  useEffect(() => {
    console.log(form.values)
  }, [form])

  return (
    <FormikProvider value={form}>
      <Form className="flex flex-col">
        <Field component={Input} label="Email" name="email" type="text" />
        <Field
          component={Input}
          className="mb-2"
          label="Password"
          type="password"
          name="password"
        />
        <Field
          component={Button}
          onClick={() => submitForm(form.values)}
          className="my-2"
          label="Continue with email"
        />

        <div className="container flex text-center content-around">
          <div className="container border border-slate-400 h-0 mx-2 my-auto" />
          <span className="text-slate-400">or</span>
          <div className="container border border-slate-400 h-0 mx-2 my-auto" />
        </div>

        <Button className="my-2" icon label="Continue with Google" />
      </Form>
    </FormikProvider>
  )
}

export default Login
