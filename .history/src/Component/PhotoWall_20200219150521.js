import React, { Component } from 'react'

export class PhotoWall extends Component {
    render() {
        return (
            this.props.post.map(post => <Photo />)
        )
    }
}

export default PhotoWall;
