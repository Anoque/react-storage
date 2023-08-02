import React, { useMemo, InputHTMLAttributes } from 'react'
import classnames from 'classnames'
import './styles.css'
import { FieldProps } from 'formik'

interface IInput extends InputHTMLAttributes<HTMLInputElement>, FieldProps {
  label: string
}

function Input({ label, field, name, ...props }: IInput) {
  return (
    <div
      className={classnames(props.className, 'wrapper container flex flex-col')}
    >
      {label && <label className="label font-semibold py-1">{label}</label>}

      <input
        type={props.type || 'text'}
        className="p-2 rounded-xs rounded-md border-2 border-slate-300"
        {...field}
      />
    </div>
  )
}

export default Input
