import React, { Component } from 'react'

export class AddPhoto extends Component {
    render() {
        return (
            <div>
                <form className="container form-add">
                    <input type="text" placeholder="لینک عکس" className="form-control text-center"/>
                    <input type="text" placeholder="توضیحات" className="form-control text-center" />
                    <button type="submit" className="btn btn-success ">اضافه کردن</button>
                </form>
            </div>
        )
    }
}

export default AddPhoto;
