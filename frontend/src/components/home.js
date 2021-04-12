import React, { Component } from 'react'
import Logo from './Images/Logo.jpg'
// import Image from 'material-ui-image'



const background = Logo

class Home extends Component {
  render() {
    return (
      <div className='App'>
        <img src={background} />
      </div>
    )
  }
}

export default Home