import React, { Component } from 'react';

import ContactForm from '../components/ContactForm'

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
          <ContactForm />

          <footer>
          </footer>
        </article>
      </div>
    );
  }
}

export default Contact;