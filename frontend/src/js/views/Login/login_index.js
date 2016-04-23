import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Login extends Component {
  render () {
    return (
      <div>
        <input type='text' placeholder='id' />
        <input type='password' placeholder='password'/>
        <Link to={'/dashboard'}>
          <button>Submit</button>
        </Link>
      </div>
    )
  }
}
