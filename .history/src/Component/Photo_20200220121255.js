import React from 'react';
import PropTypes from 'prop-types'


function Photo(porps){
    const post = props.post ;

    return(
        <div className="card photo-card" style={{width: '18rem'}}>
                <img className="card-img-top" src={post.imageLink} alt={post.description}/>
                <div className="card-body ">
                    <h6 className="card-title">{post.description}</h6>
                        <div className="d-flex justify-content-center">
                                <button  className="btn btn-outline-danger"> remove</button>
                        </div>                       
                </div>
        </div>

    )
}


export default Photo
