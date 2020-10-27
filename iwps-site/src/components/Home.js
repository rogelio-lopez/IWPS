import React from 'react';
import '../css/Home.css';
import InfoBox from './InfoBox';
import Prices from './Prices';
import Services from './Services';
import Training from './Training';

function Home() {
    return (
        <div className='home'>

            <div className="home__top">
                {/*<img src={require('../images/deskImg.jpeg')} alt='' />*/}

                <div className="home__topImg">
                    <h3>YOUR LOCAL BUSINESS GROWTH PARTNER</h3>
                    <h2>Bookkeeping and Accounting Services for Small Businesses</h2>
                </div>
            </div>          
                
            <section id='about-section'>
                <div className="home__about">

                    <h2>About Us</h2>

                    <div className="home__aboutText">
                        <p>The rain and wind abruptly stopped, but the sky still had the gray swirls of storms in the distance. Dave knew this feeling all too well. The calm before the storm. He only had a limited amount of time before all Hell broke loose, but he stopped to admire the calmness. Maybe it would be different this time, he thought, with the knowledge deep within that it wouldn't.</p>
                    </div>

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
