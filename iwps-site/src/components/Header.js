import React from 'react';
import '../css/Header.css';
import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

function Header() {
    return (
        <div className='header'>


            <div className="header__nav">

                <div className='header__navLogo'>
                    <h1 className='header__navLogo1'>IWPS</h1>
                    <h1 className='header__navLogo2'>Services</h1>
                </div>
                
                <div className='header__navBar'>
                    <Button className='header__navBtn'>ABOUT</Button>
                    <Button className='header__navBtn' href='#services-section'>SERVICES</Button>
                    <Button className='header__navBtn' href='#prices-section'>PRICES</Button>
                    <Button className='header__navBtn' href='#training-section'>TRAINING</Button>
                    <Button className='header__navBtn'>TEAM</Button>
                </div>
            </div>

            <div className="header__contact">
                <Button className='header__contactBtn' href='#contact-section'>CONTACT</Button>
            </div>

            <div className="header__menu">
                <div className="header__menuBtn" 
                    onClick={() => {
                        document.querySelector('.header__navBar')
                        .classList.toggle('header__navBar--active');
                        document.querySelector('.header')
                        .classList.toggle('header--active');
                        document.querySelector('.header__menuLines')
                        .classList.toggle('header__menuLines--active');
                        document.querySelector('.header__menuX')
                        .classList.toggle('header__menuX--active');
                    }}
                >
                    <div className="header__menuLines">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                    <div className="header__menuX">
                        <CloseIcon fontSize='large'/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Header;
