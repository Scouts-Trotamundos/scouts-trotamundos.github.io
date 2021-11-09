
import React, { useState } from 'react';

import { Route, HashRouter } from "react-router-dom";
import Container from 'react-bootstrap/Container'

import NavigationBar from './components/NavigationBar';

import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Ubication from './pages/Ubication';
import ContactOk from './pages/ContactOk'

const App = () => {
  const [isToggle, setToggle] = useState(true)

  function mainOnClickHandler(e) {
    isToggle ? setToggle(isToggle) : setToggle(!isToggle)
    console.log(e)
  }
  return (
    <div className="App">
        <Container fluid>
          <NavigationBar isToggle={isToggle} onToggleChange={setToggle}  ></NavigationBar>
          <HashRouter>
            <Container fluid>
              <div id="wrapper">
                <div id="main-articles" onClick={mainOnClickHandler}>
                  <div>
                    <Route exact path="/" component={AboutUs} />
                    <Route path="/about" component={AboutUs} />
                    <Route path="/ubication" component={Ubication} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/contactOk" component={ContactOk} />
                  </div>
                </div>
              </div>
            </Container>
          </HashRouter>
        </Container>
    </div>
  );
}

export default App;