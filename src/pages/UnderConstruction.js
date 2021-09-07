import React, { Component } from 'react';

class UnderConstruction extends Component {
  render() {
    return (
      <div id="main">
        {/* <!-- Post --> */}
        <article className="post">
          <header>
            <div className="title">
              <h2><a href="single.html">Estamos preparando la web</a></h2>
              
            </div>
          </header>
          <a href="single.html" className="image featured"><img src="images/pic01.jpg" alt="" /></a>
          {/* <p>Rellena el siguiente formulario con tus datos (<b>En construcción</b>)</p> */}
              <p>Para cualquier duda, mándanos un correo electrónico a <a href="mailto: hola@somostrotamundos.org">hola@somostrotamundos.org</a></p>
          {/* <div class="container">
            <form action="action_page.php">

              <label for="fname">First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name.." />

              <label for="lname">Last Name</label>
              <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

              <label for="country">Country</label>
              <select id="country" name="country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>

              <label for="subject">Subject</label>
              <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>

              <input type="submit" value="Submit" />

            </form>
            <br></br>
          </div> */}
          <footer>
            {/* <ul className="actions">
              <li><a href="single.html" className="button large">Continue Reading</a></li>
            </ul>
            <ul className="stats">
              <li><a href="/">General</a></li>
              <li><a href="/" className="icon solid fa-heart">28</a></li>
              <li><a href="/" className="icon solid fa-comment">128</a></li>
            </ul> */}
          </footer>
        </article>
      </div>
    );
  }
}

export default UnderConstruction;