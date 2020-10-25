import React from 'react';
import '../css/InfoBox.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function InfoBox({text}) {
    return (
        <div className='infobox'>
            
            <CheckCircleIcon className='infobox__icon' fontSize='large'/>

            <div className='infobox__text'>
                <p>{text}</p>
            </div>

            <div className="infobox__line"></div>
        </div>
    )
}

export default InfoBox;
