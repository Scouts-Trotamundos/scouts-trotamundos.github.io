import React, { Component } from 'react';
import {
  NavLink,
} from "react-router-dom";

import Image from 'react-bootstrap/Image'

import fotoTrota from '../assets/images/foto_trota_campa_20-21.jpg';
class AboutUs extends Component {
  render() {
    return (
      <div id="main">
        {/* <!-- Post --> */}
        <article className="post">
          <header>
            <div className="title" id="aboutUsTitle">
              <h2>¿Tienes alguna duda sobre nosotr@s? Lee atentamente a continuación</h2>
            </div>

          </header>
          <a href={fotoTrota} className="image featured"><Image src={fotoTrota} alt="trota" fluid /></a>

          <h2>¿QUIÉNES SOMOS EL GRUPO SCOUT TROTAMUNDOS?</h2>
          <p>Somos una asociación juvenil sin ánimo de lucro, donde niños y niñas de todas las edades reciben educación en valores a través del juego y la práctica. Los chicos y chicas adquieren autonomía, sentido crítico y confianza mientras se divierten.</p>

          <h2>¿ES GRATIS?¿CUÁNTO TENGO QUE PAGAR?</h2>
          <p>
            La cuota mensual es de 40€, los cuales se destinan a mantener la estructura del grupo, pagar el material necesario para realizar actividades, cubrir el seguro de cada niño y niña y a sufragar una parte muy importante del campamento de verano.
          </p>

          <h2>
            ¿CUÁNDO Y DÓNDE NOS REUNIMOS?</h2>
          <p>
            Nos reunimos en el C.E.I.P Las Castañeras, puedes encontrar más información en nuestro apartado de <NavLink to="/ubication">Ubicación</NavLink>.
            <br></br>
            Estámos ahí todos los sábados, de 17:00 a 19:30, excepto en casos puntuales como salidas o campamentos, en los que se avisaría con tiempo de antelación de dónde se quedaría.
          </p>

          <h2>¿QUIÉNES SON LOS SCOUTERS?</h2>
          <p>Son voluntarios y voluntarias que programan las actividades y están a cargo de los chicos y chicas, los cuales tienen una formación amplia y diversa (profesores, pedagogos, enfermeros…), así como la titulación requerida por la Comunidad de Madrid para poder organizar actividades juveniles.</p>

          <h2>¿QUÉ ES UNA SECCIÓN?</h2>
          <p>Una sección es un agrupación por edad de un grupo de niños y niñas. Esta separación se corresponde con la separación que se suele hacer en los colegios por cursos, para poder trabajar y jugar, por similitud física y mental.</p>
          En este caso, en nuestro grupo, tenemos las siguientes secciones.
          <ul>
            <li>
              {/* <NavLink to="/section/castores"> */}
                Colonia Ottawa (6-8 años)
                {/* </NavLink> */}
                </li>
            <li>
              {/* <NavLink to="/section/manada"> */}
                Manada Nathoo (8-11 años)
                {/* </NavLink> */}
                </li>
            <li>
              {/* <NavLink to="/section/tropa"> */}
                Tropa Siksika (11-14 años)
                {/* </NavLink> */}
                </li>
            <li>
              {/* <NavLink to="/section/esculta"> */}
                Esculta Ragnarok (14-17 años)
                {/* </NavLink> */}
                </li>
            <li>
              {/* <NavLink to="/section/clan"> */}
                Clan Bushido (17-21 años)
                {/* </NavLink> */}
                </li>
          </ul>

          <h2>¿CÓMO ENTRAR EN EL GRUPO?</h2>
          <p>Para entrar en el grupo, lo primero que tienes que hacer es ponerte en contacto con nosotros  usando el formulario que hemos creado en la página de Conctacto.<br></br>
            Puede que tengamos lista de espera en la sección deseada, pero te lo diremos a traves de un correo cuando te pongas en contacto con nosotros a través del fomulario.</p>

          <h2>¿QUÉ MATERIAL NECESITAN?</h2>
          <p>Inicialmente, para las actividades de los sábados, ninguno u objetos de uso cotidiano para la realización de algún taller si se diese el caso, como rollos de cartón, botellas, etc. Para los cuáles ya se informaría con tiempo para poder comprarlos
            Más adelante, con la primera salida, necesitarán material de acampada: macuto, cantimplora o chubasquero entre otros.<br></br>
            En nuestra sección de material, tenéis más información sobre qué material necesitáis y dónde podéis conseguirlo</p>

          <h2>¿QUÉ ROPA HAY QUE LLEVAR PUESTA?</h2>
          <p>No nos vestimos como en las películas, al igual que “no vendemos galletitas”.<br></br>
            En Trotamundos nuestra ropa habitual sera el polo oficial de ASDE (Asociación de Scouts de España, organismo al que pertenecemos), la pañoleta, unos vaqueros y unas zapatillas.<br></br>
            Con la primera salida los chicos y chicas necesitarán ropa más específica, como botas de montaña o chubasquero, lo cual se concretará según se acerque el momento.<br></br>
            La idea es que los scouts estén cómodos para jugar y desenvolverse en la naturaleza.</p>

          <h2>¿QUÉ ES LA PAÑOLETA?</h2>
          <p>Es el pañuelo que llevamos colgado al cuello y que representa los colores de nuestro grupo.
            Cuando los chicos y chicas entran en Trotamundos se les da la base de la pañoleta, en nuestro caso de dos colores, a la que cosen las cintas correspondientes a cada sección cuando hacen la promesa de la misma.<br></br>
            Así, la pañoleta y la promesa simbolizan el compromiso del scout con su sección, su grupo y una forma de vida que se concreta en ser un buen ciudadano y ciudadana y preservar la naturaleza disfrutando de ella.</p>

          <h2>¿PERTENECÉIS A ALGUNA FEDERACIÓN SCOUT?</h2>
          <p>Nuestro grupo es miembro de Exploradores de Madrid que es una federación perteneciente a ASDE Scouts de España.</p>

          <h2>¿TIENES MÁS DUDAS?</h2>
          <p>
            Si quieres consultarnos cualquier otra cosa, no dudes en rellenar el formulario de la seccion de <NavLink to="/contact">Contacto</NavLink>.</p>
          <div>
          </div>
        </article>
      </div>
    );
  }
}

export default AboutUs;