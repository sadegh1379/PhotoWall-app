import React, { Component } from 'react'

export class AddPhoto extends Component {
    render() {
        return (
            <div>
                <i className="fa fa-arrow-circle-left mx-4" ></i>

                    <div className="card form-card card-body  container">
                        <h5 className=" text-center">اضافه کردن عکس</h5>
                                <form className="container add-form">
                                    <input type="text" placeholder="لینک عکس" className="form-control my-4 text-center"/>
                                    <input type="text" placeholder="توضیحات" className="form-control text-center" />
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
