import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            sending: false,
            name: '',
            email: '',
            message: ''
        }
    }
    
    handleChange = (e) => {
        let input = e.target.getAttribute('name');
        let value = e.target.value;
        switch(input){
            case 'name':
                this.setState({ name: value });
                break;
            case 'email':
                this.setState({ email: value });
                break;
            case 'message':
                this.setState({ message: value });
                break;
            default:
                break;
        }
    }
    
    handleSubmit = (event) => {
        let endpoint = 'https://us-central1-wearemarmota.cloudfunctions.net/contactForm';
        let body = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        };
        
        this.setState({ sending: true });
        
        axios.post(endpoint, body)
            .then((response) => {
                if(response.data.success){
                    this.setState({
                        sending: false,
                        name: '',
                        email: '',
                        message: ''
                    });
                    alert('Mensaje enviado, en breve nos pondremos en contacto contigo');
                }
            })
            .catch((error) => {
                this.setState({ sending: false });
                alert('Error al enviar el email');
            });

        event.preventDefault();
    }


    render() {
        return (
            <section id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1 col-lg-5 offset-lg-0">
                            <h3>HOLA</h3>
                            <h4>Contacta con nosotros</h4>
                            <p>¿Quieres hacer un proyecto con nosotros? ¿Preguntarnos alguna cosa? ¿Invitarnos a un café?</p>
                            <p>Puedes escribirnos a nuestro correo electrónico <a href="mailto: hola@wearemarmota.com">hola@wearemarmota.com</a> o enviarnos tu consulta usando el formulario de contacto de la página web.</p>
                            <p>¡Encantados de conocerte!</p>
                        </div>
                        <div className="col-md-10 offset-md-1 col-lg-6 offset-lg-1">
                            <form id="contact" method="post" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label>Nombre</label>
                                    <input type="text" name="name" value={this.state.name} onChange={ this.handleChange.bind(this) } className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Correo electrónico</label>
                                    <input type="email" name="email" value={this.state.email} onChange={ this.handleChange.bind(this) } className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Tu mensaje</label>
                                    <textarea className="form-control" name="message" rows="5" value={this.state.message}  onChange={ this.handleChange.bind(this) } required></textarea>
                                </div>
                                <div className="form-group" align="right">
                                    <button type="submit" className="btn-contact">{ this.state.sending ? 'Enviando...' : 'Enviar' }</button>
                                    <div id="grecaptcha"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
