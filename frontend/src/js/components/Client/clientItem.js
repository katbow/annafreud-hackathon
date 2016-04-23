import React from 'react'
import { Row, Col, Panel } from 'react-bootstrap'
import StatusIcon from '../StatusIcon/statusIcon_index.js'

const ClientItem = (props) => {
  const closedItem = (
    <Col className='client-item' xs={10} xsOffset={1}>
      <Row>
        <Col className='client-name' xs={2}>
          <p>{props.firstName}</p>
        </Col>
        <Col className='open-letters' xs={3} xsOffset={4}>
          <p>{props.numberOfLetters} open letters</p>
        </Col>
        <Col className='status-icon' xs={1}>
          <StatusIcon status='red'/>
        </Col>
      </Row>
    </Col>
  )
  const openItem = (
    <Col className='client-item' xs={10} xsOffset={1}>
      <Row>
        <Col className='client-name' xs={2}>
          <p>{props.firstName}</p>
        </Col>
        <Col className='title' xs={3} xsOffset={1}>
          <p>topic</p>
        </Col>
        <Col className='title' xs={2}>
          <p>Status</p>
        </Col>
        <Col className='title' xs={2}>
          <p>Priority</p>
        </Col>
        <Col className='title' xs={2}>
          <p>due</p>
        </Col>
      </Row>
    </Col>
  )
  return props.open ? openItem : closedItem
}

ClientItem.defaultProps = {
  firstName: 'Ellie',
  numberOfLetters: 3
}

export default ClientItem
