import React from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getUserDetails } from '../../actions/actions_index.js'
import { Link } from 'react-router'

class Home extends React.Component {
  render () {
    console.log(this.props)
    return (
      <Grid className='home'>
        <Row>
          <Col xs={12}>
            <Link to={'/login'}>
              <Button>Clinician Login</Button>
            </Link>
            <Button>Client Login</Button>
          </Col>
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userDetails: state.userDetails
  }
}

export default connect(mapStateToProps, { getUserDetails })(Home)
