import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function PhotoWall(props){
    const posts = props.posts;
    console.log(props);
    return(
        <div>
                <div className="text-center">
                    <Link  to="/addphoto" className="btn btn-default add-icon"><i className="fa fa-plus fa-2x"></i></Link>
                </div>
                <div className="photo-grid container">{
                        posts && posts.length > 0 ? posts.map((post , index) => <Photo {...props} key={index}  post={post} index={index}/> )
                        :
                        <div>
                            <p className="display-4">Nothing yet <i className="fa fa-meh-o text-danger my-4" aria-hidden="true"></i></p>
                            <p>For add picture please press <a href="/">Home</a></p>
                        </div>
                        }
                </div>
       </div>
    )
}

PhotoWall.propTypes = {
    posts : PropTypes.array.isRequired,
    
}

export default PhotoWall;
