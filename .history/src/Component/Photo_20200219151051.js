import React, { Component } from 'react'

export class Photo extends Component {
    render() {

        const post = this.props

        return (
            <div className="figure-grid">
                <figure className="figure"></figure>
            </div>
        )
    }
}

export default Photo
