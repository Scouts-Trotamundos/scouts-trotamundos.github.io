// create a react component named NavigationBar
import React, { Component } from 'react';
import {
  HashRouter
} from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
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
    // this.props.isToggle ? this.props.onToggleChange(this.props.isToggle) : this.props.onToggleChange(!this.props.isToggle)
  }
  render() {
    return (
      <HashRouter>
        <div>
          <Navbar bg="light" expand="lg" id="header">
            <Container>
              <IndexLinkContainer to="/">
                <Navbar.Brand href="/">GS Trotamundos 697</Navbar.Brand>
              </IndexLinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <NavDropdown title="Secciones" id="nav-dropdown">
                  <IndexLinkContainer to="/section/castores">
                    <NavDropdown.Item eventKey="4.1">Colonia Ottawa</NavDropdown.Item>
                  </IndexLinkContainer>
                  <IndexLinkContainer to="/section/manada">
                    <NavDropdown.Item eventKey="4.2">Manada Natoo</NavDropdown.Item>
                  </IndexLinkContainer>
                  <IndexLinkContainer to="/section/tropa">
                    <NavDropdown.Item eventKey="4.3">Tropa Siksika</NavDropdown.Item>
                  </IndexLinkContainer>
                  <IndexLinkContainer to="/section/esculta">
                    <NavDropdown.Item eventKey="4.4">Esculta Ragnarok</NavDropdown.Item>
                  </IndexLinkContainer>
                  <IndexLinkContainer to="/section/clan">
                    <NavDropdown.Item eventKey="4.5">Clan Bushido</NavDropdown.Item>
                  </IndexLinkContainer>
                </NavDropdown>
                <Nav className="me-auto">
                  <IndexLinkContainer to="/about">
                    <Nav.Link eventKey="2">
                      Sobre nosotr@s
                    </Nav.Link>
                  </IndexLinkContainer >
                  <IndexLinkContainer to="/faq">
                    <Nav.Link eventKey="3">
                      Información
                    </Nav.Link>
                  </IndexLinkContainer >
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
          {/* <header id="header"> */}
          {/* <Nav variant="pills" activeKey="1" id="toggleable-navbar">
              <Container>
                <IndexLinkContainer to="/">
                  <Nav.Item>
                    <Nav.Link eventKey="1" className="nav-title" href="/">
                      GS Trotamundos 697
                    </Nav.Link>
                  </Nav.Item>
                </IndexLinkContainer>
                <NavDropdown.Divider />
                <NavDropdown title="Secciones" id="nav-dropdown">
                  <IndexLinkContainer to="/section/castores">
                    <NavDropdown.Item eventKey="4.1">Colonia Ottawa</NavDropdown.Item>
                  </IndexLinkContainer>
                  <IndexLinkContainer to="/section/manada">
                    <NavDropdown.Item eventKey="4.2">Manada Natoo</NavDropdown.Item>
                  </IndexLinkContainer>
                  <IndexLinkContainer to="/section/tropa">
                    <NavDropdown.Item eventKey="4.3">Tropa Siksika</NavDropdown.Item>
                  </IndexLinkContainer>
                  <IndexLinkContainer to="/section/esculta">
                    <NavDropdown.Item eventKey="4.4">Esculta Ragnarok</NavDropdown.Item>
                  </IndexLinkContainer>
                  <IndexLinkContainer to="/section/clan">
                    <NavDropdown.Item eventKey="4.5">Clan Bushido</NavDropdown.Item>
                  </IndexLinkContainer>
                </NavDropdown>
                <IndexLinkContainer to="/about">
                  <Nav.Link eventKey="2">
                    Sobre nosotr@s
                  </Nav.Link>
                </IndexLinkContainer >
                <IndexLinkContainer to="/faq">
                  <Nav.Link eventKey="3">
                    Información
                  </Nav.Link>
                </IndexLinkContainer >
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
              </Container>
            </Nav>
            <Nav className="justify-content-end main" id="toggleable-menu-sidebar">
              <Nav.Item onClick={this.toggleMenu}>
                <ul>
                  <li className="menu">
                    <div onClick={this.toggleMenu} id="menuBarIcon"><FontAwesomeIcon icon={faBars} >Menu</FontAwesomeIcon></div>
                  </li>
                </ul>
              </Nav.Item>
            </Nav> */}

          {/* </header> */}
        </div>
      </HashRouter>
    );
  }
}

export default NavigationBar;