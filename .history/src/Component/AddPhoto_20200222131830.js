import React, { Component } from 'react'

export class AddPhoto extends Component {
    render() {
        return (
            <div>
                <form className="container">
                    <input type="text" placeholder="لینک عکس" className="form-control te"/>
                    <input type="text" placeholder="توضیحات" className="form-control" />
                    <button type="submit" className="btn btn-success ">اضافه کردن</button>
                </form>
            </div>
        )
    }
}

export default AddPhoto;
