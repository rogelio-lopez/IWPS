import React from 'react';
import '../css/Training.css';

function Training() {
    return (
        <div className='training'>
            <h2>Training</h2>

            <div className="training__content">
                <img src={require('../images/trainingimg.jpg')} alt='' />

                <div className="training__text">
                    <p>We are available for presentations regarding various structuring options and other wealth planning matters of interest to financial advisors.</p>
                    <p>We have presented at off-site and on-site seminars individually and as part of a panel as well as “lunch and learn” presentations that take minimal time away from the financial advisor’s day.</p>
                    <p>If your organization is interested in coordinating a presentation on a particular topic please contact us.</p>
                </div>
            </div>
        </div>
    )
}

export default Training;
