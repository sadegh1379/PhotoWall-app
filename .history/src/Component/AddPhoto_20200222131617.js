import React, { Component } from 'react'

export class AddPhoto extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="لینک عکس" className=""/>
                </form>
            </div>
        )
    }
}

export default AddPhoto;