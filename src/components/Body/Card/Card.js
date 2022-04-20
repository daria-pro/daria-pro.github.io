import React from 'react'
import './Card.scss'
import Text from '../../Typography/Text/Text'

const Card = (props) => {
  const {phone, email, name, position, photo} = props.user;
  
  return (
    <div className='card' value={props.value}>
      <img className='card-photo' src={photo} alt='profile'/>
      <div className='tooltip'>
        <Text className='card-text'>{name}</Text>
        <span class="tooltiptext">{name}</span>
      </div>
      <div className='tooltip'>
        <Text className='card-text' margin='20px 0 0 0'>{position}</Text>
        <span class="tooltiptext">{position}</span>
      </div>
      <div className='tooltip'>
        <Text className='card-text'>{email}</Text>
        <span class="tooltiptext">{email}</span>
      </div>
      <div className='tooltip'>
        <Text className='card-text'>{phone}</Text>
        <span class="tooltiptext">{phone}</span>
      </div>
    </div>
  )
}

export default Card