import React, { Component } from 'react'

export class List extends Component {
    render() {
        return (
            <div>
                {this.props.users ? this.props.users.map((user)=>{
                    return <li>{user}</li>
                }) : <li></li> }
            </div>
        )
    }
}

export default List
