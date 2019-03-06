import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Headroom from 'headroom.js';

import imgLogoRedPurple from '../img/logo-red-purple.svg';
import imgLogoRedPurpleXS from '../img/logo-red-purple-xs.svg';

class Header extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            isNavbarCollapsed: true
        };

        this.header = React.createRef();
    }

    componentDidMount(){
        var headroom  = new Headroom(this.header.current);
        headroom.offset = 58;
        headroom.init();

        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        this.setState({
            isNavbarCollapsed: true
        });
    }

    toggleNavbarCollapsed = () => {
        this.setState(prevState => ({
            isNavbarCollapsed: !prevState.isNavbarCollapsed
        }));
    }

    navbarCollapseClass = () => {
        let divClass = "navbar-collapse";
        if(this.state.isNavbarCollapsed) divClass += " collapse";
        return divClass;
    }
  
    render() {
        return (
            <React.Fragment>
                <header className="headroom" ref={this.header}>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container">

                            <Link to="/" className="navbar-brand">
                                <img src={imgLogoRedPurple} alt="we are Marmota" className="desktop d-none d-sm-block" />
                                <img src={imgLogoRedPurpleXS} alt="we are Marmota" className="mobile d-sm-none" />
                            </Link>

                            <button onClick={ (evt) => this.toggleNavbarCollapsed()}className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className={this.navbarCollapseClass()} id="navbar-menu">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link smooth to="/#top" className="nav-link">Qué hacemos</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link smooth to="/#philosophy" className="nav-link">Filosofía</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link smooth to="/#contact" className="nav-link">Contacto</Link>
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
