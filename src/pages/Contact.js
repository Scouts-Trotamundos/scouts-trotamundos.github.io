import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
          {/* https://help.formspree.io/hc/en-us/articles/360053239754-Getting-started-with-projects */}
          <Container fluid>
            <form
              action="https://formspree.io/f/mbjqvnaq"
              method="POST"
            >
              <Row>
                <label>
                  Nombre completo:
                  <input type="text" name="Nombre" />
                </label>
              </Row>

              <Row>
                <label>
                  Correo electrónico:
                  <input type="email" name="Email:" />
                </label>
              </Row>

              <Row>
                <Col>
                  <label htmlFor="birthday">Fecha de nacimiento:<br />
                    <input type="birthday" name="Fecha de nacimiento" id="birthday" placeholder="DD/MM/AAAA" />
                  </label>
                </Col>
                <Col>
                  <label htmlFor="telephone">Número de teléfono<br />
                    <input type="telephone" name="Teléfono" id="telephone" placeholder="Teléfono" />
                  </label>
                </Col>
              </Row>

              <Row>
                <label>  Observaciones (TDA, TDAH, TEA, necesidades especiales...):
                  <textarea name="Observaciones"></textarea>
                </label>
              </Row>
              <button type="submit">Enviar</button>
            </form>
          </Container>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
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