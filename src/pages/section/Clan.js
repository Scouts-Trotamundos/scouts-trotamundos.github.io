import React, { Component } from 'react';

class Castores extends Component {
  render() {
    return (
      <div id="main">
        {/* <!-- Post --> */}
        <article className="post">
          <header>
            <div className="title">
              <h2><a href="single.html">CLAN GS Trotamundos 697</a></h2>
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

export default Castores;