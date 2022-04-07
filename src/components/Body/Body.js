import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import Heading from '../Typography/Heading/Heading'
import './Body.scss'
import Card from './Card/Card'
import Form from './Form/Form'

const Body = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.users);
    setUsers(data.users)
  });
  }, [])

  

  return (
    <body>
      <div className='body-section'>
        <Heading>Working with GET request</Heading>
        <div className='cards-container'>
          {users.map((user) => (
            <Card key={user.id} user={user}/>
          ))}
        </div>
        <Button width='120px'>Show more</Button>        
      </div>
      <div className='body-section'>
        <Heading>Working with POST request</Heading>
        <Form />
      </div>
    </body>
  )
}

export default Body