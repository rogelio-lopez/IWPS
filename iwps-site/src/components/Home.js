import React from 'react';
import '../css/Home.css';
import InfoBox from './InfoBox';
import Prices from './Prices';
import Services from './Services';
import Training from './Training';

function Home() {
    return (
        <div className='home'>

            <div className="home__topImg">
                {/*<img src={require('../images/deskImg.jpeg')} alt='' />*/}

                <h3>YOUR LOCAL BUSINESS GROWTH PARTNER</h3>
                <h2>Bookkeeping and Accounting Services for Small Businesses</h2>
            </div>          
                
            <section id='info-section'>
                <div className="home__infoBoxes">
                    <InfoBox 
                        text='Whether you need light bookkeeping or full service accounting, we’re your local trusted business center.'
                    />
                    <InfoBox 
                        text='We make sure that all aspects of your business are taken care of so that you can focus on building your success. '
                    />
                    <InfoBox 
                        text='Using Quickbooks or Xero? We sync with any accounting software. Just starting out? We have you covered too!'
                    />
                </div>
            </section>


            <section id='services-section'>
                <div className="home__component">
                    <Services />
                </div>
            </section>


            <section id='prices-section'>
                <div className="home__component">
                    <Prices />
                </div>
            </section>

            <section id='training-section'>
                <div className="home__component">
                    <Training />
                </div>
            </section>

        </div>
    )
}

export default Home;
