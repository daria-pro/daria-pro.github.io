import React from 'react'
import './Text.scss'

const Text = ({children, margin, padding, textAlign}) => {
  return (
    <p className='card-text'
    style={{
      margin,
      padding,
      textAlign: textAlign
      }}
    >
      {children}
    </p>
  )
}

export default Text