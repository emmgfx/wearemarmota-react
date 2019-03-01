import React, { Component } from 'react';

import MoreFeatures from '../components/MoreFeatures';

import imgDevTree from '../img/support/dev_tree.svg';
import imgDevHandmade from '../img/support/dev_handmade.svg';
import imgDevDirections from '../img/support/dev_directions.svg';

class Development extends Component {
  
    componentDidMount() {
        document.body.setAttribute("page", "development");
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        document.body.removeAttribute("page");
    }

    render() {
        return (
            <React.Fragment>
                <div className="claim">
                    <p>
                        Conoce nuestro <wbr /> trabajo en
                        <span className="emphasys-subline">
                            desarrollo
                        </span>
                    </p>
                </div>

                <section id="ui-ux">
                    <div className="container">

                        <div className="row">
                            <div className="col-sm-11 col-md-5">
                                <h3>Desarrollo</h3>
                                <h4>De las raíces al fruto</h4>
                                <p>Podemos encargarnos de todo el desarrollo de tu proyecto, lo que se ve y lo que no se ve. Tanto si lo que necesitas es una API para nutrir tu servicio, como si es una SPA o una simple <em>landing</em>. Podemos encargarnos de todo o bien engranarnos con tu equipo y poner nuestro grano de arena.</p>
                            </div>
                            <div className="col-sm-11 col-md-5 offset-md-2" align="center">
                                <img src={imgDevTree} alt="Ilustración arbol de ficheros" className="img-responsive mt-50px" width="238" height="238" />
                            </div>
                        </div>

                        <div className="row mt-150px">
                            <div className="col-sm-11 col-md-5 order-md-2 offset-md-2">
                                <h4>Hecho a mano</h4>
                                <p>Cada vez es más habitual ver estudios que se limitan a preparar y adaptar algún CMS y una plantilla que cubra más o menos bien las necesidades del cliente. Nosotros no hacemos eso. Escribimos cada línea con el respeto que se merece para poder cuidar todos los detalles y ser capaces de llegar hasta donde haga falta.</p>
                            </div>
                            <div className="col-sm-11 col-md-5 order-md-1" align="center">
                                <img src={imgDevHandmade} alt="Ilustración hecho a mano" className="img-responsive mt-50px" width="238" height="238" />
                            </div>
                        </div>

                        <div className="row mt-150px">
                            <div className="col-sm-11 col-md-5">
                                <h4>Consultoría</h4>
                                <p>Quizá sólo necesitas un poco de luz y orden para poder empezar tu proyecto. Podemos ayudarte a diseñar estructuras de datos, evitar cuestiones potencialmente problemáticas, resolver dudas técnicas o incluso sentar las bases del proyecto para que tú o tu equipo podáis hacerlo crecer.</p>
                            </div>
                            <div className="col-sm-11 col-md-5 offset-md-2" align="center">
                                <img src={imgDevDirections} alt="Ilustración consultoría" className="img-responsive mt-50px" width="238" height="238" />
                            </div>
                        </div>

                    </div>
                </section>
            
                <MoreFeatures />
                
            </React.Fragment>
        );
    }
}

export default Development;
