import Auth from '@/components/auth/Auth'
import {AuthPageEnum} from '@/components/types/auth'
import React from 'react'

interface UserProps {
  params: {
    pageType: AuthPageEnum
  }
}

export default function AuthPage({ params: { pageType } }: UserProps) {
  const titles = {
    [AuthPageEnum.LOGIN_FORM]: 'Sign In',
    [AuthPageEnum.REGISTER_FORM]: 'Sign Up',
  }

  return <>
    <h5 className="text-3xl font-semibold m-2 text-center">{titles[pageType]}</h5>

    <Auth page={pageType} />
  </>
}
