import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addPlant } from '../actions'
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Icon } from '@material-ui/core';



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

  handleValidation(){
  
    let formIsValid = true;
  

    //Name
    if(this.state.name === " "){
       formIsValid = false;
    }

    //Species
    if(this.state.species === " "){
      formIsValid = false;
   }

   //Notes
   if(this.state.notes === " "){
    formIsValid = false;
 }
   return formIsValid;
  }


  handleSubmit = e => {
    e.preventDefault();

    if(this.handleValidation()) {
      this.props.addPlant(this.state, this.props.history);
    }else{
      alert("Form has errors")
    }
    }

    

    
  

  render() {
    return (
      <div>
        <h2>Add a new Plant</h2>
        <form onSubmit= {this.handleSubmit}>
          <div>
            <label htmlFor="name">Name </label>
            <TextField variant="outlined" input className="inputs" type="text"
            id="name" name="name" value={ this.state.name } onChange={ this.handleChange } />
            <br />
            <br />
            <label htmlFor="species_attributes">Species </label>
            <TextField variant="outlined" input className="inputs" type="text" id="species_attributes" name="species_attributes" value={ this.state.species_attributes } onChange={this.handleChange }/>
            <br />
            <br />
            <label htmlFor="notes">Notes </label>
            <TextField variant="filled"  className="inputs" id="notes" name="notes" value={ this.state.notes } onChange={ this.handleChange} /> 
          </div>
        <Button variant="contained" type="submit">Add Plant</Button>
        </form>

      </div>
    )
  }
}

export default connect(null, { addPlant })(Form)
