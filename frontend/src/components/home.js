import React, { Component } from 'react'
import Logo from './Images/Logo.jpg'
import Image from 'material-ui-image'



const background = Logo

class Home extends Component {
  render() {
    return (
      <div className='App'>
        <Image aspectRatio={(16/9)} src={background} />
      </div>
    )
  }
}

export default Home