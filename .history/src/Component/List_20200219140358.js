import React, { Component } from 'react'

export class List extends Component {
    render() {
        return (
            <div>
                {this.props.users ? this.props.map((user)=>{
                    return <li>{user}</li>
                })}
            </div>
        )
    }
}

export default List
