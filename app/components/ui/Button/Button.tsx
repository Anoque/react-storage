import React from 'react'
import './styles.css'
import classnames from 'classnames'

function Button({ label, ...props }) {
  return (
    <button
      className={classnames(props.className, 'button-wrapper rounded-lg')}
    >
      {label}
    </button>
  )
}

export default Button
