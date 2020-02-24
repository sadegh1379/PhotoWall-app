import React, { Component } from 'react'

export class AddPhoto extends Component {
    render() {
        return (
            <div className="card card-body bg-dark container">
                <h3 className="text-white text-center">اضافه کردن عکس</h3>
                <form className="container add-form">
                    <input type="text" placeholder="لینک عکس" className="form-control my-4 text-center"/>
                    <input type="text" placeholder="توضیحات" className="form-control text-center" />
                      <div className="d-flex justify-content-center mt-4">
                            <button type="submit" className="btn btn-success ">اضافه کردن</button>
                      </div>
                    
                </form>
            </div>
        )
    }
}

export default AddPhoto;
