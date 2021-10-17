import React from 'react';
import '../styles/new.css'

function New({ image , titre}) {
    return (
        <div className="styleNew"> 
            <li className='new-item'>
                <img src={image} alt="imageNew" className='lmj-image' />      
                <p className="titreNew">{titre}</p>
            </li>
        </div>
    );
}

export default New;