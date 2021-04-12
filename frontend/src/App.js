import React, { Component } from 'react'
import './App.css';
import Home from './components/home'
import {BrowserRouter as Router, Switch, Route } from  'react-router-dom';

class App extends Component {

  render(){
    return (
      <Router>
        <Route exact path="/" component={ Home }/>




      </Router>
    )
  }
}

export default App