import React, { Component } from "react";
import Menu from "../Menu/Menu.component";
import Canvas from "../Canvas/Canvas.component";
import "./Memes.styles.css";
import SettingsContext from "../../contexts/settings.context";
import { defaultSettings } from "../../contexts/settings.utils";

class Memes extends Component {
  state = {

    width:defaultSettings.width,
    height:defaultSettings.height,
    background:defaultSettings.background,

    setwidth : (w) => {this.setState({width:w})},
    setheight : (h) => {this.setState({height:h})},
    setbackground : (b) => {this.setState({background:b})}
    
  };

 
  render() {
    
    return (
      <div>
        <div className="root">
          <div className="wrapper">
            <SettingsContext.Provider value={this.state}>
              <Menu />
              <Canvas />
            </SettingsContext.Provider>
          </div>
        </div>
      </div>
    );
  }
}

export default Memes;
