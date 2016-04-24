import React, { Component } from 'react'
import {Grid, Row, Col, Modal, Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap'

export default class AddLetter extends Component {

  render () {
    return (
      <div>
        <div className='static-modal'>
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Letter Dashboard</Modal.Title>
            </Modal.Header>
            <Modal.Body>


            <form>
              <Row>
                <div className="form-line">
                  <Col sm={3}>
                    <label className="label-form">Client Name</label>
                  </Col>
                  <Col sm={9}>
                    <input className="input-form" type="text"/>
                  </Col>
                </div>
              </Row>
              <Row>
                <div className="form-line">
                  <Col sm={3}>
                    <label className="label-form">Topic</label>
                  </Col>
                  <Col sm={9}>
                    <input className="input-form" type="text" />
                  </Col>
                </div>
              </Row>
              <Row>
                <div className="form-line">
                  <Col sm={3}>
                    <label className="label-form">Recipient</label>
                  </Col>
                  <Col sm={9}>
                    <input className="input-form" type="text" />
                  </Col>
                </div>
              </Row>
              <Row>
                <div className="form-line">
                  <Col sm={3}>
                    <label className="label-form">Deadline</label>
                  </Col>
                  <Col sm={9}>
                    <input className="input-form" type="text" />
                  </Col>
                </div>
              </Row>
              <Row>
                <div className="form-line">
                  <Col sm={3}>
                    <label className="label-form">Priority Level</label>
                  </Col>
                  <Col sm={9}>
                    <select name="priority" className="input-form">
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </select>
                  </Col>
                </div>
              </Row>

            </form>


            </Modal.Body>
            <Modal.Footer>
              <Button>Close</Button>
              <Button bsStyle='primary'>Send</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      </div>
    )
  }
}
