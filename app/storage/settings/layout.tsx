'use client'

import classNames from 'classnames'
import { usePathname } from 'next/navigation'

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const path = usePathname()
    .split('/')
    .filter((el) => el !== '')

  const getClassNameById = (id: string) => {
    return classNames(
      'flex self-center m-3 p-2 rounded-lg',
      id === path[2] ? 'bg-main' : 'hover:bg-main hover:opacity-60',
    )
  }

  return (
    <div className="p-4 flex">
      <div className="flex flex-col space-y-4 border rounded-lg w-48">
        <a
          className={getClassNameById('account')}
          href="/storage/settings/account"
        >
          Account
        </a>
        <a
          className={getClassNameById('workspaces')}
          href="/storage/settings/workspaces"
        >
          Workspaces
        </a>
        <a
          className={getClassNameById('security')}
          href="/storage/settings/security"
        >
          Security
        </a>
        <div className="flex self-center p-4 mt-4 text-red-600 hover:opacity-60 cursor-pointer">
          Delete Account
        </div>
      </div>
      {children}
    </div>
  )
}
