import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import MoreFeatures from '../components/MoreFeatures';

import imgDesignLayout from '../img/support/design_layout.svg';

class UiUx extends Component {
  
    componentDidMount() {
        document.body.setAttribute("page", "ui-ux");
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        document.body.removeAttribute("page");
    }

    render() {
        return (
            <React.Fragment>

                <Helmet>
                    <title>UI/UX - we are Marmota</title>
                </Helmet>

                <div className="claim">
                    <p>
                        Conoce nuestro <wbr /> trabajo en
                        <span className="emphasys-subline">
                            UI/UX
                        </span>
                    </p>
                </div>

                <section id="ui-ux">
                    <div className="container">

                        <div className="row">
                            <div className="col-sm-11 col-md-7">
                                <h3>Diseño Web y digital</h3>
                                <h4>El proceso de diseño Web y digital</h4>
                                <p>Ponemos al usuario en el centro de las decisiones de diseño, desarrollando nuestros proyectos según un estudio previo de cada producto interactivo. De esta manera creamos interfaces que nuestro público objetivo entenderá y usará con fluidez, creando una experiencia de usuario óptima.</p>
                                <p>El desarrollo de cada proyecto es individual y personalizado, poniendo todos nuestros esfuerzos en transmitir los objetivos y valores de tu producto.</p>
                                <p>¿Quieres saber cómo lo hacemos?</p>
                            </div>
                            <div className="col-sm-11 col-md-5" align="center">
                                <img src={imgDesignLayout} alt="Interfaz Masonry de ejemplo" className="img-responsive mt-50px" width="238" height="238" />
                            </div>
                        </div>

                        <div className="timeline">
                            <div className="line"></div>
                            <div className="line-start"></div>
                            <ul className="list-unstyled">
                                <li className="">01. Investigación</li>
                                <li className="">02. Plan y estrategia</li>
                                <li className="">03. Wireframes</li>
                                <li className="">04. Diseño visual</li>
                                <li className="">05. Prototipado</li>
                            </ul>
                            <div className="endpoint">
                                <div className="end">Entrega</div>
                            </div>
                        </div>

                    </div>
                </section>

                <MoreFeatures />
                
            </React.Fragment>
        );
    }
}

export default UiUx;
