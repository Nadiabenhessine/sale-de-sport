import React from 'react';
import '../styles/coach.css'

function Coach({ name , specialite }) {
    return (
        <div>
            <li className='coach-item'>
                <h2 className="coach-name">{name}</h2>
                <h6 className="coach-specialite"> {specialite}</h6>
            </li>
        </div>
    );
}

export default Coach;