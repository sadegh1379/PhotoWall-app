import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types'


function PhotoWall(props){
    const posts = props.posts;
    const onRemovePost = t
    return(
            <div className="photo-grid container">{
                    posts && posts.length > 0 ? posts.map((post , index) => <Photo key={index}  post={post}/> )
                    :
                    <p>Nothing</p>
                    }
             </div>
    )
}

PhotoWall.propTypes = {
    posts : PropTypes.array.isRequired
}

export default PhotoWall;
