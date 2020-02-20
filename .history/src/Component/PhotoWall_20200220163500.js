import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types'


function PhotoWall(props){
    const posts = props.posts;
    const onRemovePost = props.onRemovePost;
    return(
            <div className="photo-grid container">{
                    posts && posts.length > 0 ? posts.map((post , index) => <Photo onRemovePost={onRemovePost} key={index}  post={post}/> )
                    :
                    <p>Nothing yet <span className="fa fa-smile"></span></p>
                    }
             </div>
    )
}

PhotoWall.propTypes = {
    posts : PropTypes.array.isRequired
}

export default PhotoWall;
