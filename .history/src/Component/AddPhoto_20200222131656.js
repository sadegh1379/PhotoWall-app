import React, { Component } from 'react'

export class AddPhoto extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="لینک عکس" className="form-control"/>
                    <input type="text" placeholder="توضیحات"/>
                </form>
            </div>
        )
    }
}

export default AddPhoto;
