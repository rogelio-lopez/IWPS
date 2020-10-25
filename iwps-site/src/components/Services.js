import React from 'react';
import '../css/Services.css';

function Services() {
    return (
        <div className='services'>
            
            <h2>Services</h2>

            <div className="services__tabs">
                <button>What we offer</button>
                <button>Onboarding</button>
                <button>Periodic Reports</button>
                <button>Instant Support</button>
                <button>Client portal</button>
            </div>

            <div className="services__info">

                <div className="services__infoCard">

                    <div className="services__img">
                        <img src={require('../images/calendar.jpg')} alt='' />
                    </div>

                    <div className="services__text">
                        <h3>Count on us for all of your small business needs</h3>
                        <ul>
                            <li>Bookkeping</li>
                            <li>Payroll</li>
                            <li>Sales Tax</li>
                            <li>Bill Pay</li>
                            <li>Accrual</li>
                            <li>Loan Assessment</li>
                        </ul>
                        <button>SIGN UP TODAY</button>
                    </div>
                </div>
                {/*
                <div className="services__infoCard services__tab2">
                    <h3>The first step towards stress-free success</h3>
                </div>

                <div className="services__infoCard services__tab3">
                    <h3>You’re always selling and we’re always reporting</h3>
                </div>

                <div className="services__infoCard services__tab4">
                    <h3>Communication is key</h3>
                </div>

                <div className="services__infoCard services__tab5">
                    <h3>Never miss a beat again</h3>
                </div> 
                */} 
            </div>
        </div>
    )
}

export default Services;
