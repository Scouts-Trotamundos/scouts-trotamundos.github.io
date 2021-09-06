// create a react component named NavigationBar
import React, { Component } from 'react';
import {
  NavLink,
  HashRouter
} from "react-router-dom";

class NavigationBar extends Component {
  constructor() {
    super();

    this.state = {
      btnDisplay: "none",
    }
  }
  handleDropdownMenuBtn = (e) => {
    e.preventDefault();
    let display = this.state.btnDisplay;

    ("none" === display)?
    this.setState({
      btnDisplay: "block"
    }):
    this.setState({
      btnDisplay: "none"
    })

  }
  render() {



    return (
      <HashRouter>
        <div>

          <header id="header">

            <h1><a href="index.html">GS Trotamundos 697</a></h1>


            <nav className="links">

              <ul>
                <div className="dropdown">
                  <button className="dropbtn" onClick={this.handleDropdownMenuBtn} >Secciones</button>
                  <div className="dropdown-content" style={{ display: this.state.btnDisplay }}>
                    <NavLink to="/section/castores">Colonia Ottawa</NavLink>
                    <NavLink to="/section/manada">Manada Natoo</NavLink>
                    <NavLink to="/section/tropa">Tropa Siksika</NavLink>
                    <NavLink to="/section/esculta">Esculta Ragnarok</NavLink>
                    <NavLink to="/section/clan">Clan Bushido</NavLink>
                  </div>
                </div>
                <li><NavLink to="/about">Sobre nosotr@s</NavLink></li>
                <li><NavLink to="/faq">Información</NavLink></li>
                <li><NavLink to="/ubication">Ubicación</NavLink></li>
                <li><NavLink to="/contact">Contacto</NavLink></li>
              </ul>
            </nav>

          </header>
        </div>
      </HashRouter>
    );
  }
}

export default NavigationBar;