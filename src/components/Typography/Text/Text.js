import React from 'react'
import './Text.scss'

const Text = ({children, margin, padding, textAlign, color}) => {
  return (
    <p className='card-text'
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