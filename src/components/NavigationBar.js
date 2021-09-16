// create a react component named NavigationBar
import React, { Component } from 'react';
import {
  NavLink,
  HashRouter
} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"

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

    ("none" === display) ?
      this.setState({
        btnDisplay: "block"
      }) :
      this.setState({
        btnDisplay: "none"
      })

  }
  resetBtnDisplay = (e) => {
    this.setState({
      btnDisplay: "none"
    })
  }

  toggleMenu = (e) => {
    this.props.onToggleChange(!this.props.isToggle)
  }
  mainOnClickHandler = (e) => {
    console.log("TEST")
    // this.props.isToggle ? this.props.onToggleChange(this.props.isToggle) : this.props.onToggleChange(!this.props.isToggle)
  }
  render() {
    return (
      <HashRouter>
        <div>
          <header id="header">
            <h1><NavLink to="/" onClick={this.resetBtnDisplay} >GS Trotamundos 697</NavLink></h1>
            {(process.env.REACT_APP_ENVIRONMENT === 'dev') ? (
              <nav className="links">
                <ul>
                  <div className="dropdown">
                    <button className="dropbtn" onClick={this.handleDropdownMenuBtn} >Secciones</button>
                    <div className="dropdown-content" style={{ display: this.state.btnDisplay }}>
                      <NavLink to="/section/castores" onClick={this.resetBtnDisplay} >Colonia Ottawa</NavLink>
                      <NavLink to="/section/manada" onClick={this.resetBtnDisplay} >Manada Natoo</NavLink>
                      <NavLink to="/section/tropa" onClick={this.resetBtnDisplay} >Tropa Siksika</NavLink>
                      <NavLink to="/section/esculta" onClick={this.resetBtnDisplay} >Esculta Ragnarok</NavLink>
                      <NavLink to="/section/clan" onClick={this.resetBtnDisplay} >Clan Bushido</NavLink>
                    </div>
                  </div>
                  <li><NavLink to="/about" onClick={this.resetBtnDisplay} >Sobre nosotr@s</NavLink></li>
                  <li><NavLink to="/faq" onClick={this.resetBtnDisplay}>Información</NavLink></li>
                  <li><NavLink to="/ubication" onClick={this.resetBtnDisplay} >Ubicación</NavLink></li>
                  <li><NavLink to="/contact" onClick={this.resetBtnDisplay} >Contacto</NavLink></li>
                </ul>
              </nav>
            ) : (
              null
            )}

            {(process.env.REACT_APP_ENVIRONMENT === 'dev') ? (
              <nav className="main">
                <ul>
                  <li className="menu">
                    <div onClick={this.toggleMenu} id="menuBarIcon"><FontAwesomeIcon icon={faBars} >Menu</FontAwesomeIcon></div>
                  </li>
                </ul>
              </nav>
            ) : (
              null
            )}
          </header>
        </div>
      </HashRouter>
    );
  }
}

export default NavigationBar;