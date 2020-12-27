import React from 'react'

export default function Student(props) {
    
    console.log(props)
    return (
        <li>
            [姓名]：{props.name} \ 
            [体重]：{props.weight} \ 
            [年龄]：{props.age} \ 
            [电话]：{props.phone} \ 
        </li>
    )
}
