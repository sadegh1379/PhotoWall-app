import React from 'react';
import PropTypes from 'prop-types';


function Title(props) {
    return (
            <p className="  text-white py-3 p-title text-center">{props.title} <span className="fa fa-camera"></span></p>
    )
}

Title.propTypes = {
    title : PropTypes.string.isRequired
}

export default Title;
