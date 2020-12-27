import React, { Component } from 'react'
import { List, Input, Button, Divider } from 'antd';
import "./todo.css";

export default class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                { id: 0, text: 'Racing car sprays burning fuel into crowd.' },
                { id: 1, text: 'Japanese princess to wed commoner.' },
                { id: 2, text: 'Australian walks 100km after outback crash.' },
                { id: 3, text: 'Man charged over missing wedding girl.' },
                { id: 4, text: 'Los Angeles battles huge wildfires.' },
            ],
        }
    }
    componentDidMount() {
        this.setState({
            data: [...JSON.parse(localStorage.getItem("todo"))]
        })
    }
    addItems = () => {
        this.setState({
            data: [{ id: new Date().getTime(), text: "" }, ...this.state.data]
        }, () => {
            localStorage.setItem("todo", JSON.stringify(this.state.data))
        })
    }
    onChange = (e) => {
        let id = e.target.dataset.id
        let index = null
        this.state.data.forEach((item, oin) => {
            if (item.id === Number(id)) {
                index = oin
                return
            }
        })
        let oldData = JSON.parse(JSON.stringify(this.state.data))
        oldData[index].text = e.target.value

        this.setState({
            data: [...oldData]
        }, () => {
            localStorage.setItem("todo", JSON.stringify(this.state.data))
        })

    }
    render() {
        return (
            <>
                <div className="container">
                    <Divider orientation="left">TO-DO</Divider>
                    <List
                        header={<div><Button type="primary" onClick={this.addItems}>Add</Button> </div>}
                        bordered
                        dataSource={this.state.data}
                        renderItem={item => ( 
                            <List.Item key={item.id}>
                                <Input
                                    data-id={item.id}
                                    editable="true"
                                    allowClear
                                    defaultValue={item.text}
                                    onChange={this.onChange}
                                />
                                <Button type="primary" danger onClick={
                                    () => {
                                        this.setState({
                                            data: this.state.data.filter(it => it.id !== item.id)
                                        }, () => {
                                            localStorage.setItem("todo", JSON.stringify(this.state.data))
                                        })

                                    }
                                }>Delete</Button>
                            </List.Item> 
                        )}
                    />
                </div>
            </>
        )
    }
}
