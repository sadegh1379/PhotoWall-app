import React, { Component } from 'react'

export class Photo extends Component {
    render() {

        const post = this.props.post ;

        return (
            
                <figure className="figure">
                    <img src={post.ima} alt=""/>
                </figure>
    
        )
    }
}

export default Photo
