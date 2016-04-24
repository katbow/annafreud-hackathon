import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router'

export default class Header extends React.Component {
  render () {
    return (
      <div>
        <Navbar className='top-menu'>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to={'/'}>
                <img src={this.props.logoUrl} />
              </Link>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    )
  }
}

Header.defaultProps = {
  menuItems: []
}
