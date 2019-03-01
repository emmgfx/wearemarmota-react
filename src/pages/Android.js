import React, { Component } from 'react';

import MoreFeatures from '../components/MoreFeatures';

import imgDevAndroid from '../img/support/dev_android.svg';
import imgDevIos from '../img/support/dev_ios.svg';

class Android extends Component {
  
    componentDidMount() {
        document.body.setAttribute("page", "android");
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
                            Android
                        </span>
                    </p>
                </div>

                <section id="ui-ux">
                    <div className="container">

                        <div className="row">
                            <div className="col-sm-11 col-md-5">
                                <h3>Android</h3>
                                <h4>¿Sólo Android?</h4>
                                <p>Nosotros sí. Usamos Android como usuarios y desarrollamos para él. No queremos engañar a nadie y por eso no te vamos a ofrecer algo en lo que no estamos especializados. Tampoco sería justo que nos dedicaramos a desarrollar para un sistema que no conocemos a nivel de usuario.</p>
                            </div>
                            <div className="col-sm-11 col-md-5 offset-md-2" align="center">
                                <img src={imgDevAndroid} alt="Andy" className="img-responsive mt-50px" width="238" height="238" />
                            </div>
                        </div>

                        <div className="row mt-150px">
                            <div className="col-sm-11 col-md-5 order-md-2 offset-md-2">
                                <h4>Si necesitas iOS</h4>
                                <p>Con Android cubrimos prácticamente 9 de cada 10 dispositivos móviles (según la CNBC). Pero entendemos que tu proyecto puede necesitar estar disponible en todas las plataformas posibles, por eso contamos con algunos partners de confianza para poder ofrecerte un desarrollo universal que cubra Web y Android por nuestra parte y también iOS gracias a ellos.</p>
                            </div>
                            <div className="col-sm-11 col-md-5 order-md-1" align="center">
                                <img src={imgDevIos} alt="Ilustración mockup iPhone" className="img-responsive mt-50px" width="238" height="238" />
                            </div>
                        </div>

                    </div>
                </section>
            
                <MoreFeatures />
                
            </React.Fragment>
        );
    }
}

export default Android;
