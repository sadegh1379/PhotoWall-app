import React, { Component } from 'react'

export class Photo extends Component {
    render() {

        const post = this.props.post ;

        return (
            
                <figure className="figure">
                    <img src={post.imageLink} alt={post.description}/>
                    <>{post.description}</p>
                </figure>
    
        )
    }
}

export default Photo
