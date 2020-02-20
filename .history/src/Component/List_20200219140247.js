import React, { Component } from 'react'

export class List extends Component {
    render() {
        return (
            <div>
                {this.props.users.map((user)=>{
                    return <li>{}</li>
                })}
            </div>
        )
    }
}

export default List
