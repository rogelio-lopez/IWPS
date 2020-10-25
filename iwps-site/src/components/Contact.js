import React, { useState } from 'react';
import '../css/Contact.css';
import { Button } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Contact({data}) {
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const emailTo = 'inquiries@iwps-latam.com';

   console.log(data)

    const handleClick = (e) => {
       e.preventDefault();
      window.open(`mailto:${emailTo}?subject=${subject}&body=${message}`);
    }
    
    return (
        <div className='contact'>

            <h2>Contact Us!</h2>

            <div className="contact__content">
                <form> 
                    <div className="contact__input">
                        <span>Name</span>
                        <input 
                            value={name} 
                            onChange={e => setName(e.target.value)}
                            type='text' 
                        />
                    </div>

                    <div className="contact__input">
                        <span>Subject</span>
                        <input 
                            value={subject} 
                            onChange={e => setSubject(e.target.value)} 
                            type='text' 
                        />
                    </div>

                    <div className="contact__message" >
                        <span>Message</span>
                        <textarea 
                            value={message} 
                            onChange={e => setMessage(e.target.value)} 
                            rows='10'
                        />
                    </div>  

                    <div className="contact__submit">
                        <Button className='contact__submitBtn' onClick={handleClick} type='submit'>
                            Submit
                        </Button>
                    </div>
                </form>

                <div className="contact__info">
                    <div className="contact__infoText">
                        <p>110 Merrick Way, Suite 2A Coral Gables, FL 33134 U.S.A.</p>
                        <p>+1-305-408-9790</p>
                        <p>inquiries@iwps-latam.com</p>

                        <a href="https://www.linkedin.com/company/international-wealth-planning-solutions/" target="_blank">
                            <LinkedInIcon 
                            className='contact__linkedIn' 
                            fontSize='large'
                            />
                        </a>
                        
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Contact;
