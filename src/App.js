import React, { Component } from 'react';
import Home from './Home';
import './scss/style.scss';

class App extends Component {
  render() {
    return (
        <React.Fragment>
            <header className="headroom">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">

                        <a className="navbar-brand" href="./">
                            <img src="img/logo-red-purple.svg" alt="we are Marmota" className="desktop d-none d-sm-block" />
                            <img src="img/logo-red-purple-xs.svg" alt="we are Marmota" className="mobile d-sm-none" />
                        </a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbar-menu">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="<?php echo ($page != 'home' ? './' : ''); ?>#top">Qué hacemos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="<?php echo ($page != 'home' ? './' : ''); ?>#philosophy">Filosofía</a>
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

            <Home />

            <footer>
                <div className="footer-links">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col">
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="https://github.com/wearemarmota" target="_blank" title="we are Marmota en Github">
                                            <img src="img/icons/ic_github.svg" alt="Logo de Github" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col" align="right">
                                <a href="https://wearemarmota.com" title="we are Marmota">
                                    <img src="img/logo-footer.svg" alt="Logo de we are Marmota" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copy">
                    <p>&copy; we are Marmota {new Date().getFullYear()}. <a href="./?page=legal">Aviso legal</a>.</p>
                </div>
            </footer>
        </React.Fragment>
    );
  }
}

export default App;
