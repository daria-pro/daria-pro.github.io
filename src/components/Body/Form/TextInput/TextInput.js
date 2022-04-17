import React from 'react'
import './TextInput.scss'

const TextInput = (props) => {
  const {type, name, placeholder, padding, onChange} = props;

  return (
    <>
      <input 
      onChange={onChange}
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