import React, { Component } from 'react'

class TodoItem extends Component {
    render() {
        return (
            <li style={{textDecoration: this.props.done? 'line-through' : 'none'}}>{ this.props.name }</li>
        )
    }
}
export default TodoItem;