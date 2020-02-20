import React, { Component } from 'react';
import Photo from './Photo';

export class PhotoWall extends Component {
    
   

    render() {

        const posts = this.props.posts;

        return (
            <div className="photo-grid">{
                    posts && posts.length > 0 ? posts.map((post , index) => <Photo key={index}  post={post}/> )
                    :
                    <p>Nothing</p>
            }
            </div>
        )
    }
}

export default PhotoWall;
