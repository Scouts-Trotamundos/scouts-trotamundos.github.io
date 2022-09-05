import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { ValidationError } from "@formspree/react";

const ContactPartsText = (props) => {
  return (
    <Row>
      {/* <label htmlFor={props.name}>
        {props.label}

        {!props.isTextArea && (
          <input
            type="text"
            name={props.name}
            id={props.name}
            required={props.required}
          />
        )}
        {props.isTextArea && (
          <textarea name={props.name} id={props.name} required></textarea>
        )}
        <ValidationError
          prefix={props.name + " "}
          field={props.name}
          errors={[
            {
              field: props.name,
              message: props.validationErrorMessage,
              code: props.type,
            },
          ]}
        />
      </label> */}

      <Form>
        {!props.isTextArea && (
          <>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>{props.name}</Form.Label>
              <Form.Control type={props.name} placeholder={props.label} />
              <Form.Text className="text-muted">
                El <b>{props.name}</b> {props.validationErrorMessage}
              </Form.Text>
            </Form.Group>
          </>
        )}
        {props.isTextArea && (
          <>
            <Form.Label htmlFor={props.name}>{props.name}</Form.Label>
            <Form.Control
              type="password"
              id={props.name}
              aria-describedby={props.name}
            />
            <Form.Text id={props.name} muted>
              El <b>{props.name}</b> {props.validationErrorMessage}
            </Form.Text>
          </>
        )}
      </Form>
    </Row>
  );
};

export default ContactPartsText;
