'use client'

import Header from '@/components/Header/Header'
import Sidebar from '@/components/Sidebar/Sidebar'
import { usePathname } from 'next/navigation'

export default function StorageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const path = usePathname()
    .split('/')
    .filter((el) => el !== '')

  return (
    <div className="w-full h-full flex">
      <Sidebar path={path} />
      <div className="flex flex-col h-full w-full bg-white">
        <Header path={path} />
        <div className="mx-4 mb-4 h-full rounded-b-lg border border-gray-200 shadow-md">
          {children}
        </div>
      </div>
    </div>
  )
}
