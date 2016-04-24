import React, { Component } from 'react'
import { Grid, Row } from 'react-bootstrap'
import Client from '../../components/Client/client_index.js'
import { connect } from 'react-redux'
import { clientData } from '../../actions/actions_index.js'

class ClinicianDashboard extends Component {
  componentWillMount () {
    this.props.clientData()
  }

  render () {
    console.log(this.props.clientArray)
    return (
      <Grid>
        <Row>
          <Client/>
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    clientArray: state.clientData.data
  }
}

export default connect(mapStateToProps, { clientData })(ClinicianDashboard)
