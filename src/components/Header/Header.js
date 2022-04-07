import React from 'react'
import './Header.scss'
import logo from '../../images/Logo.svg'
import Button from '../Button/Button'
import Heading from '../Typography/Heading/Heading'

const Header = () => {
  return (
    <>
      <header className='nav-container'>
        <nav>
          <img src={logo} alt='logo' className='logo'/> 
          <div className='btn-container'>
          <Button className='btn-users'>Users</Button>
          <Button>Sign up</Button>
          </div> 
        </nav>
        <div className='hero'>
          <div className='text-section'>
            <Heading>Test assignment for front-end developer</Heading>
            <p className='p-text'>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
            <Button>Sign up</Button>
          </div>
        </div>
      </header>
      <body>

      </body>
    </>
  )
}

export default Header