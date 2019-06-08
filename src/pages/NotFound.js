import React, { Component } from 'react';
import FeaturesMore from '../components/MoreFeatures';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

class NotFound extends Component {
  
    componentDidMount() {
        document.body.setAttribute("page", "not-found");
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        document.body.removeAttribute("page");
    }

    render() {
                
        return (
            <React.Fragment>

                <Helmet>
                    <title>Página no encontrada - we are Marmota</title>
                </Helmet>

                <section id="not-found" className="">
                    <div className="container text-center">
                        <h2 className="mb-5">Página no encontrada <span role="img" aria-label="Emoticono">😓</span></h2>
                        <p>La página que buscas ya no está aquí o nunca lo ha estado.</p>
                        <p>Puedes <Link to="/">volver a la home</Link> o ver el resto de secciones.</p>
                    </div>
                </section>

                <FeaturesMore />
            </React.Fragment>

        );
    }
}

export default NotFound;
