import React, { Component } from 'react'

export class Photo extends Component {
    render() {

        const post = this.props.post ;

        return (
            <div className="card photo-card" style={{width: '18rem'}}>
                 <img className="card-img-top" src={post.imageLink} alt={post.description}/>
                    <div className="card-body ">
                        <h6 className="card-title">{post.description}</h6>
                            <div className="d-flex justify">
                                    <button  className="btn btn-danger">Go somewhere</button>
                            </div>                       
                    </div>
            </div>
    
        )
    }
}

export default Photo
