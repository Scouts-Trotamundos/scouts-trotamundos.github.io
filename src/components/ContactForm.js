// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Navbar from 'react-bootstrap/Navbar'
import { IndexLinkContainer } from 'react-router-bootstrap';

function ContactForm() {
  const [state, handleSubmit] = useForm("mbjqvnaq");
  if (state.succeeded) {
    return (
      <div>
        <div id="message"><p><b>Muchas gracias por mandarnos un mensaje, en cuanto podamos, te daremos responderemos.</b></p></div>
        <IndexLinkContainer to="/">
          <Navbar.Brand href="/" id="brand-name">Volver al inicio</Navbar.Brand>
        </IndexLinkContainer>
      </div>
    );
    // return <p><b>Muchas gracias por mandarnos un mensaje, en cuanto podamos, te daremos responderemos.</b></p>;
  }
  if (state.errors.length > 0) {
    return <div id="errors">{JSON.stringify(state.errors)}</div>;
  }
  return (
    <Container fluid>
      <h1>Rellena el siguiente formulario con tus datos</h1>
      <form onSubmit={handleSubmit} >
        <Row>
          <label htmlFor="name">
            Nombre completo
            <input
              type="text"
              name="Nombre"
              id="name"
              required />
            <ValidationError
              prefix="Nombre completo"
              field="name"
              errors={[
                {
                  field: 'name',
                  message: 'con apellidos',
                  code: 'TYPE_TEXT'
                }
              ]}
            />
          </label>
        </Row>

        <Row>
          <label htmlFor="email">
            Correo electrónico:
            <input
              id="email"
              type="email"
              name="Email"
              required
            />
            <ValidationError
              field="email"
              errors={[
                {
                  field: 'email',
                  message: 'Debe contener un email válido con @',
                  code: 'TYPE_EMAIL'
                }
              ]}
            />
          </label>
        </Row>

        <Row>
          <Col>
            <label htmlFor="birthday"  >Fecha de nacimiento:<br />
              <input type="birthday" name="Fecha de nacimiento" id="birthday" placeholder="DD/MM/AAAA" required />
              <ValidationError
                field="birthday"
                errors={[
                  {
                    field: 'birthday',
                    message: 'Debe contener una fecha válida en formato DD/MM/AAAA',
                    code: 'TYPE_NUMERIC'
                  }
                ]}
              />
            </label>
          </Col>
          <Col>
            <label htmlFor="telephone"  >Número de teléfono<br />
              <input type="telephone" name="Teléfono" id="telephone" placeholder="Teléfono" required />
              <ValidationError
                field="telephone"
                errors={[
                  {
                    field: 'telephone',
                    message: 'Debe contener un teléfono en formato AAA-BBB-CCC.',
                    code: 'TYPE_NUMERIC'
                  }
                ]}
              />
            </label>
          </Col>
        </Row>

        <Row>
          <label htmlFor="observations"  >  Observaciones (TDA, TDAH, TEA, necesidades especiales...):
            <textarea name="Observaciones" id="observations" required></textarea>
            <ValidationError
              field="observations"
              errors={[
                {
                  field: 'observations',
                  message: 'Obligatorio; Si no hay observaciones poner "nada" ',
                  code: 'TYPE_TEXT'
                }
              ]}
            />
          </label>
        </Row>
        <button type="submit" disabled={state.submitting}>Enviar</button>
        <input type="hidden" name="_language" value="es" />
      </form>

      O mándanos un correo electrónico a <a href="mailto: hola@somostrotamundos.org">hola@somostrotamundos.org</a> con la siguiente información:
      <ul>
        <li>Nombre completo</li>
        <li>Fecha de nacimiento (DD/MM/AAAA) </li>
        <li>Teléfono de contacto </li>
        <li>Correo electrónico </li>
        <li>Observaciones (TDA, TDAH, TEA, necesidades especiales...) </li>
      </ul>
    </Container>
  );
}
function ContactFormF() {
  return (
    <ContactForm />
  );
}
export default ContactFormF;