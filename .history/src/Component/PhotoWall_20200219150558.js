import React, { Component } from 'react'

export class PhotoWall extends Component {
    render() {
        return (
            this.props.post.map((post , index) => <Photo key={index}  post={post}/>)
        )
    }
}

export default PhotoWall;
