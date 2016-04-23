import React from 'react'
import { SplitButton, MenuItem } from 'react-bootstrap'

class StatusButton extends React.Component {
  render () {
    return (
      <SplitButton
        bsStyle={'default'}
        id={'split-button-basic'}
        title={this.props.title}
      >
        <MenuItem eventKey='1'> Pre-start </MenuItem>
        <MenuItem eventKey='2'> In progress </MenuItem>
        <MenuItem eventKey='3'>Completed, ready to post </MenuItem>
        <MenuItem eventKey='4'>Sent </MenuItem>
      </SplitButton>
    )
  }
}

StatusButton.defaultProps = {
  title: 'Pre-start'
}
export default StatusButton
