import React from 'react'
import { Panel, Row, Col, Modal, Button } from 'react-bootstrap'
import ClientItem from './clientItem.js'
import Letter from '../Letter/letter_index.js'
import AddLetter from '../AddLetter/addLetter_index.js'

class Client extends React.Component {
  constructor () {
    super()
    this.state = {
      panelOpen: false,
      showModal: false
    }
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal () {
    console.log('CLICKED', this)
    this.setState({ showModal: !this.state.showModal })
  }

  render () {
    return (
      <div>
        <Row onClick={() => { this.setState({ panelOpen: !this.state.panelOpen }) }}>
          <ClientItem open={this.state.panelOpen} {...this.props} />
        </Row>
        <Row>
          <Col className='letters' xs={10} xsOffset={1}>
            <Panel collapsible expanded={this.state.open}>
              {this.props.letters.map(singleLetter =>
                <Letter {...singleLetter} clientId={this.props.id} key={singleLetter.id} />)}
            </Panel>
            <AddLetter toggleModal={this.toggleModal}/>
            <Modal show={this.state.showModal} onHide={this.toggleModal}>
              <Modal.Header closeButton>
                <Modal.Title>Add New Letter</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form>
                  <Row>
                    <div className='form-line'>
                      <Col sm={3}>
                        <label className='label-form'>Client Name</label>
                      </Col>
                      <Col sm={9}>
                        <input className='input-form' type='text'/>
                      </Col>
                    </div>
                  </Row>
                  <Row>
                    <div className='form-line'>
                      <Col sm={3}>
                        <label className='label-form'>Topic</label>
                      </Col>
                      <Col sm={9}>
                        <input className='input-form' type='text' />
                      </Col>
                    </div>
                  </Row>
                  <Row>
                    <div className='form-line'>
                      <Col sm={3}>
                        <label className='label-form'>Recipient</label>
                      </Col>
                      <Col sm={9}>
                        <input className='input-form' type='text' />
                      </Col>
                    </div>
                  </Row>
                  <Row>
                    <div className='form-line'>
                      <Col sm={3}>
                        <label className='label-form'>Deadline</label>
                      </Col>
                      <Col sm={9}>
                        <input className='input-form' type='text' />
                      </Col>
                    </div>
                  </Row>
                  <Row>
                    <div className='form-line'>
                      <Col sm={3}>
                        <label className='label-form'>Priority Level</label>
                      </Col>
                      <Col sm={9}>
                        <select name='priority' className='input-form'>
                          <option value='high'>High</option>
                          <option value='medium'>Medium</option>
                          <option value='low'>Low</option>
                        </select>
                      </Col>
                    </div>
                  </Row>

                </form>
                </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.toggleModal}>Close</Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Client
