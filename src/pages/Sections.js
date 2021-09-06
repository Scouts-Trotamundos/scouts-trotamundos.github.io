import React, { Component } from 'react';
import {
  NavLink,
} from "react-router-dom";
class Sections extends Component {
  render() {
    return (
      <div id="main">
        {/* <!-- Post --> */}
        <article className="post">
          <header>
            <div className="title">
              <h2> <NavLink to="/section/castores">Colonia Ottawa</NavLink></h2>
              <p>"¡¡Compartir!!"</p>
            </div>
          </header>
          <a href="single.html" className="image featured"><img src="images/pic01.jpg" alt="" /></a>
          <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod
            placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue
            ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
            ultricies congue gravida diam non fringilla.</p>
          <footer>
          </footer>
        </article>

        <article className="post">
          <header>
            <div className="title">
              <h2> <NavLink to="/section/manada">Manada Natoo</NavLink></h2>
              <p>"Los lobatos/as haremos lo mejor"</p>
            </div>
          </header>
          <a href="single.html" className="image featured"><img src="images/pic01.jpg" alt="" /></a>
          <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod
            placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue
            ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
            ultricies congue gravida diam non fringilla.</p>
          <footer>
          </footer>
        </article>

        <article className="post">
          <header>
            <div className="title">
              <h2><NavLink to="/section/tropa">Tropa Siksika</NavLink></h2>
              <p>"Los/as de los pies negros"</p>
            </div>
          </header>
          <a href="single.html" className="image featured"><img src="images/pic01.jpg" alt="" /></a>
          <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod
            placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue
            ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
            ultricies congue gravida diam non fringilla.</p>
          <footer>
          </footer>
        </article>


        <article className="post">
          <header>
            <div className="title">
              <h2><NavLink to="/section/esculta">Esculta Ragnarok</NavLink></h2>
              <p>"¡Unidad!"</p>
            </div>
          </header>
          <a href="single.html" className="image featured"><img src="images/pic01.jpg" alt="" /></a>
          <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod
            placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue
            ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
            ultricies congue gravida diam non fringilla.</p>
          <footer>
          </footer>
        </article>

        <article className="post">
          <header>
            <div className="title">
              <h2><NavLink to="/section/clan">Clan Bushido</NavLink></h2>
              <p>Lorem ipsum dolor amet nullam consequat etiam feugiat</p>
            </div>
          </header>
          <a href="single.html" className="image featured"><img src="images/pic01.jpg" alt="" /></a>
          <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod
            placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue
            ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
            ultricies congue gravida diam non fringilla.</p>
          <footer>
          </footer>
        </article>
      </div>
    );
  }
}

export default Sections;