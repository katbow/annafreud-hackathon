import React from 'react'
import { Image, Col, Row } from 'react-bootstrap'

export default (props) => {
  return (
    <Row>
      <Col xs={2} xsOffset={10}>
        <div className='addletter' onClick={props.toggleModal}><p> Add Letter </p></div>
        <Image className='greenplus' src='img/greenplus.png' responsive/>
      </Col>
    </Row>
  )
}
