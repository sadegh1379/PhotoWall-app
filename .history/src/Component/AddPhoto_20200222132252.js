import React, { Component } from 'react'

export class AddPhoto extends Component {
    render() {
        return (
            <div>
                <form className="container add-form">
                    <input type="text" placeholder="لینک عکس" className="form-control text-center"/>
                    <input type="text" placeholder="توضیحات" className="form-control text-center" />
                      <div>

                      </div>
                    
                </form>
            </div>
        )
    }
}

export default AddPhoto;
