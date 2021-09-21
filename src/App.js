
import React, { useState } from 'react';

import { Route, HashRouter } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import NavigationBar from './components/NavigationBar';
import SideBar from './components/SideBar';
import Menu from './components/Menu';

import Sections from './pages/Sections';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import AboutUs from './pages/AboutUs';
import Ubication from './pages/Ubication';
import UnderConstruction from './pages/UnderConstruction';
import Castores from './pages/section/Castores';
import Manada from './pages/section/Manada';
import Tropa from './pages/section/Tropa';
import Esculta from './pages/section/Esculta';
import Clan from './pages/section/Clan';

const App = () => {
  const [isToggle, setToggle] = useState(true)

  function mainOnClickHandler(e) {
    isToggle ? setToggle(isToggle) : setToggle(!isToggle)
    console.log(e)
  }
  return (
    <div className="App">
      <Container fluid>

        <HashRouter>
          {(process.env.REACT_APP_ENVIRONMENT === 'dev') ? (
            <Container fluid>
              <NavigationBar isToggle={isToggle} onToggleChange={setToggle}  ></NavigationBar>
            </Container>
          ) : (
            null
          )}

          {(process.env.REACT_APP_ENVIRONMENT === 'dev') ? (
            <Container fluid>
              <div id="wrapper">
                <div id="main-articles" onClick={mainOnClickHandler}>
                  <div>
                    <Route exact path="/" component={AboutUs} />
                    <Route path="/sections" component={Sections} />
                    <Route path="/about" component={AboutUs} />
                    <Route path="/faq" component={FAQ} />
                    <Route path="/ubication" component={Ubication} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/section/castores" component={Castores} />
                    <Route path="/section/manada" component={Manada} />
                    <Route path="/section/tropa" component={Tropa} />
                    <Route path="/section/esculta" component={Esculta} />
                    <Route path="/section/clan" component={Clan} />
                  </div>
                </div>
              </div>
            </Container>
          ) : (
            <Container fluid="xl">
              <Row className="justify-content-md-center">
                <Col lg="2"><SideBar></SideBar></Col>
                <Col ><div>
                  <Route exact path="/" component={UnderConstruction} />
                </div></Col>
              </Row>


            </Container>
          )}


        </HashRouter>
      </Container>
    </div>
  );
}

export default App;