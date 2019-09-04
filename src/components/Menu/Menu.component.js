/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./Menu.styles.css";
import MenuItems from "./MenuItems.component";

class Menu extends Component {
  state = {};

  

  

  render() {
    return (
     
          <nav role="navigation">
            <h2 className="logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
              <span>Memes</span>
            </h2>
            <h4>Properties</h4>
            <MenuItems />
          </nav>
         
       
    );
  }
}

export default Menu;
