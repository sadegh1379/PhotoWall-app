import React, { Component } from 'react'

export class Photo extends Component {
    render() {

        const post = this.props.post ;

        return (
            
                <div className="figure">
                    <img src={post.imageLink} alt={post.description}/>
                    <h5>{post.description}</h5>
                </figure>
    
        )
    }
}

export default Photo
