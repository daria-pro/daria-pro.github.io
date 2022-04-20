import React from 'react'
import './Text.scss'

const Text = ({children, margin, padding, textAlign, color, className}) => {
  return (
    <p className={className}
    style={{
      margin,
      padding,
      textAlign: textAlign,
      color
      }}
    >
      {children}
    </p>
  )
}

export default Text