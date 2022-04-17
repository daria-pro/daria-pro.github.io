import React from 'react'
import './RadioInput.scss'

const RadioInput = (props) => {
  const {type, value, name, onChange} = props;
  return (
    <input type={type} value={value} name={name} required onChange={onChange}/>
  )
}

export default RadioInput