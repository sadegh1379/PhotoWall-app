import React from 'react';
import Photo from './Photo';


function PhotoWall(props){
    const posts = props.posts;
    return(
            <div className="photo-grid container">{
                    posts && posts.length > 0 ? posts.map((post , index) => <Photo key={index}  /> )
                    :
                    <p>Nothing</p>
                    }
             </div>
    )
}

export default PhotoWall;
