import React, { Component } from 'react';
import axios from 'axios';
import { load as loadRecaptcha} from 'recaptcha-v3'

class Contact extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            recaptcha_validating: false,
            recaptcha_response: '',
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
        
        this.setState({
            recaptcha_validating: true
        });
        
        loadRecaptcha('6LfxspUUAAAAAMHRpQ5-RR3Qo8wQCliwgVcAeHih', {autoHideBadge: true}).then((recaptcha) => {
            this.recaptcha = recaptcha;
            recaptcha.execute('action').then((token) => {
                this.setState({
                    recaptcha_response: token,
                    recaptcha_validating: false,
                });
                this.submit();
            })
        })
        
        event.preventDefault();
    }
    
    submit = () => {
        let endpoint = 'https://us-central1-wearemarmota.cloudfunctions.net/contactForm';
        let body = {
            recaptcha_response: this.state.recaptcha_response,
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
                if(error.response){
                    console.log(error.response);
                }
                alert('Error al enviar el email');
            });
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
                                <div className="form-group mb-0">
                                    <label>Tu mensaje</label>
                                    <textarea className="form-control" name="message" rows="5" value={this.state.message}  onChange={ this.handleChange.bind(this) } required></textarea>
                                </div>
                                <small className="m-0">
                                    This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.
                                </small>
                                <div className="form-group" align="right">
                                    <button type="submit" className="btn-contact" disabled={this.state.recaptcha_validating || this.state.sending}>
                                        {
                                            this.state.recaptcha_validating ?
                                            'Validando reCAPTCHA' :
                                            this.state.sending ? 'Enviando...' : 'Enviar'
                                        }
                                    </button>
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
