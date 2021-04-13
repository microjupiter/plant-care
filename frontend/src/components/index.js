import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlantItem from './plantitem'
import {deletePlant} from '../actions/index'


class Index extends Component {
  render() {
    const plants = this.props.plants.map( (plant, i) =>
    <PlantItem key={i} name={ plant.name } notes={ plant.notes } id={ plant.id } history={this.props.history}/>)
    return (
      <div>
        { plants }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    plants: state.plants
  }
}

export default connect(mapStateToProps)(Index)