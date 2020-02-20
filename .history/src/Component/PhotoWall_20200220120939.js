import React from 'react';
import Photo from './Photo';


function PhotoWall({post}){
    return(
            <div className="photo-grid container">{
                    posts && posts.length > 0 ? posts.map((post , index) => <Photo key={index}  post={post}/> )
                    :
                    <p>Nothing</p>
                    }
             </div>
    )
}

export default PhotoWall;
