import React from 'react';
import '../styles/cour.css'

function Cour({ name , cover}) {
    return (
            <li className='cour-item'>
                <img src={cover} alt="coverSport" className='lmj-cour-item-cover' />      
                <h2 className="cour-name">{name}</h2>
                <button>Découvrire</button>
            </li>
    );
}

export default Cour;