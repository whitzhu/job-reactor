import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import AuthService from '../util/AuthService'
import Header from './Header'
import Home from './Home'
import Board from './Board';
import Call from './Call';
import JobCard from './JobCard';
import JobEntry from './JobEntry';

const auth = new AuthService('lrbZmg5KoIKqvQo9H8yW6VSsuMdREglX', 'wyzhu.auth0.com');

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

export default class App extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
  }

  render () {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
          <Header />
            <Route exact path="/" component={Home} auth={auth}/>
            <Route path="/board" component={Board}/>
            <Route path="/call" component={Call}/>
            <Route path="/job-card" component={JobCard}/>
            <Route path="/job-entry" component={JobEntry}/>
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}
