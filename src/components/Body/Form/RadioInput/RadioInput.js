import React from 'react'
import './RadioInput.scss'

const RadioInput = (props) => {
  const {type, value, name} = props;
  return (
    <input type={type} value={value} name={name} required/>
  )
}

export default RadioInput