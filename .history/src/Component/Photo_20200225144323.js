import React from 'react';
import PropTypes from 'prop-types'


function Photo(props){
    const post = props.post ;
    const removePost = props.removePost;
    return(
        <div className="card photo-card" style={{width: '18rem'}}>
                <img className="card-img-top"  src={post.imageLink} alt={post.description}/>
                <div className="card-body ">
                    <h6 className="card-title">{post.description}</h6>
                        <div className="d-flex justify-content-center">
                                <button  className="btn btn-outline-danger" 
                                onClick={()=>removePost(post.id)}
                                > remove</button>
                        </div>                       
                </div>
        </div>

    )
}

Photo.propTypes = {
    post : PropTypes.ar.isRequired,
    
}

export default Photo
