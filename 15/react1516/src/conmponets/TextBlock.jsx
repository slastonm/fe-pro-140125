import React from 'react'
import PropTypes from 'prop-types'



const TextBlock = (props) => {
    return (
        <>
            {/* <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                <h1 className="display-4 fw-normal text-body-emphasis">Pricing</h1>
                <p className="fs-5 text-body-secondary">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
            </div> */}
            <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                <h1 className="display-4 fw-normal text-body-emphasis">{props.title}</h1>
                <p className="fs-5 text-body-secondary">{props.content}</p>
            </div>
        </>
    );
};

TextBlock.prototype={
    title:PropTypes.string,
    content:PropTypes.string
}
// TextBlock.defaultProps ={
//     title:'No title data',
//     content:'No content'
// }

export default TextBlock;