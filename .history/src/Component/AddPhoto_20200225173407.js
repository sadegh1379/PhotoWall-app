import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import uuid from 'react-uuid'

export class AddPhoto extends Component {

    constructor(props){
            super(props);
            this.state={
                link : '',
                description : ''
            }
    }

    onChangeHandler = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmitHandler = (e)=>{
       e.preventDefault();
       const newPost = {
           id : uuid(),
           description : this.state.description,
           imageLink : this.state.link
       }
       
       this.props.addpost(newPost);

       this.setState({
           link:'',
           description : ''
       })

       this.props.history.push('/');
      
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <Link to="/">
                     <i className="fa fa-arrow-circle-left fa-2x mx-4 text-dark" ></i>
                </Link>
                

                    <div className="card form-card card-body  container">
                        <h5 className=" text-center">اضافه کردن عکس</h5>
                                <form onSubmit={(e)=>this.onSubmitHandler(e)} className="container add-form">
                                    <input required name="link" value={this.state.link} onChange={(e)=>this.onChangeHandler(e)} type="text" placeholder="لینک عکس" className="form-control my-4 text-center"/>
                                    <input name="description" value={this.state.description} onChange={(e)=>this.onChangeHandler(e)} type="text" placeholder="توضیحات" className="form-control text-center" />
                                    <div className="d-flex justify-content-center mt-4">
                                            <button type="submit" className="btn btn-success ">اضافه کردن</button>
                                    </div>
                                    
                                </form>
                    </div>
            </div>
        )
    }
}

export default AddPhoto;
