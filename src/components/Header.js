import React, { Component } from 'react';
import { Link } from "react-router-dom";

import imgLogoRedPurple from '../img/logo-red-purple.svg';
import imgLogoRedPurpleXS from '../img/logo-red-purple-xs.svg';

class Header extends Component {
  render() {
    return (
        <React.Fragment>
            <header className="headroom">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">

                        <Link to="/" className="navbar-brand">
                            <img src={imgLogoRedPurple} alt="we are Marmota" className="desktop d-none d-sm-block" />
                            <img src={imgLogoRedPurpleXS} alt="we are Marmota" className="mobile d-sm-none" />
                        </Link>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbar-menu">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to="/#top" className="nav-link">Qué hacemos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/#philosophy" className="nav-link">Filosofía</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="<?php echo ($page != 'home' ? './' : ''); ?>#contact">Contacto</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <div className="header-placeholder"></div>
        </React.Fragment>
    );
  }
}

export default Header;
