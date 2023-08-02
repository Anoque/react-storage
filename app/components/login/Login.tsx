'use client'

import React from 'react'
import Form from './form/Form'
import './style.css'

function Login() {
  return (
    <main className="container flex flex-row h-full">
      <Form />
      <div className="basis-1/2" />
    </main>
  )
}

export default Login
