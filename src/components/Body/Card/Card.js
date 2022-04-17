import React from 'react'
import './Card.scss'
import Text from '../../Typography/Text/Text'

const Card = (props) => {
  const {phone, email, name, position, photo} = props.user;
  
  return (
    <div className='card'>
      <img className='card-photo' src={photo} alt='profile'/>
      <Text padding='20px 0'>{name}</Text>
      <Text>{position}</Text>
      <Text>{email}</Text>
      <Text>{phone}</Text>
    </div>
  )
}

export default Card