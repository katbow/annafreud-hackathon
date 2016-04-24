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
    this.renderOptions = this.renderOptions.bind(this)
  }

  changeStatus (e) {
    // debugger
    const statusCode = e.target.getAttribute('data-status')
    this.setState({ statusName: this.state.statusList[statusCode-1] })
    const url = '/api/clients/' + this.props.clientId + '/letters/' + this.props.id + '/' + statusCode
    axios.put(url)
  }

  renderOptions () {
    const i = this.state.statusList.indexOf(this.state.statusName)
    const menuItems = this.state.statusList.slice(i, this.state.statusList.length)
    return menuItems.map((item, j) => <MenuItem data-status={j + 1} eventKey={j + 1}>{item}</MenuItem>)
  }

  render () {
    // this.renderOptions()
    return (
      <SplitButton
        bsStyle='primary'
        id='split-button-basic'
        title={this.state.statusName}
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
