import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import StatusButton from '../StatusButton/StatusButton_index.js'
import StatusIcon from '../StatusIcon/statusIcon_index.js'

export default class Letter extends Component {
  render () {
    return (
        <Row className='letter-item'>
          <Col className='stakeholder-name title' xs={2}>
            {this.props.stakeholder.relationship}
          </Col>
          <Col className='letter-topic title' xs={3}>
            Assessment letter
          </Col>
          <Col className='title' xs={3}>
            <StatusButton {...this.props} />
          </Col>
          <Col className='priority' xs={2}>
            <StatusIcon status='red' />
          </Col>
          <Col className='due title' xs={2}>
            Tomorrow
          </Col>
        </Row>
    )
  }
}
