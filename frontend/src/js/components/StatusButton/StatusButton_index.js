import React from 'react'
import { SplitButton, MenuItem } from 'react-bootstrap'
import axios from 'axios'

class StatusButton extends React.Component {
  constructor () {
    super()
    this.state = {
      statusName: 'Pre-start',
      statusList: ['Pre-start', 'In Progress', 'Ready', 'Sent']
    }
    this.changeStatus = this.changeStatus.bind(this)
  }

  changeStatus (e) {
    const statusCode = e.target.getAttribute('data-status')
    this.setState({ statusName: this.state.statusList[statusCode-1] })
    const url = '/api/clients/' + this.props.clientId + '/letters/' + this.props.stakeholder.id + '/' + statusCode
    axios.put(url)
  }

  render () {
    return (
      <SplitButton
        bsStyle='primary'
        id='split-button-basic'
        title={this.state.statusName}
        onSelect={this.changeStatus}
      >
        <MenuItem data-status='1' eventKey='1'>Pre-start</MenuItem>
        <MenuItem data-status='2' eventKey='2'> In progress</MenuItem>
        <MenuItem data-status='3' eventKey='3'>Completed, ready to post</MenuItem>
        <MenuItem data-status='4' eventKey='4'>Sent</MenuItem>
      </SplitButton>
    )
  }
}

StatusButton.defaultProps = {
  statusName: 'Pre-start'
}
export default StatusButton
