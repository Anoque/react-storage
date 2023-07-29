import React from 'react'
import classnames from 'classnames'
import './styles.css'

function Input({ label, ...props }) {
  return (
    <div
      className={classnames(props.className, 'wrapper container flex flex-col')}
    >
      {label && <label className="label font-semibold py-1">{label}</label>}
      <input
        type="text"
        className="p-2 rounded-xs rounded-md border-2 border-slate-300"
      />
    </div>
  )
}

export default Input
