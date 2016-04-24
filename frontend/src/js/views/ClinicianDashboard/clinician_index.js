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
    return (
      <Grid>
        <Row>
          {this.props.clientArray ?
            this.props.clientArray.map(client =>
              <Client key={client.id} {...client} />) :
          'no data yet'}
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
