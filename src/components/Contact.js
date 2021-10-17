import React, { Component } from 'react';
import '../styles/contact.css'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            nom : '',
            Commentaire:'',
            email :''
         }
    }
    handlerUserameameChange = (event) => {
        this.setState({
            nom:event.target.value
        })
    }
    handlerCommentaireChange = (event) => {
        this.setState({
            Commentaire : event.target.value
        })
    }
    handlerEmailChange = (event) => {
        this.setState({
            email : event.target.value
        })
    }
    handelSubmit = (event) =>{
        alert('Nous vous contacter le plutot possible')
        event.preventDefault()
    }
    render() { 
        const {nom , email , Commentaire} = this.state
        return ( 
            <form onSubmit={this.handelSubmit}>
                <div>
                    <h1>Nous contacter</h1>
                </div>
                <div>
                    <label>Nom:</label>
                    <input type="text" value={nom} onChange={this.handlerUserameameChange}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={this.handlerEmailChange}/>
                </div>
                <div>
                    <label>Commentaire: </label>
                    <textarea value={Commentaire} onChange={this.handlerCommentaireChange}></textarea>
                </div>
                <button type="submit"> Envoyer </button>
            </form>
         );
    }
}
 
export default Contact;