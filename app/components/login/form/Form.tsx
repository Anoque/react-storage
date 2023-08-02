import React, { useEffect } from 'react'
import { FormikProvider, useFormik, Field } from 'formik'
import Button from '../../ui/Button/Button'
import Input from '../../ui/Input/Input'

interface IInitialState {
  password: string
  email: string
}

function Form() {
  const initialState: IInitialState = {
    password: '',
    email: '',
  }

  const submitForm = (values: IInitialState) => {
    console.log(values)
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
      <form className="container bg-[#fafafa] h-full basis-1/2 flex justify-center">
        <div className="container border rounded-xl shadow-xl flex flex-col content-center w-3/6 m-auto p-6">
          <h5 className="text-3xl font-semibold m-2 text-center">Sign In</h5>
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
            onClick={submitForm(form.values)}
            className="my-2"
            label="Continue with email"
          />
          <div className="container flex text-center content-around">
            <div className="container border border-slate-400 h-0 mx-2 my-auto" />
            <span className="text-slate-400">or</span>
            <div className="container border border-slate-400 h-0 mx-2 my-auto" />
          </div>
          <Button className="my-2" icon label="Continue with Google" />
          <span className="text-center mt-4 hover:underline hover:cursor-pointer text-slate-400">
            Don't have an account? Create one!
          </span>
        </div>
      </form>
    </FormikProvider>
  )
}

export default Form
