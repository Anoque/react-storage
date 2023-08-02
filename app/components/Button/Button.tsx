import React, { FC, ButtonHTMLAttributes } from 'react'
import './styles.scss'
import classnames from 'classnames'
import googlelogo from '../../../images/google-logo.png'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  icon?: string
  props: string[]
}

function Button({ label, icon, ...props }: IButton) {
  const buttonClassnames = classnames(
    props.className,
    'button-wrapper rounded-lg hover:opacity-75',
    icon ? 'default border border-slate-300 font-semibold' : 'custom',
  )
  return (
    <button className={buttonClassnames} type="button">
      {/* {icon && <img src={googlelogo} className="pr-1" />} */}
      {label && <span className="">{label}</span>}
    </button>
  )
}

export default Button
