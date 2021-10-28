import React from 'react';
import { faJoomla } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Mobile() {
    return (
        <div className="mobile">
            <div className="logo-container">
                <FontAwesomeIcon className="logo" icon={ faJoomla }/>
            </div>
            <h4>Dashboard interface</h4>
            <h4>Only available on desktop.</h4>
      </div>
    )
}

export default Mobile
