/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./Menu.styles.css";
import MenuItems from "./MenuItems.component";

import { Toggle } from "react-powerplug";
import { Plus, Minus, Settings,Feather } from 'react-feather';
import Properties from "./Properties.component";


class Menu extends Component {
  state = {};

  render() {
    return (
      <nav role="navigation">
        <h2 className="logo">
          <Feather size="25" />
          <span>Memes</span>
        </h2>
        <Toggle initial={true}>
          {({ on, toggle }) => (
            <>
              <div className="toggle" onClick={toggle} checked={on}>
              <h5>
							{on ? <Minus size="12" /> : <Plus size="12" />} <Settings size="12" /> properties
						</h5>
              </div>

              {on && <div className="menu1" id="canvas"><Properties /></div>}
            </>
          )}
        </Toggle>
        <Toggle initial={false}>
          {({ on, toggle }) => (
            <>
              <div className="toggle" onClick={toggle} checked={on}>
              <h5>
							{on ? <Minus size="12" /> : <Plus size="12" />} <Settings size="12" /> canvas one
						</h5>
              </div>

              {on && <div className="menu1" id="canvas"><MenuItems /></div>}
            </>
          )}
        </Toggle>
        <Toggle initial={false}>
          {({ on, toggle }) => (
            <>
              <div className="toggle" onClick={toggle} checked={on}>
              <h5>
							{on ? <Minus size="12" /> : <Plus size="12" />} <Settings size="12" /> canvas two
						</h5>
              </div>

              {on && <div className="menu2" id="canvas"><MenuItems /> </div>}
            </>
          )}
        </Toggle>
      </nav>
    );
  }
}

export default Menu;
