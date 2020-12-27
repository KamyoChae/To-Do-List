// 2-6 自动移动的小球

import React, { Component } from 'react'
import  "./ball.css";

export default class Ball extends Component {
    constructor(props){
        super(props)
        this.state={
            left: props.left || 0, // 横坐标
            top: props.top || 0, // 纵坐标
            width: props.size || 100,
            height: props.size || 100,
            bg: props.bg || "f40",
            xSpeed: props.xSpeed,
            ySpeed: props.ySpeed,

        }
        const duration = 16
        setInterval(() => {
            const xDis = this.state.xSpeed * duration / 1000
            const yDis = this.state.ySpeed * duration / 1000
            let newLeft = this.state.left + xDis
            let newTop = this.state.top + yDis 

            if(newLeft <= 0){
                newLeft = 0
                this.setState({
                    xSpeed : -this.state.xSpeed
                })

            }else if(newLeft >= document.documentElement.clientWidth- this.state.width){
                newLeft = document.documentElement.clientWidth-this.state.width
                this.setState({
                    xSpeed : -this.state.xSpeed
                })
            }

            if(newTop <= 0){
                newTop = 0
                this.setState({
                    ySpeed : -this.state.ySpeed
                })
            }else if (newTop >= document.documentElement.clientHeight -this.state.height){
                newTop = document.documentElement.clientHeight -this.state.height
                this.setState({
                    ySpeed : -this.state.ySpeed
                })
            }
            this.setState({
                left: newLeft,
                top:newTop
            })
        }, duration);
 
    }
    render() {
        return (
            <div className="ball" style={{
                width:this.state.width+"px",
                height: this.state.width+"px",
                top: this.state.top,
                left:this.state.left,
                background: this.state.bg
            }}>
                
            </div>
        )
    }
}
