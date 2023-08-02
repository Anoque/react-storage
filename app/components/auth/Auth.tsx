'use client'

import React, { useState } from 'react'
import Form from './Login/Form'
import './style.css'

const LOGIN_FORM = 'login'
const REGISTER_FORM = 'register'

function Auth() {
  const [activePage, setActivePage] = useState<string>(LOGIN_FORM)
  return (
    <main className="container flex flex-row h-full">
      {activePage === LOGIN_FORM && <Form />}
      {activePage === REGISTER_FORM && <span>Resiter</span>}
      <div className="basis-1/2 flex content-center">
        <div className="m-auto height-auto">
          <h5 className="text-9xl text-white underline decoration-pink-500 mb-3">
            React <br /> Storage.
          </h5>
          <span className="text-white italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br /> sed do eiusmod tempor
            <br /> incididunt ut labore et dolore magna aliqua.
          </span>
        </div>
      </div>
    </main>
  )
}

export default Auth
