import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types'


function PhotoWall(props){
    const posts = props.posts;
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
    posts : PropTypes.a.isRequired
}

export default PhotoWall;
