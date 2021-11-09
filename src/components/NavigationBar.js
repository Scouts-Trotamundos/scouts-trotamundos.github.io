// create a react component named NavigationBar
import React, { Component } from 'react';
import {
  HashRouter
} from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import logoTrota from '../assets/images/favicon.ico'
import { IndexLinkContainer } from 'react-router-bootstrap';

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
  }
  render() {
    return (
      <HashRouter>
        <Navbar expand="md" id="header-navbar" fixed="top" >
          <Container fluid="md">
            <IndexLinkContainer to="/">
              <Image src={logoTrota} fluid width="30" height="30" />
            </IndexLinkContainer>
            <IndexLinkContainer to="/">
              <Navbar.Brand href="/" id="brand-name">GS Trotamundos 697</Navbar.Brand>
            </IndexLinkContainer>
            <Nav.Link eventKey="2" className="divider"> </Nav.Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="navbar-divider">
              <Nav className="me-auto">
                <IndexLinkContainer to="/ubication">
                  <Nav.Link eventKey="3">
                    Ubicación
                  </Nav.Link>
                </IndexLinkContainer >
                <IndexLinkContainer to="/contact">
                  <Nav.Link eventKey="3">
                    Contacto
                  </Nav.Link>
                </IndexLinkContainer >

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </HashRouter>
    );
  }
}

export default NavigationBar;