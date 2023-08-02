'use client'

import React from 'react'
import Login from './Login/Login'
import './style.css'
import {AuthPageEnum} from '@/components/types/auth'
import Link from 'next/link'

function Auth({ page }: { page: AuthPageEnum }) {
  const { LOGIN_FORM, REGISTER_FORM } = AuthPageEnum

  const linkTitle = {
    [LOGIN_FORM]: "Don't have an account? Create one!",
    [REGISTER_FORM]: "Sign In",
  };

  return (
    <React.Fragment>
      {page === LOGIN_FORM && <Login />}
      {page === REGISTER_FORM && <span>Register</span>}

      <Link href={page === LOGIN_FORM ? REGISTER_FORM : LOGIN_FORM}>
        <span className="text-center mt-4 hover:underline hover:cursor-pointer text-slate-400">
          {linkTitle[page]}
        </span>
      </Link>
    </React.Fragment>
  )
}

export default Auth
