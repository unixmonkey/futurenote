import React, { Component } from 'react'
import { Router, Route, Redirect, browserHistory } from 'react-router'
import Header from './Header'
import Login from './Login'
import Notes from './Notes'

class App extends Component {
  render() {
    return (
      <div className="container wrap">
        <Header/>
        <Router history={browserHistory}>
          <Redirect from="/" to="/notes" />
          <Route path="/login" component={Login}/>
          <Route path="/notes" component={Notes}/>
        </Router>
      </div>
    )
  }
}

export default App
