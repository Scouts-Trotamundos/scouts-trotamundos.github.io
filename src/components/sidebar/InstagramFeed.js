import React, { Component } from 'react';
import {
  // NavLink,
  HashRouter
} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
class InstagramFeed extends Component {
  // constructor() {
  //   super();
  // }
  render() {



    return (
      <HashRouter>
        <div>

          {/* <!-- Mini Post --> */}
          <article className="mini-post">
            <header>
              <h3><FontAwesomeIcon icon={faInstagram} /><a href="https://www.instagram.com/gruposcouttrotamundos/">Instagram</a></h3>
              <h3><FontAwesomeIcon icon={faFacebook} /><a href="https://www.facebook.com/GrupoScoutTrotamundos">Facebook</a></h3>
              <h3><FontAwesomeIcon icon={faEnvelope} /><a href="mailto: hola@somostrotamundos.org">Email</a> </h3>
            </header>
            
            <a href="single.html" className="image"><img src="images/pic04.jpg" alt="" /></a>
            
          </article>

        </div>
      </HashRouter>
    );
  }
}

export default InstagramFeed;