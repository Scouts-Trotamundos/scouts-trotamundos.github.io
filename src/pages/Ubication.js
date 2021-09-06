import React, { Component } from 'react';

class Ubication extends Component {
  render() {
    return (
      <div id="main">
        {/* <!-- Post --> */}
        <article className="post">
          <header>
            <div className="title">
              <h2><a href="single.html">UBICATION PAGE GS Trotamundos 697</a></h2>
              <p>Lorem ipsum dolor amet nullam consequat etiam feugiat</p>
            </div>
          </header>
          <a href="single.html" className="image featured"><img src="images/pic01.jpg" alt="" /></a>
          <iframe 
          title="Hogar Scout"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d761.0183309229703!2d-3.9189920810175978!3d40.27412138802538!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd419291fa82f113%3A0xdb6300917dede755!2sPublic%20school%20the%20Casta%C3%B1eras!5e0!3m2!1sen!2ses!4v1629209738004!5m2!1sen!2ses"
          width="800"
          height="600"
          allowFullScreen=""
          loading="lazy"></iframe>
          
        </article>
      </div>
    );
  }
}

export default Ubication;