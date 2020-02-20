import React, { Component } from 'react'

export class List extends Component {
    render() {
        return (
            <div>
                {this.props.user}
            </div>
        )
    }
}

export default List
