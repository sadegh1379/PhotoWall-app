import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types'


function PhotoWall(props){
    const posts = props.posts;
    const onRemovePost = props.onRemovePost;
    return(
        <div>
                <div class="text-center">
                    <a  className="btn btn-default add-icon"><i className="fa fa-plus fa-3x"></i></a>
                </div>
                <div className="photo-grid container">{
                        posts && posts.length > 0 ? posts.map((post , index) => <Photo onRemovePost={onRemovePost} key={index}  post={post}/> )
                        :
                        <div>
                            <p className="display-4">Nothing yet <i class="fa fa-meh-o text-danger my-4" aria-hidden="true"></i></p>
                            <p>For add picture please press <a href="/">Home</a></p>
                        </div>
                        }
                </div>
       </div>
    )
}

PhotoWall.propTypes = {
    posts : PropTypes.array.isRequired,
    onRemovePost : PropTypes.func.isRequired
}

export default PhotoWall;
