import React, { Component } from 'react';
import Photo from './Photo';

export class PhotoWall extends Component {
    const posts = this.props.posts
    render() {
        return (
            this.props.post && this. ?.map((post , index) => <Photo key={index}  post={post}/>)
        )
    }
}

export default PhotoWall;
