import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div id="main">
        {/* <!-- Post --> */}
        <article className="post">
          <header>
            <div className="title" id="aboutUsTitle">
              <h2>¿Quieres ponerte en contacto con nosotr@s?</h2>
            </div>
          </header>
          <p>Rellena el siguiente formulario con tus datos (<b>En construcción</b>)</p>
          O mándanos un correo electrónico a <a href="mailto: hola@somostrotamundos.org">hola@somostrotamundos.org</a> con la siguiente información:
          <ul>
            <li>Nombre completo</li>
            <li>Fecha de nacimiento (DD/MM/AAAA) </li>
            <li>Teléfono de contacto </li>
            <li>Correo electrónico </li>
            <li>Observaciones (TDA, TDAH, TEA, necesidades especiales...) </li>
          </ul>
          <footer>
          </footer>
        </article>
      </div>
    );
  }
}

export default Contact;