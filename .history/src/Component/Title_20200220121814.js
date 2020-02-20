import React from 'react'

function Title(props) {
    return (
            <p className=" bg-danger text-white py-3 p-title text-center">{props.title} <span className="fa fa-camera"></span></p>
    )
}



export default Title;
