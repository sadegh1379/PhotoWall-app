import React from 'react';
import Photo from './Photo';


function PhotoWall(){
    return(
            <div className="photo-grid container">{
                    props.posts && props.posts.length > 0 ? posts.map((post , index) => <Photo key={index}  post={post}/> )
                    :
                    <p>Nothing</p>
                    }
             </div>
    )
}

export default PhotoWall;
