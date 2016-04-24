import React from 'react'
import { Panel, Row, Col } from 'react-bootstrap'
import ClientItem from './clientItem.js'
import Letter from '../Letter/letter_index.js'
import AddLetter from '../AddLetter/addLetter_index.js'
import AddLetterModal from '../AddLetter/AddLetterModal.js'

class Client extends React.Component {
  constructor () {
    super()
    this.state = {
      panelOpen: false,
      showModal: false
    }
  }

  render () {
    return (
      <div>
        <Row onClick={() => { this.setState({ panelOpen: !this.state.panelOpen }) }}>
          <ClientItem open={this.state.panelOpen} />
        </Row>
        <Row>
          <Col className='letters' xs={10} xsOffset={1}>
            <Panel collapsible expanded={this.state.panelOpen}>
              <Letter />
            </Panel>
            <AddLetter onClick={() => { this.setState({ showModal: !this.state.showModal }) }}/>
            <AddLetterModal />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Client
