import React, { Component } from 'react';

class Contact extends Component {
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
                        <form id="contact" method="post" action="https://us-central1-wearemarmota.cloudfunctions.net/contactForm">
                            <div className="form-group">
                                <label>Nombre</label>
                                <input type="text" name="name" className="form-control" required />
                            </div>
                            <div className="form-group">
                                <label>Correo electrónico</label>
                                <input type="email" name="email" className="form-control" required />
                            </div>
                            <div className="form-group">
                                <label>Tu mensaje</label>
                                <textarea className="form-control" name="message" rows="5" required></textarea>
                            </div>
                            <div className="form-group" align="right">
                                <button type="submit" className="btn-contact">Enviar</button>
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
