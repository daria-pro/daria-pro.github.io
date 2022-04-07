import React from 'react'
import './TextInput.scss'

const TextInput = (props) => {
  const {type, name, placeholder, padding} = props;

  return (
    <>
      <input 
      type={type} 
      id={name} 
      name={name} 
      required
      placeholder={placeholder} 
      className='text-input'
      style={{
        padding: padding
      }}>      
      </input>
    </>
    )
}

export default TextInput