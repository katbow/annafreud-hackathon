import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default (props) => {
  return (
    <Navbar className='footer'>
      <Navbar.Header>
        <Navbar.Brand>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <p>© FAC7 & FAC5 2016</p>
      </Nav>
    </Navbar>
  )
}
