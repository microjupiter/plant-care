import React, { Component } from 'react';
import { connect } from 'react-redux'

class Form extends Component {
  state= {
    name: " ",
    species_attributes: " ",
    notes: " "
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    this.props.addPlant(this.state, this.props.history)
  }

  render() {
    return <p>{this.state.someKey}</p>;
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default Form;
