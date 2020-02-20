import React, { Component } from 'react';
import Photo from './Photo';

export class PhotoWall extends Component {
    
   

    render() {

        const posts = this.props.posts;

        return (
            posts && posts.le ?.map((post , index) => <Photo key={index}  post={post}/>)
        )
    }
}

export default PhotoWall;
