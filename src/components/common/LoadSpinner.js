import React from 'react';

const LoadSpinner = () => {
    return (
        <span style={{float: 'right'}}>
            <i className="fa fa-circle-o-notch fa-spin"
               style={{fontSize: '15px', color: 'blue'}}> </i>
        </span>
    )
};

export default LoadSpinner;