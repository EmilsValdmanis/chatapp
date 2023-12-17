import React from 'react'
import classNames from 'classnames'

const Button = ({ children, onClick, disabled, outlined }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        'px-4 py-1 rounded-lg font-bold focus:outline-none',
        {
          'border border-purple-700 text-purple-700 bg-white hover:bg-purple-50 focus:bg-purple-100': outlined && !disabled,
          'bg-purple-500 hover:bg-purple-600 focus:bg-purple-700 text-white': !outlined && !disabled,
          'bg-purple-200 text-purple-700 cursor-not-allowed': !outlined && disabled,
          'border bg-white border-purple-200 text-purple-200 cursor-not-allowed': outlined && disabled,
        }
      )}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
