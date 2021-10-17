import React from 'react';
import '../styles/coachs.css'
import Coach from './Coach';
import { listCoachs } from '../datas/listCoachs'



function Coachs() {
        return(
        <div>
            <ul className='enteteNosCoatchs'> 
                <h1> Nos coachs </h1>
                <p>Coachs professionnels diplômés d’État, d'une grande expérience et certifiés Les Mills.</p>
            </ul>
            <ul>
            {listCoachs.map(({ name, specialite }) => (
            <Coach
                name={name}
                specialite={specialite}
            />
             ))}
            </ul>
        </div>
     );
}
 
export default Coachs