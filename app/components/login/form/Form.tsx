import React from 'react'
import Button from '../../ui/Button/Button'
import Input from '../../ui/Input/Input'

function Form() {
  return (
    <div className="container bg-[#fafafa] h-full basis-1/2 flex justify-center">
      <div className="container border rounded-xl shadow-xl flex flex-col content-center w-3/6 m-auto p-6">
        <h5 className="text-3xl font-semibold m-2 text-center">Sign In</h5>
        <Input label="Email" />
        <Input className="mb-2" label="Password" />
        <Button className="my-2" label="Continue with email" />
        <div className="container flex text-center content-around">
          <div className="container border border-slate-400 h-0 mx-2 my-auto" />
          <span className="text-slate-400">or</span>
          <div className="container border border-slate-400 h-0 mx-2 my-auto" />
        </div>
        <Button className="my-2" label="Continue with Google" />
      </div>
    </div>
  )
}

export default Form
