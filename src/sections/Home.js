import React, { Component } from 'react';
import { Link } from "react-router-dom";

import imgGift from '../img/gift.svg';

class Home extends Component {
  render() {
    return (
        <React.Fragment>
            <div className="bg">
                <svg id="drawing" xmlns="http://www.w3.org/2000/svg" width="4638" height="603">
                    <g fill="none" fillRule="evenodd">
                        <path id="path_1" fill="#F6F6F6" d="M4.2e-7-.00000227C296.59538202 83.4029564 500.85072416 172.65488088 612.76602381 267.7557808c206.89431782 175.81006557 449.49583549 156.29424203 502.23397434 131.54729863 217.28344615-101.9585189 487.6129759-85.3275588 673.40158959 18.34475176 605.35044827 337.79295536 911.89315657-33.67946194 1060.69278224-103.67232033 148.79962442-69.9928505 332.56627596-66.59416926 472.07231278.00000477 66.204887 31.6033619 319.69592387 103.67231708 595.08875812-100.05760564 41.58372372-30.7627803 118.2012191-82.24808999 271.50157795-143.22958172 69.31456892-27.57270626 244.72889328-53.38954236 526.24298296-77.45050674L4.2e-7-.00000227z"/>
                        <path id="path_2" fill="#EEE" d="M66.77900638-38.25021682c298.00579151 78.21395292 503.78768445 163.8875365 617.3456794 257.02076094 209.93111454 172.17248499 452.15509168 148.42565449 504.45329464 122.76207134 215.47093131-105.73510913 486.04953884-93.82458285 673.61918733 6.58947953 611.15355041 327.1766858 911.16649306-49.589061 1058.72191118-122.16816475 147.5554184-72.57910572 331.3533868-72.3881148 472.00040462-8.23879845 66.7463584 30.44311397 321.45657395 98.07706548 593.25187736-110.42809824 41.04050563-31.48383003 116.74779916-84.29845654 268.96052593-147.94612206 68.8228019-28.77821283 243.75984389-57.65251899 524.81113588-86.62291707L66.77900638-38.25021682z"/>
                        <g transform="translate(1187 184)">
                            <circle cx="1833.14203" cy="308.142031" r="6.5" fill="#B9E976" transform="rotate(-51 1833.142031 308.142031)"/>
                            <circle cx="1583.75998" cy="124.759976" r="8" fill="#B9E976" transform="rotate(27 1583.759976 124.759976)"/>
                            <circle cx="812.486991" cy="169.396272" r="4.54012376" fill="#B9E976" transform="rotate(40 812.486991 169.396272)"/>
                            <circle cx="613.075324" cy="151.075324" r="9.5" fill="#B9E976" transform="rotate(71 613.075324 151.075324)"/>
                            <circle cx="5.32655001" cy="235.783727" r="4.19054804" fill="#B9E976" transform="rotate(71 5.32655 235.783727)"/>
                            <circle cx="255.393754" cy="310.669296" r="13.6841598" fill="#B9E976" transform="rotate(71 255.393754 310.669296)"/>
                            <circle cx="2010.94968" cy="293.511272" r="27.3815806" stroke="#52E3BF" strokeWidth="7" transform="rotate(-51 2010.949676 293.511272)"/>
                            <circle cx="483.511272" cy="349.511272" r="27.3815806" stroke="#52E3BF" strokeWidth="7" transform="rotate(-51 483.511272 349.511272)"/>
                            <circle cx="287.71396" cy="50.7139599" r="18.2826698" stroke="#52E3BF" strokeWidth="7" transform="rotate(-51 287.71396 50.71396)"/>
                            <circle cx="748.393551" cy="31.3935506" r="9.5" stroke="#52E3BF" strokeWidth="7" transform="rotate(-77 748.393551 31.393551)"/>
                            <circle cx="894.963367" cy="407.963367" r="6.63989581" stroke="#52E3BF" strokeWidth="7" transform="rotate(-77 894.963367 407.963367)"/>
                            <path fill="#BC06E9" d="M1720.34975712 42.02473475l9.30026538-26.35820677 17.36645926 17.98349501zM475.68382938 27.66435647L492.5933948 4.3e-7l15.36765866 24.5933948zM373.47119387 182.9761398l37.09817905 18.44391006-29.59439958 22.30097967z"/>
                            <path fill="#FE214F" d="M1692.34010008 372.94590288l-15.57809675 15.57809675-15.57809675-15.57809675 15.57809675-15.57809675z"/>
                            <circle cx="1719.80689" cy="216.806892" r="15.5047375" stroke="#52E3BF" strokeWidth="7" transform="rotate(-51 1719.806892 216.806892)"/>
                            <circle cx="2192.7596" cy="230.759605" r="13.6841598" fill="#B9E976" transform="rotate(105 2192.759605 230.759605)"/>
                            <circle cx="2124.30458" cy="50.7139599" r="18.2826698" stroke="#52E3BF" strokeWidth="7" transform="rotate(105 2124.304584 50.71396)"/>
                            <circle cx="2436.84715" cy="168.847155" r="10.489658" stroke="#52E3BF" strokeWidth="7" transform="rotate(105 2436.847155 168.847155)"/>
                            <path fill="#BC06E9" d="M1990.5889675 133.4876253l-40.58896866 8.30591923 9.5908503-35.7935406z"/>
                            <path fill="#FE214F" d="M2259.71558415 350.32109196l-3.3210937 12.39449041-12.39449042-3.3210937 3.3210937-12.39449041z"/>
                        </g>
                    </g>
                </svg>
            </div>

            <div className="claim">
                <p>
                    Diseñamos y <wbr /> desarrollamos
                    <span className="type">
                        <del>experiencias digitales<ins data-ins="3"></ins></del><span className="sr-only">, </span>
                        <del>aplicaciones móviles<ins data-ins="3"></ins></del><span className="sr-only">, </span>
                        <del>páginas web<ins data-ins="3"></ins></del><span className="sr-only">, </span>
                        <del>imagen corporativa<ins data-ins="3"></ins></del><span className="sr-only"> y </span>
                        <del>tu proyecto<ins data-ins="3"></ins></del><span className="sr-only">.</span>
                    </span>
                </p>
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
                                    <a href="./?page=development" className="feature-item-wrapper embed-responsive embed-responsive-1by1">
                                        <div className="embed-responsive-item d-flex align-items-center justify-content-center">
                                            <div className="feature-item ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56">
                                                    <path fill="#4A4A4A" fillRule="nonzero" d="M55.382 28.125c0-1.296-.687-2.477-1.841-3.161l-3.036-1.786 3.038-1.805c1.152-.688 1.839-1.868 1.839-3.16 0-1.29-.687-2.471-1.839-3.16-3.794-2.256-16.66-9.902-23.002-13.537-1.468-.844-3.254-.877-4.841.007 0 0-17.248 10.13-22.987 13.53-1.154.684-1.842 1.865-1.842 3.16 0 1.292.688 2.472 1.84 3.16l3.036 1.805-3.034 1.786C1.559 25.648.87 26.829.87 28.125c0 1.291.688 2.472 1.84 3.16l3.036 1.805-3.034 1.785C1.559 35.56.87 36.741.87 38.037c0 1.29.688 2.471 1.84 3.16 4.909 2.92 16.976 10.083 23 13.538a4.868 4.868 0 0 0 2.416.647c.84 0 1.677-.224 2.417-.649 6.023-3.453 18.09-10.617 23-13.537 1.151-.688 1.838-1.868 1.838-3.16 0-1.295-.687-2.476-1.841-3.16l-3.036-1.786 3.038-1.806c1.152-.687 1.839-1.868 1.839-3.159zM3.978 19.248c-.189-.114-.629-.44-.629-1.032 0-.594.438-.919.627-1.03 5.732-3.395 22.955-13.51 22.953-13.51.789-.443 1.65-.426 2.38-.008 6.326 3.626 19.18 11.263 22.966 13.516.189.113.63.44.63 1.032 0 .591-.441.918-.63 1.03-4.902 2.916-16.955 10.072-22.963 13.516a2.362 2.362 0 0 1-2.369 0c-6.01-3.444-18.063-10.6-22.965-13.514zm48.3 17.76c.188.111.626.436.626 1.03 0 .591-.44.918-.629 1.03-4.902 2.916-16.955 10.072-22.963 13.516a2.362 2.362 0 0 1-2.369 0C20.933 49.14 8.88 41.985 3.978 39.07c-.189-.114-.629-.44-.629-1.032 0-.594.438-.919.627-1.03l4.204-2.474c5.683 3.368 13.18 7.794 17.532 10.29a4.868 4.868 0 0 0 2.415.647c.84 0 1.677-.224 2.417-.649 4.35-2.494 11.846-6.92 17.529-10.288l4.205 2.474zm-.003-7.85c-4.902 2.915-16.955 10.071-22.963 13.515a2.362 2.362 0 0 1-2.369 0C20.933 39.23 8.88 32.074 3.978 29.16c-.189-.114-.629-.44-.629-1.032 0-.594.438-.919.627-1.03l4.204-2.474c5.683 3.368 13.18 7.794 17.532 10.29a4.868 4.868 0 0 0 2.415.647c.84 0 1.677-.224 2.417-.649 4.35-2.494 11.846-6.92 17.529-10.288l4.205 2.474c.188.111.626.436.626 1.03 0 .591-.44.918-.629 1.03z"/>
                                                </svg>
                                                <span>Desarrollo</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                                    <a href="./?page=design" className="feature-item-wrapper embed-responsive embed-responsive-1by1">
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
                                    </a>
                                </div>

                                <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                                    <a href="./?page=android" className="feature-item-wrapper embed-responsive embed-responsive-1by1">
                                        <div className="embed-responsive-item d-flex align-items-center justify-content-center">
                                            <div className="feature-item ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56">
                                                    <path fill="#4A4A4A" fillRule="nonzero" d="M46.676 10.065c5.68 5.115 9.25 12.527 9.25 20.773a1.25 1.25 0 0 1-1.253 1.25 6506.706 6506.706 0 0 0-30.332-.022l-4.334.006c-6.299.01-11.649.015-18.73.016-.69 0-1.25-.56-1.25-1.25 0-8.25 3.575-15.667 9.26-20.783l-6.17-6.171a1.25 1.25 0 0 1 1.767-1.768l6.185 6.185c.053.054.101.11.143.171a27.826 27.826 0 0 1 16.764-5.584A27.826 27.826 0 0 1 44.74 8.471l6.124-6.34a1.25 1.25 0 1 1 1.798 1.737l-5.985 6.197zm-18.7-4.677c-13.636 0-24.767 10.725-25.42 24.2 6.459-.002 11.535-.007 17.448-.016l4.333-.006 4.027-.006c7.408-.008 14.029-.003 25.032.025-.654-13.474-11.784-24.197-25.42-24.197zM11 24a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm33 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM2 34h52a2 2 0 0 1 2 2v13.615a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V36a2 2 0 0 1 2-2zm.5 2.5v12.615h51V36.5h-51z"/>
                                                </svg>
                                                <span>Android</span>
                                            </div>
                                        </div>
                                    </a>
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

            <section id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1 col-lg-5 offset-lg-0">
                            <h3>HOLA</h3>
                            <h4>Contacta con nosotros</h4>
                            <p>¿Quieres hacer un proyecto con nosotros? ¿Preguntarnos alguna cosa? ¿Invitarnos a un café?</p>
                            <p>Puedes escribirnos a nuestro correo electrónico <a href="mailto: hola@wearemarmota.com">hola@wearemarmota.com</a> o enviarnos tu consulta usando el formulario de contacto de la página web.</p>
                            <p>¡Encantados de conocerte!</p>
                        </div>
                        <div className="col-md-10 offset-md-1 col-lg-6 offset-lg-1">
                            <form id="contact" method="post" action="contact-send.php">
                                <div className="form-group">
                                    <label>Nombre</label>
                                    <input type="text" name="name" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Correo electrónico</label>
                                    <input type="email" name="email" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Tu mensaje</label>
                                    <textarea className="form-control" name="message" rows="5" required></textarea>
                                </div>
                                <div className="form-group" align="right">
                                    <button type="submit" className="btn-contact">Enviar</button>
                                    <div id="grecaptcha"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
  }
}

export default Home;