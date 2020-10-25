import React from 'react';
import '../css/PriceBox.css';

function PriceBox({header, price}) {
    return (
        <div className='pricebox'>

            <div className="pricebox__header">
                <h3>{header}</h3>
            </div>

            <div className="pricebox__img">
                <img src={require('../images/icons-00.jpg')} alt='' />
            </div>

            <div className="pricebox__price">
                <h3>${price}/mo</h3>
                <p>paid monthly</p>
            </div>

            <div className="pricebox__list">
                <ul>
                    <li>Up to 50 transactions</li>
                    <li>Up to 2 accounts</li>
                    <li>Accounting Software</li>
                    <li>Dedicated Accounting Team</li>
                    <li>Weekly Bookkeeping</li>
                    <li>Monthly Profit and Loss</li>
                    <li>Monthly Balance Sheet</li>
                </ul>
            </div>
        </div>
    )
}

export default PriceBox;
