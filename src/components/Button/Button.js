import React from 'react'
import './Button.scss'

const Button = ({children, color, border, height, width, variant}) => {
  return (
    <button
      className={variant ?? 'yellow-btn'} 
      style={{
      backgroundColor: color,
      border,
      height,
      width,
   }}>
     {children}
    </button>
  )
}

export default Button