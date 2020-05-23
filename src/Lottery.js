import React, { Component } from 'react'
import './Lottery.css'
import RenderBalls from './RenderBalls'
class Lottery extends Component{
    constructor(props){
        super(props);
        this.state = {nums:Array.from({length:this.props.balls})}
        this.generate = this.generate.bind(this)
    }
    generate(){
            this.setState(curState=>({
                nums: curState.nums.map(
                    n => Math.floor(Math.random() * this.props.maxBalls)
                )
            }))
    }

    render(){
        return(
            <div className = 'container'>
                <div className="heading">
                    <h3 className = 'heading'> {this.props.head}</h3>
                    <div className = 'Lottery_Balls'>
                        {this.state.nums.map(n=>(
                            <RenderBalls num = {n}/>
                        ))}
                    </div>
                    
                    <button  onClick = {this.generate}   className = 'btn-primary'> Re Start Lottery</button>
                </div>
            </div>
        )
    }
}
export default Lottery;