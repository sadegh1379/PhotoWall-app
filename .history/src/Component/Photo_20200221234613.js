import React from 'react';
import PropTypes from 'prop-types'


function Photo(props){
    const post = props.post ;
    const onRemovePost = props.onRemovePost ;
    return(
        <div className="card photo-card" style={{width: '18rem'}}>
                <img className="card-img-top"  src={post.imageLink} alt={post.description}/>
                <div className="card-body ">
                    <h6 className="card-title">{post.description}</h6>
                        <div className="d-flex justify-content-center">
                                <button  className="btn btn-outline-danger" 
                                onClick={()=>onRemovePost(post)}
                                > remove</button>
                        </div>                       
                </div>
        </div>

    )
}

Photo.propTypes = {
    post : PropTypes.ar.isRequired,
    onRemovePost : PropTypes.func.isRequired,
}

export default Photo
