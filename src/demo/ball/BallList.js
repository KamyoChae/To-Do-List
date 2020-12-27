import React, { Component } from 'react'
import Ball from "./Ball";
import { getRandom } from "./util";
export default class BallList extends Component {
    constructor(props){
        super(props)
        this.state={
            ballInfoes:[]
        }
        
        const timer =  setInterval(() => {
            let randomsize = getRandom(20, 100)
            let info = {
                size: randomsize, 
                left: getRandom(0, document.documentElement.clientWidth - randomsize),
                top: getRandom(0, document.documentElement.clientHeight - randomsize),
                xSpeed: getRandom(80, 120),
                ySpeed: getRandom(50, 180),
                bg: `rgb(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(0, 255)})`
            }
            
            this.setState({
                ballInfoes: [...this.state.ballInfoes, info]
            })
            if(this.state.ballInfoes.length > 10){
                clearInterval(timer)
            }
        }, 100);
    }
    render() {
        const newBallList =  this.state.ballInfoes.map((item, i)=> <Ball key={i} {...item}/>) 
        return (
            <>
                {newBallList}
            </>
        )
    }
}
