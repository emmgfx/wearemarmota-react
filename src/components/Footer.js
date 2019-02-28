import React, { Component } from 'react';

import imgIconGithub from '../img/icons/ic_github.svg';
import imgLogoFooter from '../img/logo-footer.svg';

class Footer extends Component {
  render() {
    return (
        <footer>
            <div className="footer-links">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col">
                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://github.com/wearemarmota" target="_blank" rel="noopener noreferrer" title="we are Marmota en Github">
                                        <img src={imgIconGithub} alt="Logo de Github" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col" align="right">
                            <a href="https://wearemarmota.com" title="we are Marmota">
                                <img src={imgLogoFooter} alt="Logo de we are Marmota" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copy">
                <p>&copy; we are Marmota {new Date().getFullYear()}. <a href="./?page=legal">Aviso legal</a>.</p>
            </div>
        </footer>
    );
  }
}

export default Footer;
