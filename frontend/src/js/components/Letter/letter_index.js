import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

export default class Letter extends Component {
  render () {
    return (
      <Col className='letter-item' xs={10} xsOffset={1}>
        <Row>
          <Col className='stakeholder-name' xs={3}>
            Teacher
          </Col>
          <Col className='letter-topic' xs={3}>
            Ellie is cray
          </Col>
          <Col className='status' xs={2}>
            Okay
          </Col>
          <Col className='priority' xs={2}>
            High
          </Col>
          <Col className='due' xs={2}>
            Tomorrow
          </Col>
        </Row>
      </Col>
    )
  }
}
