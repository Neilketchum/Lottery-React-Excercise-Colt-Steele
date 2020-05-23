import React, { Component } from 'react'
import './RenderBalls.css'
class RenderBalls extends Component{
    // constructor(props){
    //     this.state 
    // }

    render(){
        return(
         <div>
            <div className = 'RenderBalls_ball'>{this.props.num}</div>
         </div>   
        )
    }
}
export default RenderBalls;