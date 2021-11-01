import React, { Component } from 'react';
import {
  // NavLink,
  HashRouter
} from "react-router-dom";

import InstagramFeed from './sidebar/InstagramFeed'


//create a reactjs component named SideBar
class SideBar extends Component {
  // constructor() {
  //   super();
  // }
  render() {



    return (
      <HashRouter>
        <div>
          {/* <!-- Sidebar --> */}
          <section id="sidebar-2">

            {/* <!-- Mini Posts --> */}
            <section>
              <div className="mini-posts-2">

                <InstagramFeed></InstagramFeed>
              </div>
            </section>
          </section>
        </div>
      </HashRouter>
    );
  }
}

export default SideBar;