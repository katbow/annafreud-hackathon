import React from 'react'
import { Image, Col, Row} from 'react-bootstrap'


export default () => {
  return (
    <Row>
      <Col xs='2'>
        <div className='addletter'><p> add letter </p></div>
        <Image className='greenplus' src='img/greenplus.png' responsive/>
      </Col>
    </Row>
  )
}
