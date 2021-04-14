import React, { Component } from 'react'
import Logo from './Images/Logo.jpg'
import Image from 'material-ui-image'
import Desert from './Images/Desert.png'



const background = Desert


class Home extends Component {
  render() {
    return (
      <div className='App'>
        <Image imageStyle={{width: 'inherit', height: 'inherit' }} src={background} />
      </div>
    )
  }
}

export default Home