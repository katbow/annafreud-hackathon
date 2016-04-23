import React from 'react'
import { Panel, Row, Col } from 'react-bootstrap'
import ClientItem from './clientItem.js'
import Letter from '../Letter/letter_index.js'
import AddLetter from '../AddLetter/addLetter_index.js'

class Client extends React.Component {
  constructor () {
    super()
    this.state = {
      panelOpen: false,
      modalOpen: false
    }
  }

  render () {
    return (
      <div>
        <Row onClick={() => { this.setState({ panelOpen: !this.state.panelOpen }) }}>
          <ClientItem open={this.state.open} />
        </Row>
        <Row>
          <Col className='letters' xs={10} xsOffset={1}>
            <Panel collapsible expanded={this.state.panelOpen}>
              <Letter />
            </Panel>
            <AddLetter onClick={() => { this.setState({ modalOpen: !this.state.modalOpen }) }}/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Client
