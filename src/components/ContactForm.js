// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ContactForm() {
  const [state, handleSubmit] = useForm("mbjqvnaq");
  if (state.succeeded) {
    return <p><b>Muchas gracias por mandarnos un mensaje, en cuanto podamos, te daremos responderemos.</b></p>;
  }
  if (state.errors) {
    console.log(state.errors)
  }
  
  return (
    <Container fluid>
      
      <p>Rellena el siguiente formulario con tus datos (<b>En construcción</b>)</p>
      <form onSubmit={handleSubmit} >
        <Row>
          <label htmlFor="name">
            Nombre completo:
            <input
              type="text"
              name="Nombre"
              id="name"
              required />
            <ValidationError
              prefix="Nombre"
              field="name"
              errors={state.errors}
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
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </label>
        </Row>

        <Row>
          <Col>
            <label htmlFor="birthday" required >Fecha de nacimiento:<br />
              <input type="birthday" name="Fecha de nacimiento" id="birthday" placeholder="DD/MM/AAAA" />
            </label>
          </Col>
          <Col>
            <label htmlFor="telephone" required >Número de teléfono<br />
              <input type="telephone" name="Teléfono" id="telephone" placeholder="Teléfono" />
            </label>
          </Col>
        </Row>

        <Row>
          <label htmlFor="observations" required >  Observaciones (TDA, TDAH, TEA, necesidades especiales...):
            <textarea name="Observaciones" id="observations"></textarea>
            <ValidationError
              prefix="Observaciones"
              field="observations"
              errors={state.errors}
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