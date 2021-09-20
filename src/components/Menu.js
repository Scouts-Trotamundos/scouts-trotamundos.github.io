import React, { Component } from 'react';

class Menu extends Component {
  toggleMenu = (e) => {
    console.log("TEST")
    // this.props.onToggleMenu(!this.props.isToggle)
    this.props.onToggleChange(!this.props.isToggle)
  }

  render() {
    return (
      <div>
        <section id="menu" style={{
          transform: this.props.isToggle?'translateX(25em)':"none",
          }}
        >

          {/* <!-- Search --> */}
          <section >
            <form className="search" method="get" action="#">
              <input type="text" name="query" placeholder="Search" />
            </form>
          </section>

          {/* <!-- Linkçs --> */}
          <section>
            <ul className="links">
              <li>
                <a href="/">
                  <h3>Lorem ipsum</h3>
                  <p>Feugiat tempus veroeros dolor</p>
                </a>
              </li>
              <li>
                <a href="/">
                  <h3>Dolor sit amet</h3>
                  <p>Sed vitae justo condimentum</p>
                </a>
              </li>
              <li>
                <a href="/">
                  <h3>Feugiat veroeros</h3>
                  <p>Phasellus sed ultricies mi congue</p>
                </a>
              </li>
              <li>
                <a href="/">
                  <h3>Etiam sed consequat</h3>
                  <p>Porta lectus amet ultricies</p>
                </a>
              </li>
            </ul>
          </section>

          {/* <!-- Actions --> */}
          <section>
            <ul className="actions stacked">
              <li><a href="/" className="button large fit">Log In</a></li>
            </ul>
          </section>

        </section>

      </div>
    );
  }
}

export default Menu;