// 将源码复制粘贴到index.js 2-2 demo图片轮播
import React from 'react';
import ReactDOM from 'react-dom';
import src1 from './assets/1.jpg'
import src2 from './assets/2.jpg'
import src3 from './assets/3.jpg'
import src4 from './assets/4.jpg'


const container = document.getElementById('root')

const srcs = [src1, src2, src3, src4]

let index = 0
let timer

function render() {
  ReactDOM.render(
    <img alt="" src={srcs[index]} />,
    container
  );
}

function start() {
  stop()
  timer = setInterval(() => {
    index = (index + 1) % 4
    render()
  }, 2000);
}
function stop(params) {
  clearInterval(timer)
}
render()
start()

container.onmouseenter = ()=>{
  console.log("停止轮播")
  stop()
}
container.onmouseleave = ()=>{
  console.log("开始轮播")
  start()
}
