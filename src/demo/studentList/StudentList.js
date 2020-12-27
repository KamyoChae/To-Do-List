//   2-4 demo显示学生列表
import React, { Component } from 'react'
import Student from "./Student";

export default class StudentList extends Component {

    
    render() {
        // 约定 props.stus 传递一个数组对象
        // 获取react组件数组
        const students = this.props.stus.map(item=>{ <Student key={item.id} {...item}/>})
        return (
            <ul>
                {students}
            </ul>
        )
    }
}
