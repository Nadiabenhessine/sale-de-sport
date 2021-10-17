import React, { Component } from 'react';
import "../styles/CalculMasseCorporel.css"

class CalculMasseCorporel extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            poids :'',
            taille:''
        }
    }
    handlerPoidsChange = (event) =>{
        this.setState({
            poids : event.target.value
        })
    }
    handlerTailleChange = (event) =>{
        this.setState({
            taille : event.target.value
        })
    }
    handelSubmit = (event) =>{
        alert('Votre indice masse corporel est:')
        event.preventDefault()
    }
    render() { 
        return ( 
            <center>
                <form onSubmit={this.handelSubmit} className="col-4">
                     <input  type="text" placeholder="Poids / kg" value={this.state.poids} onChange={this.handlerPoidsChange}/>
                     <input  type="text"  placeholder="Taille / cm" value={this.state.taille} onChange={this.handlerTailleChange}/>
                     <button type="submit">Calculer</button>
                </form>
            </center>
            
         );
    }
}
 
export default CalculMasseCorporel;