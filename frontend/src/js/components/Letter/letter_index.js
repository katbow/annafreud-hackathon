import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

export default class Letter extends Component {
  render () {
    return (
        <Row className='letter-item'>
          <Col className='stakeholder-name title' xs={2}>
            Teacher
          </Col>
          <Col className='letter-topic title' xs={3}>
            Ellie is cray
          </Col>
          <Col className='status title' xs={2}>
            Okay
          </Col>
          <Col className='priority title' xs={2}>
            High
          </Col>
          <Col className='due title' xs={2}>
            Tomorrow
          </Col>
        </Row>
    )
  }
}
