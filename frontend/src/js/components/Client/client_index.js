import React from 'react'
import { Panel, Row, Col } from 'react-bootstrap'
import ClientItem from './clientItem.js'

class Client extends React.Component {
  constructor () {
    super()
    this.state = { open: false }
  }

  render () {
    return (
      <div>
        <Row onClick={() => {this.setState({ open: !this.state.open })}}>
          <ClientItem />
        </Row>
        <Row>
          <Col className='letters' xs={10} xsOffset={1}>
            <Panel collapsible expanded={this.state.open}>
              some panel content
            </Panel>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Client
