import React, { Component } from 'react'
import './App.css'
import Home from './components/home'
import { BrowserRouter as Router, Switch, Route } from  'react-router-dom'
import { connect } from 'react-redux'
import { getPlants } from './actions'
import About from './components/about'
import Index from './components/index'
import Error from './components/error'
import Form from './components/form'


class App extends Component {

  componentDidMount(){
    this.props.getPlants()
  }

  render() {
    if(this.props.loading) {
      return (
        <h3>Loading...</h3>
      )
    }
  

  return (
      <Router>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/plants" component={ Index } />
        <Route exact path="/plants/new" component={ Form } />
        <Route component={ Error } />
        </Switch>
        </Router>
    )
  }
}

  const mapStateToProps = state => {
    return {
      loading: state.loading
    }
  }


export default connect(mapStateToProps, { getPlants })(App)