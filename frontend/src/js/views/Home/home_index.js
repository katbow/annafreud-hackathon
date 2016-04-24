import React from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router'

export default class Home extends React.Component {
  render () {
    return (
      <Grid className='home'>
        <Row>
          <Col xs={12}>
            <Link to={'/login'}>
              <Button>Clinician Login</Button>
            </Link>
            <Button>Client Login</Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <img className='big-logo' src='/img/logo.png' />
          </Col>
        </Row>
      </Grid>
    )
  }
}
