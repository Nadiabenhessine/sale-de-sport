import React from 'react';
import '../styles/cours.css'
import Cour from './Cour';
import { coursInfo } from '../datas/coursInfo'


function Cours() { 
    return (
    <div>
        <ul className='enteteNosCours'>
            <h1> Nos cours </h1>
            <p> Plus de 60 cours par semaines </p>
        </ul>
        <ul className='lmj-cour-list'> 
            {coursInfo.map(({ name, cover }) => (
            <Cour
                name={name}
                cover={cover}
            />
        ))}
        </ul>
    </div>
)
}

export default Cours