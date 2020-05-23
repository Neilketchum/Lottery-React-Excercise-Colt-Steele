import React, { Component } from 'react'
import Lottery from './Lottery'
class App  extends Component{
  render(){
    return(
      <div>
        <Lottery balls={6} head={'Lotto'} maxBalls = {40} />
        
        <Lottery balls={4} head={'Mini Daily'} maxBalls = {10}/>
      </div>
    )
  }
}
export default App;