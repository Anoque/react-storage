import React, { FC, ButtonHTMLAttributes } from 'react'
import './styles.scss'
import classNames from 'classnames'
import googleLogo from '@/images/google-icon.svg'
import Image from 'next/image'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  icon?: string
  className?: string
}

function Button({ label, icon, className, ...props }: IButton) {
  return (
    <button className={classNames(
      'button-wrapper rounded-lg hover:opacity-75',
      icon ? 'default border border-slate-300 font-semibold flex-row items-center justify-center space-x-4' : 'custom',
      className,
    )}
            type={props.type || 'button'}
            {...props}
    >
       {icon && <Image priority
                       src={googleLogo}
                       alt="Icon"
       />}

      {label && <span>{label}</span>}
    </button>
  )
}

export default Button
