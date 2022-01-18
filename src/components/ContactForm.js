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
            Nombre completo de la persona que está contactando
            <input
              type="text"
              name="Nombre"
              id="name"
              required />
            <ValidationError
              prefix="Nombre "
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
            <label htmlFor="child_name">
              Nombre completo del niño o niña
              <input
                type="text"
                name="Nombre del niñx"
                id="name"
                required />
              <ValidationError
                prefix="Nombre completo del niño o niña "
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
          </Col>
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
                    message: 'Fecha formato DD/MM/AAAA',
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
                    message: 'Teléfono en formato AAA-BBB-CCC.',
                    code: 'TYPE_NUMERIC'
                  }
                ]}
              />
            </label>
          </Col>
        </Row>

        <Row>
          <label htmlFor="observations"  >  Observaciones (alergias, miedos, TDA, TDAH, TEA, necesidades especiales...):
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
    </Container>
  );
}
function ContactFormF() {
  return (
    <ContactForm />
  );
}
export default ContactFormF;