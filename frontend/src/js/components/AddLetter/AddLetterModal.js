import React, { Component } from 'react'
import {Grid, Row, Col, Modal, Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap'

export default class AddLetterModal extends Component {

  render () {
    return (
      <div className='static-modal'>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Letter</Modal.Title>
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
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
