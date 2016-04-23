import React, { Component } from 'react'
import { Grid, Row } from 'react-bootstrap'
import Client from '../../components/Client/client_index.js'

export default class ClinicianDashboard extends Component {
  render () {
    return (
      <Grid>
        <Row>
          <Client />
        </Row>
      </Grid>
    )
  }
}
