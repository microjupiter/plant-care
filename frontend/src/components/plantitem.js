import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePlant } from '../actions/index'
import Home from './home'


class PlantItem extends Component {
  
  render() {

    const {name, species_attributes, notes, id} = this.props
    return (
      <div>
        <div className="container">
          <br />
          <h3> {name.toUpperCase()} </h3>
          <h4> {species_attributes.toUpperCase()} </h4>
          <p> {notes} </p>
          <br />
          <button className="button-color" onClick={() => this.props.deletePlant (id, this.props.history )}>Delete Plant</button> 
          
          </div>
      </div>
    )
  }
}

export default connect(null, {deletePlant})(PlantItem)