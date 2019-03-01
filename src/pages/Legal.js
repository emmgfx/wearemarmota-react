import React, { Component } from 'react';

class Legal extends Component {
  
    componentDidMount() {
        document.body.setAttribute("page", "legal");
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        document.body.removeAttribute("page");
    }

    render() {
        
        const LEGAL_DOMAIN = 'wearemarmota.com';
        const LEGAL_NAME = 'Josep Viciana';
        const LEGAL_LOCATION = 'Barcelona';
        const LEGAL_ADDRESS = 'Gibert 10, 1A (08223)';
        const LEGAL_NIF = '45641483F';
        
        return (
            <React.Fragment>

            <section className="pt-1">
                <div className="container">
                    <h3><strong>CONDICIONES GENERALES DE USO DEL SITIO WEB DE {LEGAL_NAME}</strong></h3>
                    <span><strong>{LEGAL_DOMAIN}</strong></span>

                    <p>
                    {LEGAL_NAME} (EN ADELANTE EL PROPIETARIO) con domicilio a efectos de notificaciones en {LEGAL_ADDRESS} con NIF {LEGAL_NIF} pone a disposición en su sitio web  {LEGAL_DOMAIN} determinados  contenidos de carácter informativo sobre sus actividades. Las presentes condiciones generales rigen única y exclusivamente el uso del sitio web de EL PROPIETARIO por parte de los USUARIOS que accedan al mismo. Las presentes condiciones generales se le exponen al USUARIO en el sitio web {LEGAL_DOMAIN}  en todas y cada una de las páginas, para que las lea, las imprima, archive y acepte a través de internet y se encuentre plenamente informado.
                    </p>

                    <p>
                    El acceso al sitio web de EL PROPIETARIO implica sin reservas la aceptación de las presentes condiciones generales de uso que el USUARIO afirma comprender en su totalidad. El USUARIO se compromete no a utilizar el sitio web y los servicios que se ofrecen en el mismo para la realización de actividades contrarias a la ley y a respetar en todo momento las presentes condiciones generales.
                    </p>

                    <p><strong>PRIMERA.- CONDICIONES DE ACCESO Y USO</strong></p>
                    <blockquote>
                    <p>
                    <strong>1.1.-</strong> La utilización del sitio web de EL PROPIETARIO, no conlleva la obligatoriedad de inscripción del USUARIO. Las condiciones de acceso y uso del presente sitio web se rigen estrictamente por la legalidad vigente y por el principio de buena fe comprometiéndose el USUARIO a realizar un buen uso de la web.  Quedan prohibidos todos los actos que vulneren la legalidad, derechos o intereses de terceros: derecho a la intimidad, protección de datos, propiedad intelectual etc. Expresamente EL PROPIETARIO prohíbe los siguientes:
                    </p>
                    <blockquote>
                    <p>
                    <strong>1.1.1.-</strong> Realizar acciones que puedan producir en el sitio web o a través del mismo por cualquier medio cualquier tipo de daño a los sistemas de EL PROPIETARIO  o a terceros.
                    </p>

                    <p>
                    <strong>1.1.2.-</strong> Realizar sin la debida autorización cualquier tipo de publicidad o información comercial directamente o de forma encubierta, el envío de correos masivos ("spaming") o envío de grandes mensajes con el fin de bloquear servidores de la red ("mail bombing")
                    </p>
                    </blockquote>
                    <p>
                    <strong>1.2.-</strong> EL PROPIETARIO, podrá interrumpir en cualquier momento el acceso a su sitio web si detecta un uso contrario a la legalidad, la buena fe o a las presentes condiciones generales- ver cláusula quinta.
                    </p>
                    </blockquote>
                    <p><strong>SEGUNDA.- CONTENIDOS.-</strong>Los contenidos incorporados en este sitio web han sido elaborados e incluidos por:
                    </p>

                    <blockquote>
                    <p>
                    <strong>2.1.-</strong> EL PROPIETARIO utilizando fuentes internas y externas de tal modo que EL PROPIETARIO únicamente se hace responsable por los contenidos elaborados de forma interna.
                    </p>


                    <p>
                    <strong>2.2.- </strong> EL PROPIETARIO se reserva el derecho a modificar en cualquier momento los contenidos existentes en su sitio web. EL PROPIETARIO no asegura ni se responsabiliza del correcto funcionamiento de los enlaces a sitios web de terceros que figuren en {LEGAL_DOMAIN}. Además a través del sitio web del PROPIETARIO se ponen a disposición del usuario servicios gratuítos y de pago ofrecidos por terceros ajenos y que se regirán por las condiciones particulares de cada uno de éllos. EL PROPIETARIO no garantiza la veracidad, exactitud o actualidad de los contenidos y servicios ofrecidos por terceros y queda expresamente exento de todo tipo de responsabilidad por los daños y perjuicios que puedan derivarse de la falta de exactitud de estos contenidos y servicios.
                    </p>


                    </blockquote>

                    <p><strong>TERCERA.- RESPONSABILIDAD.-</strong></p>
                    <blockquote>
                    <p>
                    <strong>3.1.-</strong> EL PROPIETARIO en ningún caso será responsable de:
                    </p>

                    <blockquote>
                    <p>
                    <strong>3.1.1.-</strong> Los fallos e incidencias que pudieran producirse en las comunicaciones, borrado o transmisiones incompletas de manera que no se garantiza que los servicios del sitio web estén constantemente operativos.
                    </p>

                    <p>
                    <strong>3.1.2.-</strong> De la producción de cualquier tipo de daño que los USUARIOS o terceros pudiesen ocasionar en el sitio web.
                    </p>
                    <p>
                    <strong>3.1.3.-</strong> De la fiabilidad y veracidad de las informaciones introducidas por terceros en el sitio web, bien directamente, bien a través de enlaces o links. Asimismo, {LEGAL_NAME} colaborará y notificará a la autoridad competente estas incidencias en el momento en que tenga conocimiento fehaciente de que los daños ocasionados constituyan cualquier tipo de actividad ilícita.
                    </p>
                    </blockquote>

                    <p>
                    <strong>3.2.-</strong> EL PROPIETARIO se reserva el derecho a suspender el acceso sin previo aviso de forma discrecional y con carácter definitivo o temporal hasta el aseguramiento de la efectiva responsabilidad de los daños que pudieran producirse. Asimismo, EL PROPIETARIO colaborará y notificará a la autoridad competente estas incidencias en el momento en que tenga conocimiento fehaciente de que los daños ocasionados constituyan cualquier tipo de actividad ilícita.
                    </p>
                    </blockquote>

                    <p><strong>CUARTA.- DERECHOS DE AUTOR Y MARCA.- </strong>El sitio web de EL PROPIETARIO - los contenidos propios, la programación y el diseño del sitio web- se encuentra plenamente protegido por los derechos de autor, quedando expresamente prohibida toda reproducción, comunicación, distribución y transformación de los referidos elementos protegidos salvo consentimiento expreso de EL PROPIETARIO. Los materiales tanto gráficos como escritos enviados por los usuarios a través de los medios que se ponen a su disposición en el sitio web son propiedad del usuario que afirma al enviarlos su legítima autoría y cede los derechos de reproducción y distribución al PROPIETARIO.
                    </p>

                    <p><strong>QUINTA.- JURISDICCIÓN Y LEY APLICABLE.- </strong>Las presentes condiciones generales se rigen por la legislación española. Son competentes para resolver toda controversia o conflicto que se derive de las presentes condiciones generales los Juzgados de {LEGAL_LOCATION} renunciando expresamente el USUARIO a cualquier otro fuero que pudiera corresponderle.
                    </p>

                    <p><strong>SEXTA.-</strong>En caso de que cualquier cláusula del presente documento sea declarada nula, las demás cláusulas seguirán vigentes y se interpretarán teniendo en cuenta la voluntad de las partes y la finalidad misma de las presentes condiciones. EL PROPIETARIO podrá no ejercitar alguno de los derechos y facultades conferidos en este documento lo que no implicará en ningún caso la renuncia a los mismos salvo reconocimiento expreso por parte de EL PROPIETARIO.
                    </p>
                </div>
                </section>
                
            </React.Fragment>
        );
    }
}

export default Legal;
