import React, { Component } from 'react'

export class Photo extends Component {
    render() {

        const post = this.props.post ;

        return (
            <div className="figure-grid">
                <figure className="figure">{post.description}</figure>
               

            </div>
        )
    }
}

export default Photo
