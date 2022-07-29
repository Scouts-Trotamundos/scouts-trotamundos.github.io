import React from "react";
import { useForm } from "@formspree/react";
import Navbar from "react-bootstrap/Navbar";
import { IndexLinkContainer } from "react-router-bootstrap";

import ContactFormKids from "./ContactFormKids";
import ContactFormScouters from "./ContactFormScouters";

import "./ContactForm.css";
const ContactForm = (props) => {
  const [stateKids, handleSubmitKids] = useForm("mbjqvnaq");
  const [stateScouters, handleSubmitScouters] = useForm("maykwnbz");
  if (stateKids.succeeded || stateScouters.succeeded) {
    return (
      <div>
        <div id="message">
          <p>
            <b>
              Muchas gracias por mandarnos un mensaje, en cuanto podamos, te
              daremos responderemos.
            </b>
          </p>
        </div>
        <IndexLinkContainer to="/">
          <Navbar.Brand href="/" id="brand-name">
            Volver al inicio
          </Navbar.Brand>
        </IndexLinkContainer>
      </div>
    );
  }
  if (stateKids.errors.length > 0 || stateScouters.errors.length > 0) {
    return (
      <div>
        {stateKids.errors.length > 0 && (
          <div id="errors">{JSON.stringify(stateKids.errors)}</div>
        )}
        {stateScouters.errors.length > 0 && (
          <div id="errors">{JSON.stringify(stateScouters.errors)}</div>
        )}
      </div>
    );
  }
  return (
    <div>
      <button
        id="back-button"
        onClick={() => {
          props.setIsAnswered(false);
        }}
      >
        Atrás
      </button>
      {props.isScouter && (
        <ContactFormScouters
          state={stateScouters}
          handleSubmit={handleSubmitScouters}
        />
      )}
      {!props.isScouter && (
        <ContactFormKids state={stateKids} handleSubmit={handleSubmitKids} />
      )}
    </div>
  );
};
export default ContactForm;
