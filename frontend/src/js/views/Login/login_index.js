import React, { Component } from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router'

export default class Login extends Component {
  render () {
    return (
      <Grid>
        <Row>
          <Col xs={4} />
          <Col xs={4}>
            <div className='login-container'>
              <input className='login-input' type='text' placeholder='id' />
              <input className='login-input' type='password' placeholder='password'/>
              <Link to={'/dashboard'}>
                <Button className='login-btn'>Submit</Button>
              </Link>
            </div>
          </Col>
          <Col xs={4} />
        </Row>
      </Grid>
    )
  }
}
