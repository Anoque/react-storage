import React, { useEffect } from 'react'
import './styles.scss'
import classNames from 'classnames'
import ListIcon from '@/images/list-icon.svg'
import DashboardIcon from '@/images/dashboard-icon.svg'
import SettingsIcon from '@/images/settings-icon.svg'
import FileIcon from '@/images/file-icon.svg'
import Image from 'next/image'

interface ISidebar {
  path: string[]
}

function Sidebar({ path }: ISidebar) {
  const getClassNameById = (id: string) => {
    return classNames(
      'h-10 flex text-start transition ease-in-out  rounded-md mx-4 my-2 py-1 px-3 cursor-pointer',
      id === path[1] ? 'bg-white' : 'hover:bg-white',
    )
  }

  useEffect(() => {
    const sidebar: HTMLElement = document.getElementById('sidebar')

    const collapseSidebar = () => () => {
      if (sidebar.classList.contains('w-44')) {
        sidebar.classList.remove('w-44')
        sidebar.classList.add('w-16')
      } else {
        sidebar.classList.remove('w-16')
        sidebar.classList.add('w-44')
      }
    }

    sidebar.addEventListener('click', collapseSidebar)

    return () => {
      sidebar.removeEventListener('click', collapseSidebar)
    }
  }, [])

  return (
    <div
      className="w-44 flex flex-col transition duration-150 ease-in-out overflow-hidden rounded-lg"
      id="sidebar"
    >
      <div
        className="h-10 flex text-start transition ease-in-out mx-4 my-2 py-1 px-3 cursor-pointer hover:text-white"
        id="list"
      >
        <span className="my-auto ml-2">Storage</span>
      </div>
      <a href="/storage/dashboard" className={getClassNameById('dashboard')}>
        <Image priority src={DashboardIcon} alt="DashboardIcon" />{' '}
        <span className="my-auto ml-2" id="dashboardLabel">
          Dashboard
        </span>
      </a>
      <a href="/storage/files" className={getClassNameById('files')}>
        <Image priority src={FileIcon} alt="FileIcon" />{' '}
        <span className="my-auto ml-2" id="filesLabel">
          Files
        </span>
      </a>
      <a href="/storage/settings" className={getClassNameById('settings')}>
        <Image priority src={SettingsIcon} alt="SettingsIcon" />{' '}
        <span className="my-auto ml-2" id="settingsLabel">
          Settings
        </span>
      </a>
    </div>
  )
}

export default Sidebar
