import Row from "react-bootstrap/Row";

import { ValidationError } from "@formspree/react";
const ContactPartsText = (props) => {
  return (
    <Row>
      <label htmlFor={props.name}>
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
          <textarea name="Observaciones" id="observations" required></textarea>
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
      </label>
    </Row>
  );
};

export default ContactPartsText;
