'use client'

import React, { useEffect } from 'react'
import Login from './Login/Login'
import Register from './Register/Register'
import './style.css'
import { AuthPageEnum } from '@/components/types/auth'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import TransparentLoader from '@/ui/TransparentLoader/TransparentLoader'
import {
  selectAuthLoginState,
  selectAuthRegisterState,
} from '@/store/auth/auth.slice'
import { useSelector } from 'react-redux'
import { STATUS } from '@/store/types'

function Auth({ page }: { page: AuthPageEnum }) {
  const { status: loginStatus } = useSelector(selectAuthLoginState)
  const { status: registerStatus } = useSelector(selectAuthRegisterState)

  const { LOGIN_FORM, REGISTER_FORM } = AuthPageEnum

  const linkTitle = {
    [LOGIN_FORM]: "Don't have an account? Create one!",
    [REGISTER_FORM]: 'Back to Sign In',
  }

  useEffect(() => {
    if (!Object.values(AuthPageEnum).includes(page)) {
      redirect(`/auth/${AuthPageEnum.LOGIN_FORM}`)
    }
  }, [page])

  return (
    <TransparentLoader
      isLoading={
        loginStatus === STATUS.LOADING || registerStatus === STATUS.LOADING
      }
    >
      {page === LOGIN_FORM && <Login />}
      {page === REGISTER_FORM && <Register />}

      <Link
        href={page === LOGIN_FORM ? REGISTER_FORM : LOGIN_FORM}
        className="inline-block mt-4 text-center hover:underline hover:cursor-pointer text-slate-400 w-full"
      >
        {linkTitle[page]}
      </Link>
    </TransparentLoader>
  )
}

export default Auth
