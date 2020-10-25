import React from 'react';
import '../css/Prices.css';
import PriceBox from './PriceBox';

function Prices() {
    return (
        <div className='prices'>
            <div className="prices__text">
                <h2>Bookkeeping pricing</h2>
                <h3>All plans include a dedicated bookkeeping team ready to tackle your unique accounting needs.</h3>
            </div>

            <div className="prices__boxes">
                <PriceBox header='Sole-up' price='175'/>
                <PriceBox header='Start-up' price='350'/>
                <PriceBox header='Build-up' price='450'/>
                <PriceBox header='Leap-up' price='550'/>
            </div>
        </div>
    )
}

export default Prices;
