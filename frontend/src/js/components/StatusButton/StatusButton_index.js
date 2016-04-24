import React from 'react'
import { SplitButton, MenuItem } from 'react-bootstrap'
import axios from 'axios'

class StatusButton extends React.Component {
  constructor (props) {
    super()
    this.state = {
      id: props.id,
      status: props.status,
      clientId: props.clientId,
      statusList: [
        {id: 1, name: 'Pre-start'},
        {id: 2, name: 'In Progress'},
        {id: 3, name: 'Ready'},
        {id: 4, name: 'Sent'}
      ],
      statuses: {
        1: 'Pre-start',
        2: 'In Progress',
        3: 'Ready',
        4: 'Sent'
      }
    }
    this.changeStatus = this.changeStatus.bind(this)
    this.renderOptions = this.renderOptions.bind(this)
  }

  changeStatus (e) {
    const statusCode = e.target.getAttribute('data-status')
    this.setState({
      statusName: this.state.statuses[statusCode],
      status: parseInt(statusCode)
    })

    const url = '/api/clients/' + this.props.clientId + '/letters/' + this.props.id + '/' + statusCode
    axios.put(url)
  }

  renderOptions () {
    const menuItems = this.state.statusList.filter(x => x.id > this.state.status)
    return menuItems.map((item) => <MenuItem key={item.id} data-status={item.id} eventKey={item.id}>{item.name}</MenuItem>)
  }

  render () {
    return (
      <SplitButton
        bsStyle='primary'
        id='split-button-basic'
        title={this.state.statuses[this.state.status]}
        onSelect={this.changeStatus}
      >
        {this.renderOptions()}
      </SplitButton>
    )
  }
}

StatusButton.defaultProps = {
  statusName: 'Pre-start'
}
export default StatusButton
