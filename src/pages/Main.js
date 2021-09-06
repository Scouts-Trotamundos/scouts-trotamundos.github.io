import React, { Component } from 'react';
import {
  NavLink,
  HashRouter
} from "react-router-dom";
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div id="main">
          {/* <!-- Post --> */}
          <article className="post">
            <header>
              <div className="title">
                <h2><a href="single.html">Grupo Scout Trotamundos 697</a></h2>
                {/* <p>Lorem ipsum dolor amet nullam consequat etiam feugiat</p> */}
              </div>

            </header>
            <a href="single.html" className="image featured"><img src="images/pic01.jpg" alt="" /></a>

            <p><NavLink to="/about">¿Necesitas información sobre el grupo?</NavLink></p>
            {/* <footer>
            <ul className="actions">
              <li><a href="single.html" className="button large">Continue Reading</a></li>
            </ul>
            <ul className="stats">
              <li><a href="/">General</a></li>
              <li><a href="/" className="icon solid fa-heart">28</a></li>
              <li><a href="/" className="icon solid fa-comment">128</a></li>
            </ul>
          </footer> */}
          </article>
        </div>
        
      </HashRouter>
        );
  }
}

export default Main;