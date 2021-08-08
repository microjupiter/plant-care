import React, { Component } from 'react'
import Image from 'material-ui-image'
import Desert from './Images/Desert.png'
import Index from './index'
import { Container } from '@material-ui/core'


const background = Desert


class Home extends Component {
  render() {
    return (
      
      <div>
        <div className='App'>
        
        <Image imageStyle={{width: 'inherit', height: 'inherit' }} src={background}/>
        <Container />
        
      </div>
      </div>
    )
  }
}

export default Home