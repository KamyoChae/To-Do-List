import React from 'react';
import ReactDOM from 'react-dom'; 
import  Todo   from "./components/Todo";
import 'antd/dist/antd.css';

const container = document.getElementById('root')
   
function render() {
  ReactDOM.render(<Todo />, container);
 
}
render()