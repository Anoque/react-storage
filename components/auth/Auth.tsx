'use client'

import React, { useEffect } from 'react'
import Login from './Login/Login'
import Register from './Register/Register'
import './style.css'
import {AuthPageEnum} from '@/components/types/auth'
import Link from 'next/link'
import { redirect } from 'next/navigation'

function Auth({ page }: { page: AuthPageEnum }) {
  const { LOGIN_FORM, REGISTER_FORM } = AuthPageEnum

  const linkTitle = {
    [LOGIN_FORM]: "Don't have an account? Create one!",
    [REGISTER_FORM]: "Sign In",
  };

  useEffect(() => {
    if (!Object.values(AuthPageEnum).includes(page)) {
      redirect(`/auth/${AuthPageEnum.LOGIN_FORM}`)
    }
  }, [page])

  return (
    <React.Fragment>
      {page === LOGIN_FORM && <Login />}
      {page === REGISTER_FORM && <Register />}

      <Link href={page === LOGIN_FORM ? REGISTER_FORM : LOGIN_FORM} className='mt-4'>
        <span className="text-center mt-4 hover:underline hover:cursor-pointer text-slate-400">
          {linkTitle[page]}
        </span>
      </Link>
    </React.Fragment>
  )
}

export default Auth
