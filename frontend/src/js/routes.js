import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App.js'
import Home from './views/Home/home_index.js'
import ClinicianDashboard from './views/ClinicianDashboard/clinician_index.js'
import Login from './views/Login/login_index.js'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/dashboard' component={ClinicianDashboard} />
    <Route path='/login' component={Login} />
  </Route>
)
