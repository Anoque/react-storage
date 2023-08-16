'use client'

import React from 'react'
import { getUser, logOut } from '@/store/utils/localStorage'
import { useRouter } from 'next/navigation'
import classNames from 'classnames'
import './styles.scss'

interface IHeader {
  path: string[]
}

function Header({ path }: IHeader) {
  const { push } = useRouter()
  const textClassName = classNames(
    'transition ease-in-out hover:text-white my-auto cursor-pointer',
  )

  let user: string | null = ''

  if (typeof window !== undefined) {
    user = getUser().user
  }

  const logout = () => {
    logOut()
    push('/auth/login')
  }

  const openSettings = () => {
    push('/storage/settings')
  }

  return (
    <div className="h-14 flex justify-between px-5 bg-main rounded-t-lg mx-4 mt-4">
      <div className="flex">
        {path.length > 1 && (
          <h5 className="my-auto">
            {path[1].charAt(0).toUpperCase() + path[1].slice(1)}
          </h5>
        )}
      </div>
      <div className="space-x-6 flex">
        <h5 className={textClassName} onClick={() => openSettings()}>
          You entered as {user}
        </h5>
        <span className={textClassName} onClick={() => logout()}>
          Log Out
        </span>
      </div>
    </div>
  )
}

export default Header
