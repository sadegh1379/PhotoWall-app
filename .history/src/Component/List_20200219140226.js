import React, { Component } from 'react'

export class List extends Component {
    render() {
        return (
            <div>
                {this.props.user.map(())}
            </div>
        )
    }
}

export default List
