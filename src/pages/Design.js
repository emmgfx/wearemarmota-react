import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import MoreFeatures from '../components/MoreFeatures';

import imgDesignColorChart from '../img/support/design_color-chart.svg';

class Design extends Component {
  
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

            <Helmet>
                <title>Diseño - we are Marmota</title>
            </Helmet>

                <div className="claim">
                    <p>
                        Conoce nuestro <wbr /> trabajo en
                        <span className="emphasys-subline">
                            diseño
                        </span>
                    </p>
                </div>

                <section id="ui-ux">
                    <div className="container">

                        <div className="row">
                            <div className="col-sm-11 col-md-7">
                                <h3>Diseño gráfico</h3>
                                <h4>El proceso de diseño gráfico</h4>
                                <p>Tu imagen es mucho más que un logo, son tus valores y tu filosofía como negocio. Por eso, valoramos y adaptamos nuestro trabajo a tu enfoque para hacerle llegar a tu público tu esencia.</p>
                                <p>Nuestras habilidades y partners de confianza nos permiten cubrir campos tan diversos como la ilustración, el diseño editorial o el diseño de marca o branding y aplicaciones corportivas.</p>
                                <p>¿Quieres saber cómo lo hacemos?</p>
                            </div>
                            <div className="col-sm-11 col-md-5" align="center">
                                <img src={imgDesignColorChart} alt="Ilustración carta de color" className="img-responsive mt-50px" width="238" height="238" />
                            </div>
                        </div>

                        <div className="timeline">
                            <div className="line"></div>
                            <div className="line-start"></div>
                            <ul className="list-unstyled">
                                <li className="">01. Investigación</li>
                                <li className="">02. Plan y estrategia</li>
                                <li className="">03. Ideación y bocetado</li>
                                <li className="">04. Detalles finales</li>
                                <li className="">05. Aplicaciones</li>
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

export default Design;
