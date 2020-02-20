import React, { Component } from 'react'

export class Photo extends Component {
    render() {

        const post = this.props.post ;

        return (
            
                <figure className="figure">{post.description}</figure>
    
        )
    }
}

export default Photo
