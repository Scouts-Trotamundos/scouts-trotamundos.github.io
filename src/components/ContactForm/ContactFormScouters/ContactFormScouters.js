import React from "react";

import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ContactPartsText from "../ContactParts/ContactPartsText.js";

const ContactFormScouters = (props) => {
  return (
    <Container fluid>
      <h1>Rellena el siguiente formulario con tus datos</h1>
      <form onSubmit={props.handleSubmit}>
        <ContactPartsText
          label="Indica tu nombre completo"
          validationErrorMessage="con apellidos"
          name="Nombre"
          type="TYPE_TEXT"
          required={true}
          isTextArea={false}
        />
        <ContactPartsText
          label="Correo electrónico:"
          validationErrorMessage="debe contener un email válido con @"
          name="Email"
          type="TYPE_EMAIL"
          required={true}
          isTextArea={false}
        />
        <Row>
          <Col>
            <ContactPartsText
              label="Fecha de nacimiento:"
              validationErrorMessage=" en formato DD/MM/AAAA"
              name="Cumpleaños"
              type="TYPE_NUMERIC"
              required={true}
              isTextArea={false}
            />
          </Col>
          <Col>
            <ContactPartsText
              label="Número de teléfono:"
              validationErrorMessage=" en formato AAA-BBB-CCC."
              name="Teléfono"
              type="TYPE_NUMERIC"
              required={true}
              isTextArea={false}
            />
          </Col>
        </Row>
        <ContactPartsText
          label="Cuéntanos sobre ti (a qué te dedicas, edad, aficiones y todo lo que creas que pueda ser de interés):"
          name="Obervaciones"
          type="TYPE_TEXT"
          required={true}
          isTextArea={true}
        />
        <button type="submit" disabled={props.state.submitting}>
          Enviar
        </button>
        <input type="hidden" name="_language" value="es" />
      </form>
    </Container>
  );
};

export default ContactFormScouters;
