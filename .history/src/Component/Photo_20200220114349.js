import React, { Component } from 'react'

export class Photo extends Component {
    render() {

        const post = this.props.post ;

        return (
            <div className="card photo-card" style={{width: '18rem'}}>
                 <img className="card-img-top" src={post.imageLink} alt={post.description}/>
                    <div className="card-body">
                        <h6 className="card-title">{post.description}</h6>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn btn-primary">Go somewhere</>
                    </div>
            </div>
    
        )
    }
}

export default Photo
