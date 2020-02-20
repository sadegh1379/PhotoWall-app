import React, { Component } from 'react'

export class Photo extends Component {
    render() {

        const post = this.props.post ;

        return (
            
                <div className="figure card card-body">
                    <img src={post.imageLink} alt={post.description}/>
                    <h5 className="card-titlr">{post.description}</h5>
                </div>
    
        )
    }
}

export default Photo
