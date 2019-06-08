import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Typist from 'react-typist';
import { Helmet } from 'react-helmet';

import Contact from '../components/Contact';

import imgGift from '../img/gift.svg';

class Home extends Component {
    
    componentDidMount() {
        document.body.setAttribute("page", "home");
        window.scrollTo(0, 0);
    }
    
    componentWillUnmount() {
        document.body.removeAttribute("page");
    }

    render() {
        return (
            <React.Fragment>

                <Helmet>
                    <title>we are Marmota</title>
                </Helmet>

                <div id="top" className="claim">
                    Diseñamos y <wbr /> desarrollamos
                    
                    <Typist>
                        <span>experiencias digitales</span>
                        <Typist.Backspace count={22} delay={500} />
                        <span>aplicaciones móviles</span>
                        <Typist.Backspace count={20} delay={500} />
                        <span>páginas web</span>
                        <Typist.Backspace count={11} delay={500} />
                        <span>imagen corporativa</span>
                        <Typist.Backspace count={18} delay={500} />
                        <span>tu proyecto</span>
                    </Typist>
                </div>

                <section id="features">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 ml-auto mr-auto">
                                <div className="row">
                                    <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                                        <Link to="/ui-ux" className="feature-item-wrapper embed-responsive embed-responsive-1by1">
                                            <div className="embed-responsive-item d-flex align-items-center justify-content-center">
                                                <div className="feature-item ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56">
                                                        <path fill="#4A4A4A" fillRule="nonzero" d="M42.197 27.817l11.76-11.655a5.005 5.005 0 0 0 1.477-3.563c0-1.346-.524-2.611-1.476-3.563l-7.56-7.56c-1.904-1.904-5.217-1.908-7.13.004L27.618 13.237 14.75.369a1.26 1.26 0 0 0-1.782 0L.37 12.968a1.26 1.26 0 0 0 0 1.781l12.933 12.932-7.897 7.968c-.15.151-.258.337-.317.541L.048 53.828a1.26 1.26 0 0 0 1.558 1.558l17.638-5.04c.204-.059.39-.167.541-.317l7.968-7.896 12.932 12.932a1.256 1.256 0 0 0 1.781 0l12.6-12.599a1.26 1.26 0 0 0 0-1.781L42.196 27.817zM41.054 3.258c.952-.952 2.61-.952 3.563 0l7.56 7.56c.475.475.737 1.108.737 1.78a2.5 2.5 0 0 1-.734 1.779l-5.555 5.505L35.552 8.81l5.502-5.55zM13.12 23.938l4.148-4.15a1.26 1.26 0 1 0-1.781-1.78l-4.149 4.148-3.258-3.258 4.149-4.149a1.26 1.26 0 1 0-1.782-1.781L6.3 17.117l-3.258-3.258L13.859 3.042l11.985 11.984-10.769 10.866-1.954-1.955zm20.658-13.339l4.637 4.638-24.212 24.212-1.738-3.476a1.26 1.26 0 0 0-1.127-.697H9.321L33.78 10.6zM3.095 52.339l1.64-5.744 4.104 4.103-5.744 1.642zm14.543-4.154l-6.028 1.722-6.083-6.083 1.722-6.028h3.311l2.172 4.343c.121.244.32.442.563.563l4.343 2.172v3.31zm2.52-2.072v-2.018c0-.477-.27-.913-.696-1.127l-3.477-1.737 24.213-24.213 4.637 4.638-24.677 24.457zm21.418 6.28l-3.258-3.258 4.148-4.149a1.26 1.26 0 1 0-1.781-1.781l-4.149 4.148-3.258-3.258 4.15-4.148a1.26 1.26 0 1 0-1.782-1.782l-4.15 4.149-1.954-1.955 10.866-10.768 11.985 11.985-10.817 10.817z"/>
                                                    </svg>
                                                    <span>UX/UI</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                                        <Link to="/development" className="feature-item-wrapper embed-responsive embed-responsive-1by1">
                                            <div className="embed-responsive-item d-flex align-items-center justify-content-center">
                                                <div className="feature-item ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56">
                                                        <path fill="#4A4A4A" fillRule="nonzero" d="M55.382 28.125c0-1.296-.687-2.477-1.841-3.161l-3.036-1.786 3.038-1.805c1.152-.688 1.839-1.868 1.839-3.16 0-1.29-.687-2.471-1.839-3.16-3.794-2.256-16.66-9.902-23.002-13.537-1.468-.844-3.254-.877-4.841.007 0 0-17.248 10.13-22.987 13.53-1.154.684-1.842 1.865-1.842 3.16 0 1.292.688 2.472 1.84 3.16l3.036 1.805-3.034 1.786C1.559 25.648.87 26.829.87 28.125c0 1.291.688 2.472 1.84 3.16l3.036 1.805-3.034 1.785C1.559 35.56.87 36.741.87 38.037c0 1.29.688 2.471 1.84 3.16 4.909 2.92 16.976 10.083 23 13.538a4.868 4.868 0 0 0 2.416.647c.84 0 1.677-.224 2.417-.649 6.023-3.453 18.09-10.617 23-13.537 1.151-.688 1.838-1.868 1.838-3.16 0-1.295-.687-2.476-1.841-3.16l-3.036-1.786 3.038-1.806c1.152-.687 1.839-1.868 1.839-3.159zM3.978 19.248c-.189-.114-.629-.44-.629-1.032 0-.594.438-.919.627-1.03 5.732-3.395 22.955-13.51 22.953-13.51.789-.443 1.65-.426 2.38-.008 6.326 3.626 19.18 11.263 22.966 13.516.189.113.63.44.63 1.032 0 .591-.441.918-.63 1.03-4.902 2.916-16.955 10.072-22.963 13.516a2.362 2.362 0 0 1-2.369 0c-6.01-3.444-18.063-10.6-22.965-13.514zm48.3 17.76c.188.111.626.436.626 1.03 0 .591-.44.918-.629 1.03-4.902 2.916-16.955 10.072-22.963 13.516a2.362 2.362 0 0 1-2.369 0C20.933 49.14 8.88 41.985 3.978 39.07c-.189-.114-.629-.44-.629-1.032 0-.594.438-.919.627-1.03l4.204-2.474c5.683 3.368 13.18 7.794 17.532 10.29a4.868 4.868 0 0 0 2.415.647c.84 0 1.677-.224 2.417-.649 4.35-2.494 11.846-6.92 17.529-10.288l4.205 2.474zm-.003-7.85c-4.902 2.915-16.955 10.071-22.963 13.515a2.362 2.362 0 0 1-2.369 0C20.933 39.23 8.88 32.074 3.978 29.16c-.189-.114-.629-.44-.629-1.032 0-.594.438-.919.627-1.03l4.204-2.474c5.683 3.368 13.18 7.794 17.532 10.29a4.868 4.868 0 0 0 2.415.647c.84 0 1.677-.224 2.417-.649 4.35-2.494 11.846-6.92 17.529-10.288l4.205 2.474c.188.111.626.436.626 1.03 0 .591-.44.918-.629 1.03z"/>
                                                    </svg>
                                                    <span>Desarrollo</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                                        <Link to="/design" className="feature-item-wrapper embed-responsive embed-responsive-1by1">
                                            <div className="embed-responsive-item d-flex align-items-center justify-content-center">
                                                <div className="feature-item">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56">
                                                        <g fill="#4A4A4A" fillRule="nonzero">
                                                            <path d="M38.412 47.817a5.688 5.688 0 0 0-6.739-4.376 5.688 5.688 0 0 1-6.738-4.376 5.688 5.688 0 0 1 4.376-6.738c1.291-.275 3.628.558 6.103 1.441 3.485 1.242 7.436 2.651 10.874 1.92 6.129-1.302 10.055-7.349 8.752-13.477C51.914 7.503 37.404-1.92 22.696 1.206 7.987 4.332-1.436 18.843 1.69 33.551c3.126 14.708 17.636 24.131 32.345 21.005a5.688 5.688 0 0 0 4.376-6.739zM3.914 33.078C1.048 19.596 9.685 6.295 23.168 3.43 36.651.563 49.952 9.201 52.818 22.684c1.042 4.902-2.1 9.74-7.002 10.781-2.809.597-6.437-.696-9.639-1.838-2.907-1.037-5.418-1.932-7.339-1.523-4.29.912-7.038 5.144-6.126 9.434.911 4.29 5.144 7.038 9.434 6.126a3.413 3.413 0 0 1 4.043 2.626 3.413 3.413 0 0 1-2.626 4.043C20.08 55.199 6.779 46.561 3.913 33.078z"/>
                                                            <path d="M17.251 30.244a4.55 4.55 0 0 0-5.39-3.501 4.55 4.55 0 0 0-3.502 5.39 4.55 4.55 0 0 0 5.391 3.501 4.55 4.55 0 0 0 3.501-5.39zm-6.669 1.417a2.276 2.276 0 0 1 1.75-2.695 2.276 2.276 0 0 1 2.696 1.75 2.276 2.276 0 0 1-1.75 2.695 2.276 2.276 0 0 1-2.696-1.75zM19.334 18.184a4.55 4.55 0 0 0-5.39-3.5 4.55 4.55 0 0 0-3.501 5.39 4.55 4.55 0 0 0 5.39 3.5 4.55 4.55 0 0 0 3.501-5.39zM12.666 19.6a2.276 2.276 0 0 1 1.75-2.695 2.276 2.276 0 0 1 2.695 1.75 2.276 2.276 0 0 1-1.75 2.696 2.275 2.275 0 0 1-2.695-1.75zM41.563 13.459a4.55 4.55 0 0 0-5.39-3.5 4.55 4.55 0 0 0-3.501 5.39 4.55 4.55 0 0 0 5.39 3.5 4.55 4.55 0 0 0 3.501-5.39zm-6.668 1.417a2.276 2.276 0 0 1 1.75-2.695 2.276 2.276 0 0 1 2.695 1.75 2.276 2.276 0 0 1-1.75 2.696 2.275 2.275 0 0 1-2.695-1.75zM39.48 25.519a4.55 4.55 0 0 0 5.391 3.5 4.55 4.55 0 0 0 3.5-5.39 4.55 4.55 0 0 0-5.39-3.501 4.55 4.55 0 0 0-3.5 5.39zM46.15 24.1a2.276 2.276 0 0 1-1.75 2.695 2.276 2.276 0 0 1-2.696-1.75 2.276 2.276 0 0 1 1.75-2.695 2.276 2.276 0 0 1 2.696 1.75zM26.003 16.766a4.55 4.55 0 0 0 3.501-5.39 4.55 4.55 0 0 0-5.39-3.501 4.55 4.55 0 0 0-3.502 5.39 4.55 4.55 0 0 0 5.391 3.501zm-1.417-6.668a2.276 2.276 0 0 1 2.695 1.75 2.276 2.276 0 0 1-1.75 2.695 2.276 2.276 0 0 1-2.696-1.75 2.276 2.276 0 0 1 1.75-2.695z"/>
                                                        </g>
                                                    </svg>
                                                    <span>Diseño</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                                        <Link to="/android" className="feature-item-wrapper embed-responsive embed-responsive-1by1">
                                            <div className="embed-responsive-item d-flex align-items-center justify-content-center">
                                                <div className="feature-item ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56">
                                                        <path fill="#4A4A4A" fillRule="nonzero" d="M46.676 10.065c5.68 5.115 9.25 12.527 9.25 20.773a1.25 1.25 0 0 1-1.253 1.25 6506.706 6506.706 0 0 0-30.332-.022l-4.334.006c-6.299.01-11.649.015-18.73.016-.69 0-1.25-.56-1.25-1.25 0-8.25 3.575-15.667 9.26-20.783l-6.17-6.171a1.25 1.25 0 0 1 1.767-1.768l6.185 6.185c.053.054.101.11.143.171a27.826 27.826 0 0 1 16.764-5.584A27.826 27.826 0 0 1 44.74 8.471l6.124-6.34a1.25 1.25 0 1 1 1.798 1.737l-5.985 6.197zm-18.7-4.677c-13.636 0-24.767 10.725-25.42 24.2 6.459-.002 11.535-.007 17.448-.016l4.333-.006 4.027-.006c7.408-.008 14.029-.003 25.032.025-.654-13.474-11.784-24.197-25.42-24.197zM11 24a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm33 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM2 34h52a2 2 0 0 1 2 2v13.615a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V36a2 2 0 0 1 2-2zm.5 2.5v12.615h51V36.5h-51z"/>
                                                    </svg>
                                                    <span>Android</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="philosophy">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-11 col-md-5">
                                <h3>Filosofía</h3>
                                <h4>Nuestra cultura</h4>
                                <p>En Marmota nos tomamos muy en serio nuestro trabajo y con él queremos mejorar el mundo. Por eso, colaboramos con diversas instituciones y proyectos solidarios, desarrollando productos gráficos y digitales que ayuden a ampliar su campo de acción.</p>
                                <p>Además, donamos un 3% de los beneficios de cada proyecto a diversas instituciones que llevan a cabo proyectos solidários. Por eso, colaborando con nosotros, tú tambien participas.</p>
                            </div>
                            <div className="col-sm-11 col-md-5 offset-md-2" align="center">
                                <img src={imgGift} alt="Caja de regalo con corazones" className="img-responsive mt-50px" />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="quote">
                    <div className="container">
                        <blockquote>
                            <p>“Para desarrollar la creatividad solo hace falta tener la firme voluntad de hacer algo y dedicarle tiempo”</p>
                            <cite>David Peña “Puño”</cite>
                        </blockquote>
                    </div>
                </section>
                
                <Contact />
                
            </React.Fragment>
        );
    }
}

export default Home;
